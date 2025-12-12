export enum Category {
  COMPETITION = '专业竞赛',
  SOFT_COPYRIGHT = '软著/专利',
  SCHOLARSHIP = '奖学金',
  CERTIFICATE = '职业证书',
  PAPER = '科研论文',
  OTHER = '其他荣誉'
}

export interface Achievement {
  name: string;
  category: Category;
  level?: string; // e.g., National, Provincial, School
}

export interface Student {
  name: string;
  achievements: Achievement[];
}

export interface ProjectStats {
  totalCompetitions: number;
  totalSoftCopyrights: number;
  totalScholarships: number;
  totalPapers: number;
  uniqueProjects: number;
}