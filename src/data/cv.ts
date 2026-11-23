export const cv = {
  headline: '医学信息学学生，喜欢琢磨数据，也拍照。',
  summary:
    '海德堡大学与海尔布隆应用科学大学医学信息学本科在读。研究助理工作涉及放射肿瘤科 AI 系统集成、心内科随访记录数字化。',
  personal: [
    { label: '出生', value: '2003 年 8 月 · 安徽' },
    { label: '现居', value: '曼海姆' },
    { label: '国籍', value: '中国' },
    { label: '语言', value: '中文（母语）· 德语 C1（TestDaF 17）· 英语 B2/C1' },
    { label: '开放', value: '学生工 · 实习 · 数据 / 医疗 IT 项目' },
  ],
  education: [
    {
      period: '2024.09 — 至今',
      title: '医学信息学 本科（B.Sc.）',
      org: '海德堡大学与海尔布隆应用科学大学，德国',
      detail: '相关课程包括Java、C++、数据库系统、医学文档。',
    },
    {
      period: '2021.09 — 2024.06',
      title: '德语语言文学',
      org: '上海外国语大学，中国',
      detail: '后转入医学信息学专业。',
    },
    {
      period: '2018.09 — 2021.06',
      title: '高中毕业（Abitur 等效 1.1）',
      org: '芜湖市第一中学，安徽，中国',
      detail: '高考 627 / 750；会考全 A。',
    },
  ],
  experience: [
    {
      period: '2026 — 至今',
      title: 'HiWi · 院内 AI 集成设计',
      org: '曼海姆大学医学中心（UMM）· MIISM · 海德堡大学曼海姆医学院',
      detail:
        '研究组 "Applied AI in Radiation Oncology"。设计院内模型调用、患者匹配和结果回传流程，区分临床用户与管理员权限。',
    },
    {
      period: '2026 — 至今',
      title: 'HiWi · 心内科病人数据信息化',
      org: '海德堡大学附属医院（UKHD）心内科',
      detail:
        '为术后记录和长期随访开发 iPad 数据录入与可视化界面，支持心内科临床研究。',
    },
    {
      period: '2025.04 — 2025.07',
      title: '兼职 · 销售与客户咨询',
      org: 'Souvenirshop Eiei 4，海德堡',
      detail: '接待国际与德国顾客，负责收银与货品。',
    },
    {
      period: '2024.12 — 2025.02',
      title: '实习 · 零售运营',
      org: 'Heilbronn Laomi Asia Market，德国',
      detail: '收银、收货、陈列和顾客咨询。',
    },
    {
      period: '2022.07 — 2022.09',
      title: '实习 · 金融市场',
      org: '中国建设银行，上海',
      detail: '接触外汇、期货期权与贵金属市场。',
    },
  ],
  projects: [
    {
      period: '2025.01 — 至今',
      title: '全球健康数据可视化与指数平台',
      role: '独立开发（全栈）',
      detail:
        'Java 17 / Spring Boot 3 / MySQL / Vue 3 / ECharts。193 个国家的健康指数清洗与计算、GeoJSON 世界地图和动态图表；用内存索引避免 N+1，用预计算 JSON 降低服务器负载；GitHub Actions 自动部署，服务端保护未解禁数据。一个 Nature Health 子刊论文的技术基础；线上地址仍在禁发期，演示与代码讲解可索取。',
    },
    {
      period: '2025.08 — 2025.11',
      title: '医院信息系统（OpenMRS）',
      role: '独立项目',
      detail:
        '独立安装配置 OpenMRS；用 MySQL 建立病人数据结构；Java 后端模拟临床工作流；实践 HL7 等医疗标准。',
    },
    {
      period: '2026',
      title: '训练诊断与这个网站',
      role: '设计、数据与实现',
      detail:
        '读 Apple Health 导出做每周训练报告（Python、SVG、静态 HTML/PDF）；本站用 Astro 构建，部署在 GitHub Pages，照片热链自 Unsplash。',
    },
  ],
  skills: [
    {
      group: '编程',
      items: ['Java（熟练）', 'JavaScript / HTML / CSS', 'SQL', 'Python', 'C++（基础）'],
    },
    {
      group: 'Web 与框架',
      items: ['Spring Boot 3.x', 'Spring Data JPA', 'Vue 3', 'Vite', 'ECharts'],
    },
    {
      group: 'DevOps 与运维',
      items: ['GitHub Actions CI/CD', '服务器部署', '预计算数据架构', 'Git / Maven / Linux'],
    },
    {
      group: '医疗 IT',
      items: ['HL7', 'DICOM', 'KIS 结构', '医学文档', '病人数据可视化'],
    },
  ],
  engagement: [
    '海德堡学生兄弟会（Studentenverbindung）成员，2025 年起：参与社团生活、组织活动、推动文化交流。',
  ],
  interests: ['医学数据处理', 'Digital Health', '旅行', '排球', '架子鼓'],
};
