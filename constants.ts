import { Student, Category, Achievement, ProjectStats } from './types';

// Helper to create achievements easily
const comp = (name: string, level: string = ''): Achievement => ({ name, category: Category.COMPETITION, level });
const soft = (name: string): Achievement => ({ name, category: Category.SOFT_COPYRIGHT });
const schol = (name: string): Achievement => ({ name, category: Category.SCHOLARSHIP });
const cert = (name: string): Achievement => ({ name, category: Category.CERTIFICATE });
const paper = (name: string): Achievement => ({ name, category: Category.PAPER });
const other = (name: string): Achievement => ({ name, category: Category.OTHER });

export const CLASS_DATA: Student[] = [
  {
    name: "陈綦龙",
    achievements: [
      cert("HarmonyOS应用开发者高级认证"),
      cert("HarmonyOS应用开发者基础认证"),
      comp("蓝桥杯省赛三等奖"),
      comp("一专一赛物联网应用创新设计竞赛三等奖"),
      cert("英语四级")
    ]
  },
  {
    name: "郭天林",
    achievements: [
      soft("西南图书管理系统")
    ]
  },
  {
    name: "李佳怡",
    achievements: [
      soft("高校学生管理系统"),
      soft("好饭来社区订单管理系统"),
      soft("书海领航系统"),
      comp("中国国际大学生创新大赛院赛优秀奖"),
      comp("挑战杯校赛优秀奖")
    ]
  },
  {
    name: "李长会",
    achievements: [
      soft("知护康宁"),
      soft("互联网专家服务平台系统"),
      comp("国际大学生创新大赛校赛优秀奖")
    ]
  },
  {
    name: "鲁鸿",
    achievements: [
      cert("HarmonyOS应用开发者高级认证"),
      cert("HarmonyOS应用开发者基础认证"),
      soft("云乐游旅游推荐系统"),
      soft("健康体检管理系统"),
      soft("高校学生管理系统"),
      soft("好饭来社区订单管理系统"),
      soft("在线考试系统"),
      soft("书海领航系统"),
      soft("天籁逸享票务站系统"),
      soft("微型商城后台管理系统"),
      cert("阿里达摩院人工智能训练师初级证书"),
      cert("阿里达摩院人工智能训练师高级证书"),
      cert("24区块链学长任聘书"),
      comp("一专一赛物联网应用创新设计竞赛三等奖"),
      paper("学术科研论文三等奖")
    ]
  },
  {
    name: "梅林",
    achievements: [
      // Scholarships updated from image
      schol("国家奖学金"),
      schol("国家励志奖学金"),
      schol("一等奖学金"),
      schol("二等奖学金"),
      
      soft("智能陪诊系统"), soft("智能在线考试系统"), soft("亚热带悟饮斋系统"), soft("天籁逸享票务站系统"),
      soft("乐乐农产品销售系统"), soft("库存管理系统"), soft("仓库管理系统"), soft("进销存管理系统"),
      soft("家具城进销存管理系统"), soft("果香椰韵能量阁系统"), soft("大学生积分管理系统"), soft("报表管理系统"),
      soft("智慧康养服务管理系统"), soft("掌点外卖系统"), soft("研域智管系统"), soft("学生宿舍管理系统"),
      soft("售楼管理系统"), soft("高校助学贷款管理系统"),
      comp("全国大学生数学竞赛（非数学A类）二等奖"),
      comp("第十六届蓝桥杯重庆赛区Java软件开发大学B组二等奖"),
      comp("2025年睿抗机器人开发者大赛(RAICOM)重庆赛区编程技能三等奖"),
      comp("21 Days"),
      comp("重工程序设计学习比赛达人"),
      comp("2024年重庆工程学院大学生数学能力挑战赛优秀奖"),
      other("校级优秀教学信息员"),
      comp("第九届身心健康节学生田径运动会男子4x100m第一名"),
      comp("中国国际大学生创新大赛(2025)院赛三等奖"),
      other("晨课助教"), other("教学信息员"),
      other("精神文明建设先进个人"),
      other("优秀共青团员"),
      cert("全国大学英语四级考试(CET-4)"),
      cert("全国计算机等级考试二级(WPS Office高级)"),
      cert("全国计算机等级考试二级(C语言)"),
      cert("HarmonyOS应用开发者基础认证"),
      cert("HarmonyOS应用开发者高级认证")
    ]
  },
  {
    name: "冉金萍",
    achievements: [
      schol("三等奖学金")
    ]
  },
  {
    name: "苏炳燕",
    achievements: [
      schol("三等奖学金"),
      schol("三等奖学金"), // Listed twice in image logic for total count
      other("活动先进个人"),
      other("优秀共青团员"),
      other("2025年暑期三下乡社会实践活动先进个人")
    ]
  },
  {
    name: "孙春燕",
    achievements: [
      schol("三等奖学金"),
      comp("一专一赛物联网应用创新设计竞赛三等奖"),
      comp("中国国际大学生创新大赛院赛优秀奖"),
      soft("研域智管系统"),
      soft("智慧仓储管理系统")
    ]
  },
  {
    name: "谭永林",
    achievements: [
      comp("中国国际大学生创新大赛(2025)院赛优秀奖"),
      comp("中国国际大学生创新大赛(2025)院赛优秀奖"),
      comp("程序设计挑战赛(西南赛区)三等奖"),
      paper("学术科研论文三等奖"),
      comp("一专一赛物联网应用创新设计竞赛三等奖"),
      cert("HarmonyOS应用开发者高级认证"),
      cert("HarmonyOS应用开发者基础认证"),
      soft("微型商城后台管理系统"),
      soft("图趣生活小程序"),
      soft("书海领航系统"),
      soft("基于可燃物含水率监测的火灾风险预警系统"),
      soft("管货君系统"),
      cert("全国计算机等级考试二级证书")
    ]
  },
  {
    name: "唐守源",
    achievements: [
      paper("学术科研论文二等奖"),
      paper("学术科研论文二等奖"),
      comp("第十六届蓝桥杯C/C++程序设计大学B组二等奖(重庆赛区)"),
      comp("2024年(第7届)泰迪杯数据分析技能赛二等奖"),
      comp("2025年重庆市第十三届大学生程序设计大赛铜奖"),
      comp("中国国际大学生创新大赛(2025)校赛三等奖"),
      comp("2025中国高校计算机大赛-AIGC创新赛三等奖"),
      comp("第十一届全国大学生统计建模大赛(重庆赛区)三等奖"),
      soft("专业智能外卖配送软件"),
      soft("智能视觉化学习系统"),
      soft("智能农业种植管理软件"),
      soft("优易进销存系统"),
      soft("微型商城后台管理系统"),
      soft("图趣生活小程序"),
      soft("猫咪旅舍—专业猫咪交易平台"),
      soft("灵犀通用管理系统"),
      soft("基于可燃物含水率监测的火灾风险预警系统"),
      cert("专业技术资格(网络工程师)"),
      comp("第十五届蓝桥杯C/C++程序设计大学B组重庆赛区一等奖"),
      comp("第十五届蓝桥杯C/C++程序设计大学B组全国总决赛优秀奖"),
      comp("2024睿抗机器人开发者大赛(RAICOM)重庆市二等奖"),
      comp("2024睿抗机器人开发者大赛(RAICOM)全国总决赛三等奖"),
      comp("2024年重庆工程学院大学生数学建模竞赛三等奖"),
      comp("重庆工程学院一专一赛物联网应用创新设计竞赛三等奖"),
      comp("2025年中国大学生计算机设计大赛(重庆市级赛)三等奖"),
      comp("2025年睿抗机器人开发者大赛(RAICOM)重庆赛区三等奖"),
      comp("2025年中国高校计算机大赛-AIGC创新赛(西南赛区)三等奖"),
      comp("2024年第六届全国高校计算机能力挑战赛(C语言)西南赛区二等奖"),
      comp("第十五届全国大学生电子商务创新创意及创业挑战赛(校级)一等奖"),
      comp("第十六届蓝桥杯C/C++程序设计大学B组重庆赛区二等奖"),
      comp("重庆市第十二届大学生程序设计大赛三等奖"),
      comp("2024年泰迪杯数据分析技能赛二等奖"),
      comp("中国国际大学生创新大赛(2025)院赛三等奖"),
    ]
  },
  {
    name: "唐灶林",
    achievements: [
      soft("山火识别监控系统")
    ]
  },
  {
    name: "田媛",
    achievements: [
      schol("二等奖学金")
    ]
  },
  {
    name: "王琳",
    achievements: [
      comp("蓝桥杯省赛三等奖")
    ]
  },
  {
    name: "夏旭东",
    achievements: [
      cert("中级软件设计师(国家职业资格)"),
      comp("蓝桥杯省赛二等奖"),
      comp("蓝桥杯国赛二等奖"),
      cert("HarmonyOS应用开发者高级认证"),
      cert("HarmonyOS应用开发者基础认证"),
      comp("计挑赛省二")
    ]
  },
  {
    name: "杨东灵",
    achievements: [
      paper("学术科研论文一等奖"),
      soft("SoilSentinel土壤光谱感知巡检系统"),
      soft("农业病虫害识别小程序"),
      comp("中国机器人及人工智能大赛国赛三等奖"),
      comp("中国机器人及人工智能大赛省赛一等奖"),
      comp("中国高校智能机器人创意大赛国赛二等奖"),
      comp("重庆高校智能机器人创意大赛二等奖"),
      comp("挑战杯全国大学生课外科技术作品竞赛(重庆赛区)二等奖"),
      comp("中国国际大学生创新大赛(2025)校赛优秀奖"),
      comp("挑战杯校赛优秀奖"),
      comp("中国国际大学生创新大赛(2025)院赛优秀奖")
    ]
  },
  {
    name: "杨明敏",
    achievements: [
      soft("励学优绩激励平台")
    ]
  },
  {
    name: "杨西南",
    achievements: [
      soft("启航学生助手系统"),
      soft("智慧泊车计费宝系统")
    ]
  },
  {
    name: "张鲜",
    achievements: [
      schol("二等奖学金"),
      comp("一专一赛物联网应用创新设计竞赛三等奖"),
      comp("中国国际大学生创新大赛院赛优秀奖"),
      comp("中国国际大学生创新大赛院赛优秀奖"),
      comp("中国国际大学生创新大赛校赛优秀奖"),
      soft("报表管理系统"),
      soft("进销存管理系统")
    ]
  },
  {
    name: "张智萱",
    achievements: [
      comp("蓝桥杯大赛省赛三等奖")
    ]
  },
  {
    name: "张洲",
    achievements: [
      schol("一等奖学金"),
      schol("二等奖学金"),
      comp("中国高校智能机器人创意大赛二等奖"),
      comp("人工智能大赛全国总决赛三等奖"),
      comp("中国高校智能机器人创意大赛省赛二等奖"),
      other("参与科研项目项次")
    ]
  },
  {
    name: "周丹丹",
    achievements: [
      schol("国家励志奖学金"),
      schol("二等奖学金"),
      schol("二等奖学金"), // Listed twice to match total count
      other("优秀共青团员"),
    ]
  }
];

// Calculation Logic
export const calculateStats = (students: Student[]): ProjectStats => {
  let totalCompetitions = 0;
  let totalSoftCopyrights = 0;
  let totalScholarships = 0;
  let totalPapers = 0;
  const projectSet = new Set<string>();

  students.forEach(student => {
    student.achievements.forEach(ach => {
      if (ach.category === Category.COMPETITION) totalCompetitions++;
      if (ach.category === Category.SOFT_COPYRIGHT) {
        totalSoftCopyrights++;
        projectSet.add(ach.name);
      }
      if (ach.category === Category.SCHOLARSHIP) totalScholarships++;
      if (ach.category === Category.PAPER) totalPapers++;
    });
  });

  return {
    totalCompetitions,
    totalSoftCopyrights,
    totalScholarships,
    totalPapers,
    uniqueProjects: projectSet.size
  };
};

export const getTopStudents = (students: Student[]): { name: string; score: number; details: any }[] => {
  return students.map(student => {
    // Scoring weight: Comp=1, Soft=1, Paper=1.5, Scholarship=1. Just counting for visualization mostly.
    const score = student.achievements.length;
    return {
      name: student.name,
      score,
      details: student.achievements.reduce((acc: any, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + 1;
        return acc;
      }, {})
    };
  })
  .sort((a, b) => b.score - a.score)
  .slice(0, 5);
};