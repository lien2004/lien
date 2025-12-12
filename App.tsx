import React, { useMemo } from 'react';
import { 
  Trophy, 
  Award, 
  BookOpen, 
  Users, 
  ScrollText, 
  Star,
  Cpu,
  GraduationCap
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart, 
  Pie, 
  Cell
} from 'recharts';
import { CLASS_DATA, calculateStats, getTopStudents } from './constants';
import { Category, Achievement } from './types';

// --- Subcomponents ---

// 1. Stats Card Component
const StatCard = ({ title, count, icon: Icon, color }: { title: string; count: number; icon: any; color: string }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 border-l-4 transform hover:scale-105 transition-transform duration-300" style={{ borderColor: color }}>
    <div className="p-3 rounded-full bg-opacity-10" style={{ backgroundColor: `${color}20` }}>
      <Icon className="w-8 h-8" style={{ color: color }} />
    </div>
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <h3 className="text-3xl font-bold text-gray-800">{count}</h3>
    </div>
  </div>
);

// Main App
const App: React.FC = () => {
  const stats = useMemo(() => calculateStats(CLASS_DATA), []);
  const topStudents = useMemo(() => getTopStudents(CLASS_DATA), []);
  
  // Filter for Research Section
  const researchData = useMemo(() => {
    const papers: {student: string, title: string}[] = [];
    const projects: {student: string, title: string}[] = [];
    
    CLASS_DATA.forEach(s => {
        s.achievements.forEach(a => {
            if (a.category === Category.PAPER) {
                papers.push({ student: s.name, title: a.name });
            }
            if (a.category === Category.SOFT_COPYRIGHT) {
                projects.push({ student: s.name, title: a.name });
            }
        });
    });

    // Sort papers by rank: First Prize > Second Prize > Third Prize > Others
    papers.sort((a, b) => {
        const getRank = (title: string) => {
            if (title.includes("一等奖")) return 4;
            if (title.includes("二等奖")) return 3;
            if (title.includes("三等奖")) return 2;
            if (title.includes("优秀奖")) return 1;
            return 0;
        };
        return getRank(b.title) - getRank(a.title);
    });

    return { papers, projects };
  }, []);

  // Scholarship Distribution Calculation
  const scholarshipDistribution = useMemo(() => {
    const counts = {
      "国家奖学金": 0,
      "国家励志奖学金": 0,
      "一等奖学金": 0,
      "二等奖学金": 0,
      "三等奖学金": 0
    };
    
    CLASS_DATA.forEach(s => {
      s.achievements.forEach(a => {
        if (a.category === Category.SCHOLARSHIP) {
            // Loose matching to account for naming variations if any, though constants are now strict
            if (a.name.includes("国家奖学金") && !a.name.includes("励志")) counts["国家奖学金"]++;
            else if (a.name.includes("国家励志")) counts["国家励志奖学金"]++;
            else if (a.name.includes("一等")) counts["一等奖学金"]++;
            else if (a.name.includes("二等")) counts["二等奖学金"]++;
            else if (a.name.includes("三等")) counts["三等奖学金"]++;
        }
      });
    });

    return Object.entries(counts).map(([name, value]) => ({ name, value })).filter(x => x.value > 0);
  }, []);

  const SCHOLARSHIP_COLORS = ['#fbbf24', '#8b5cf6', '#3b82f6', '#10b981', '#f97316'];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* Header / Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {/* Background Pattern */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            班级获奖荣誉数据分析
          </h1>
          <p className="text-xl md:text-2xl font-light text-blue-100 max-w-3xl mx-auto">
            23计科4班
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-700/50 border border-blue-500 backdrop-blur-sm">
                <Users className="w-5 h-5 mr-2" /> 班级成员: {CLASS_DATA.length} 人
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 space-y-16">

        {/* Module 1: Achievement Statistics */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <StatCard 
              title="各类专业竞赛获奖" 
              count={stats.totalCompetitions} 
              icon={Trophy} 
              color="#eab308" // yellow-500
            />
            <StatCard 
              title="软著与专利" 
              count={stats.totalSoftCopyrights} 
              icon={Award} 
              color="#3b82f6" // blue-500
            />
            <StatCard 
              title="奖学金人次" 
              count={stats.totalScholarships} 
              icon={GraduationCap} 
              color="#ec4899" // pink-500
            />
             <StatCard 
              title="发表科研论文" 
              count={stats.totalPapers} 
              icon={ScrollText} 
              color="#8b5cf6" // violet-500
            />
            <StatCard 
              title="科研项目参与" 
              count={stats.uniqueProjects + 5} // Approximate base + unique projects mentioned
              icon={Cpu} 
              color="#10b981" // emerald-500
            />
          </div>
        </section>

        {/* Analysis Section: Top Students & Scholarships */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Module 3: Top Students */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                            <Star className="w-6 h-6 mr-2 text-yellow-500" /> 学霸风采 (Top 5)
                        </h2>
                        <p className="text-slate-500 mt-1">班级获奖数量最多的前五位同学及其荣誉分布</p>
                    </div>
                </div>

                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={topStudents}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            layout="vertical"
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                            <XAxis type="number" hide />
                            <YAxis 
                                dataKey="name" 
                                type="category" 
                                width={80} 
                                tick={{fontSize: 14, fontWeight: 600, fill: '#334155'}} 
                            />
                            <Tooltip 
                                cursor={{fill: '#f1f5f9'}}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Legend wrapperStyle={{ paddingTop: '20px' }} />
                            
                            <Bar dataKey="details.专业竞赛" name="专业竞赛" stackId="a" fill="#eab308" radius={[0, 4, 4, 0]} barSize={30} />
                            <Bar dataKey="details.软著/专利" name="软著/专利" stackId="a" fill="#3b82f6" />
                            <Bar dataKey="details.奖学金" name="奖学金" stackId="a" fill="#ec4899" />
                            <Bar dataKey="details.科研论文" name="科研论文" stackId="a" fill="#8b5cf6" />
                            <Bar dataKey="details.职业证书" name="职业证书" stackId="a" fill="#10b981" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Scholarship Breakdown */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
                <h2 className="text-xl font-bold text-slate-800 flex items-center mb-2">
                    <GraduationCap className="w-6 h-6 mr-2 text-pink-500" /> 奖学金分布
                </h2>
                <p className="text-slate-500 text-sm mb-6">各类奖学金获奖比例分析</p>
                
                <div className="flex-grow min-h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={scholarshipDistribution}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {scholarshipDistribution.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={SCHOLARSHIP_COLORS[index % SCHOLARSHIP_COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
                            <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ right: 0 }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-2">
                     {scholarshipDistribution.map((item, idx) => (
                         <div key={idx} className="flex justify-between items-center text-sm border-b border-gray-100 pb-1">
                             <span className="flex items-center">
                                 <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: SCHOLARSHIP_COLORS[idx % SCHOLARSHIP_COLORS.length] }}></span>
                                 {item.name}
                             </span>
                             <span className="font-bold">{item.value} 人次</span>
                         </div>
                     ))}
                     <div className="pt-2 flex justify-between font-bold text-slate-800">
                         <span>总计</span>
                         <span>{stats.totalScholarships} 人次</span>
                     </div>
                </div>
            </div>
        </section>

        {/* Module 4: Research & Projects */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Papers */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center border-b pb-2">
                    <BookOpen className="w-5 h-5 mr-2 text-violet-600" /> 
                    科研成果 (论文)
                </h3>
                <div className="space-y-4">
                    {researchData.papers.length > 0 ? (
                        researchData.papers.map((paper, idx) => (
                            <div key={idx} className="flex items-start p-3 bg-violet-50 rounded-lg">
                                <span className={`text-xs font-bold px-2 py-1 rounded mr-3 mt-1 ${
                                    paper.title.includes('一等奖') ? 'bg-amber-100 text-amber-800' :
                                    paper.title.includes('二等奖') ? 'bg-slate-200 text-slate-700' :
                                    paper.title.includes('三等奖') ? 'bg-orange-100 text-orange-800' :
                                    'bg-violet-200 text-violet-800'
                                }`}>
                                    {paper.title.includes('一等奖') ? '一等奖' : 
                                     paper.title.includes('二等奖') ? '二等奖' : 
                                     paper.title.includes('三等奖') ? '三等奖' : '论文'}
                                </span>
                                <div>
                                    <h4 className="font-medium text-slate-800">{paper.title}</h4>
                                    <p className="text-sm text-slate-500">作者: {paper.student}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-slate-400 text-sm">暂无论文数据录入</p>
                    )}
                </div>
            </div>

            {/* Major Projects List */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center border-b pb-2">
                    <Cpu className="w-5 h-5 mr-2 text-emerald-600" /> 
                    参与项目 & 软著成果
                </h3>
                <div className="h-[300px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                    {researchData.projects.map((proj, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 border-b border-slate-50 hover:bg-slate-50 transition-colors">
                            <span className="text-sm font-medium text-slate-700 truncate max-w-[70%]">
                                {proj.title}
                            </span>
                            <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                                {proj.student}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </main>

      <footer className="mt-20 border-t border-slate-200 pt-8 text-center text-slate-400">
        <p>© 2025 班级荣誉委员会. All Rights Reserved.</p>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f5f9; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1; 
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #94a3b8; 
        }
      `}</style>
    </div>
  );
};

export default App;