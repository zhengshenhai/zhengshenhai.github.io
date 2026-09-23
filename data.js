/* ============================================================
   郑申海个人主页 · 内容配置文件（data.js）
   ------------------------------------------------------------
   ★ 日常维护只需要修改这一个文件，改完提交到 GitHub 即可生效。

   维护规则（重要）：
   1.【最新动态】NEWS 数组：新的条目插到最上面（第一行）。
   2.【学术成果】PUBLICATIONS 数组：新论文插到最上面（第一行），
      网站会自动按年份分组、自动编号、最新成果永远排在最前。
   3. 想让某篇论文进入首页“精选成果”，给它加 selected: true。
   4. 学生毕业了：把该学生从 STUDENTS.current 剪切到 STUDENTS.alumni，
      并填写 destination（毕业去向）。
   5. type 只有两种取值："journal"（期刊）/"conference"（会议）。
   ============================================================ */

var SITE = {
  name: "郑申海",
  nameEn: "Shenhai Zheng",
  title: "重庆邮电大学 计算机科学与技术学院 · 教师",
  // 头像路径：把照片放到仓库 images/ 目录下即可；文件不存在时自动显示占位头像
  avatar: "images/pic.jpg",
  bio: [
    "博士毕业于重庆大学计算机学院，现任教于重庆邮电大学计算机科学与技术学院。",
    "主要研究方向为智能计算、模式识别、图像处理与机器视觉，重点关注医学图像分割、联邦学习与多模态学习。成果发表于 IEEE TMI、Pattern Recognition、Physics in Medicine & Biology 等期刊与 BMVC、ICIP 等国际会议。",
  ],
  links: {
    scholar: "https://scholar.google.com/citations?user=W7eIArQAAAAJ&hl=zh-CN",
    dblp: "https://dblp.org/pid/150/2228.html",
    github: "https://github.com/zhengshenhai",
    email: "zhengsh@cqupt.edu.cn",
  },
  // 页面底部的“最近更新”日期，每次维护顺手改一下
  updated: "2026-09",
};

/* ------------------------------------------------------------
   最新动态：★ 新条目加在最上面
   date 格式：YYYY-MM；link 可省略
------------------------------------------------------------ */
const NEWS = [
  { date: "2025-01", text: "一篇轻量化腹部多器官分割论文被 Pattern Recognition 接收。", link: { label: "论文主页", url: "https://authors.elsevier.com/sd/article/S0031-3203(25)00028-7" } },
  { date: "2024-12", text: "一篇多模态医学图像分割论文被 IEEE Transactions on Medical Imaging 接收。", link: { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/document/10845056" } },
  { date: "2024-12", text: "两篇联邦学习论文被 ICASSP 2025 接收并做口头报告。", link: { label: "会议官网", url: "https://2025.ieeeicassp.org/" } },
  { date: "2023-05", text: "指导硕士生谭佳欣的学位论文获评校级优秀硕士学位论文（前 5%）。" },
  { date: "2023-10", text: "一篇个性化联邦学习论文被 IEEE ICPADS 2023 接收为 Research Paper（录取率 15.38%）。", link: { label: "会议官网", url: "https://ieee-cybermatics.org/2023/icpads/" } },
  { date: "2023-10", text: "一篇医学图像分割论文被 Physics in Medicine & Biology 接收。", link: { label: "DOI", url: "https://doi.org/10.1088/1361-6560/ad04a8" } },
  { date: "2023-02", text: "一篇医学图像分割论文被 Biomedical Signal Processing and Control 接收。", link: { label: "论文主页", url: "https://www.sciencedirect.com/science/article/abs/pii/S1746809423001246" } },
  { date: "2022-10", text: "一篇医学图像分割论文被 Physics in Medicine & Biology 接收。", link: { label: "DOI", url: "https://doi.org/10.1088/1361-6560/aca74c" } },
];

/* ------------------------------------------------------------
   研究方向
------------------------------------------------------------ */
const RESEARCH = [
  {
    icon: "scan",
    title: "医学图像分割",
    en: "Medical Image Segmentation",
    desc: "面向 CT / PET 等三维医学影像的器官与肿瘤自动分割，研究多尺度对抗学习、形状先验与轻量化网络设计。",
    tags: ["多模态融合", "3D 分割", "轻量化网络"],
    paper: "Asymmetric Adaptive Heterogeneous Network for Multi-Modality Medical Image Segmentation (IEEE TMI 2025)",
    link: "https://github.com/joker-527/AAHN",
  },
  {
    icon: "network",
    title: "联邦学习",
    en: "Federated Learning",
    desc: "研究面向医学图像分析的高效通信联邦学习框架，包括联邦自蒸馏与个性化联邦优化方法。",
    tags: ["通信高效", "自蒸馏", "个性化联邦"],
    paper: "Efficient Communication Federated Self-Distillation Method for Medical Image Segmentation (ICASSP 2025)",
  },
  {
    icon: "layers",
    title: "多模态学习",
    en: "Multimodal Learning",
    desc: "研究 PET-CT 等跨模态信息的表征对齐与互补融合，设计面向多模态 3D 医学影像的 Transformer 结构。",
    tags: ["跨模态对齐", "Transformer", "表征学习"],
    paper: "msFormer: Adaptive Multi-Modality 3D Transformer for Medical Image Segmentation (PRCV 2022)",
  },
];

/* ------------------------------------------------------------
   学术成果：★ 新论文插到最上面即可，自动分组、自动编号
   字段说明：
     year       年份（用于自动分组）
     type       "journal"（期刊）或 "conference"（会议）
     venue      期刊 / 会议名称
     authors    作者列表（英文逗号分隔），自己的名字会自动加粗高亮
     me         需要高亮的作者名（与 authors 中写法保持一致）
     title      论文标题
     links      可选，按钮数组 [{label:"代码", url:"..."}]
     selected   可选，true 时同时出现在首页“精选成果”
------------------------------------------------------------ */
const PUBLICATIONS = [
  {
    year: 2025, type: "journal", venue: "IEEE Transactions on Medical Imaging",
    authors: "Shenhai Zheng, Xin Ye, Chaohui Yang, Lei Yu, Weisheng Li, Xinbo Gao, Yue Zhao",
    me: "Shenhai Zheng",
    title: "Asymmetric Adaptive Heterogeneous Network for Multi-Modality Medical Image Segmentation",
    links: [{ label: "代码", url: "https://github.com/joker-527/AAHN" }],
    selected: true,
  },
  {
    year: 2025, type: "journal", venue: "Pattern Recognition",
    authors: "Shenhai Zheng, Jianfei Li, Haiguo Zhao, Weisheng Li, Yufei Chen, Lei Yu",
    me: "Shenhai Zheng",
    title: "Weak-prior Dual Cognitive Attention Lightweight Network for Abdominal Multi-organ Segmentation",
    links: [{ label: "论文主页", url: "https://authors.elsevier.com/sd/article/S0031-3203(25)00028-7" }],
    selected: true,
  },
  {
    year: 2024, type: "journal", venue: "IEEE Transactions on Medical Imaging, 43(7): 2495-2508",
    authors: "Lifang Zhou, Yu Jiang, Weisheng Li, Jun Hu, Shenhai Zheng",
    me: "Shenhai Zheng",
    title: "Shape-Scale Co-Awareness Network for 3D Brain Tumor Segmentation",
  },
  {
    year: 2024, type: "journal", venue: "Physics in Medicine & Biology, 69: 085009",
    authors: "Shenhai Zheng, Qiuyu Sun, Xin Ye, Weisheng Li, Lei Yu, Chaohui Yang",
    me: "Shenhai Zheng",
    title: "Multi-scale Adversarial Learning with Difficult Region Supervision Learning Models for Primary Tumor Segmentation",
    links: [{ label: "代码", url: "https://github.com/sunqiuyu/Multi_Scale_GAN" }],
  },
  {
    year: 2023, type: "journal", venue: "Physics in Medicine & Biology, 68: 025014",
    authors: "Shenhai Zheng, Jiaxin Tan, Chuangbo Jiang, Laquan Li",
    me: "Shenhai Zheng",
    title: "Automated Multi-modal Transformer Network (AMTNet) for 3D Medical Images Segmentation",
  },
  {
    year: 2023, type: "journal", venue: "Biomedical Signal Processing and Control, 84: 104691",
    authors: "Laquan Li, Haiguo Zhao, Hong Wang, Weisheng Li, Shenhai Zheng",
    me: "Shenhai Zheng",
    title: "Automatic Abdominal Segmentation Using Novel 3D Self-Adjustable Organ Aware Deep Network in CT Images",
    links: [{ label: "代码", url: "https://github.com/zhgyyds/SOANet/tree/master" }],
  },
  {
    year: 2022, type: "conference", venue: "BMVC 2022 · London, UK",
    authors: "Shenhai Zheng, Qiuyu Sun, Xin Ye, Weisheng Li, Laquan Li",
    me: "Shenhai Zheng",
    title: "Multi-Scale Adversarial Learning and Difficult Supervision for Kidney and Kidney Tumor Segmentation",
  },
  {
    year: 2022, type: "conference", venue: "PRCV 2022 · Shenzhen, China",
    authors: "Jiaxin Tan, Chuangbo Jiang, Laquan Li, Haoyuan Li, Weisheng Li, Shenhai Zheng",
    me: "Shenhai Zheng",
    title: "msFormer: Adaptive Multi-Modality 3D Transformer for Medical Image Segmentation",
  },
  {
    year: 2022, type: "conference", venue: "IEEE SMC 2022 · Prague, Czech Republic",
    authors: "Shenhai Zheng, Jiaxin Tan, Chuangbo Jiang, Weisheng Li, Laquan Li",
    me: "Shenhai Zheng",
    title: "L2-Norm Scaled Transformer for 3D Head and Neck Primary Tumors Segmentation in PET-CT",
  },
  {
    year: 2022, type: "conference", venue: "IEEE ICIP 2022",
    authors: "Chuangbo Jiang, Shenhai Zheng, Laquan Li",
    me: "Shenhai Zheng",
    title: "PET/CT Co-Segmentation Based on Hybrid Active Contour Model",
  },
  {
    year: 2022, type: "conference", venue: "ICNC-FSKD 2022 · Fuzhou, China",
    authors: "Ruihao Wang, Jiaxin Tan, Laquan Li, Shenhai Zheng",
    me: "Shenhai Zheng",
    title: "Abdominal Multi-Organ Localization with Adaptive Random Forest in CT Images",
  },
  {
    year: 2022, type: "conference", venue: "ICGIP 2022 · Nanjing, China",
    authors: "Shenhai Zheng, Xin Ye, Jiaxin Tan, Yifei Yang, Laquan Li",
    me: "Shenhai Zheng",
    title: "Dual-Attention Deep Fusion Network for Multi-modal Medical Image Segmentation",
  },
  {
    year: 2022, type: "conference", venue: "ICGIP 2022 · Nanjing, China",
    authors: "Shenhai Zheng, Haiguo Zhao, Hong Wang, Laquan Li",
    me: "Shenhai Zheng",
    title: "A 3D Self-Adjustable Organ Aware Deep Network for Abdominal Segmentation in CT Images",
  },
  {
    year: 2021, type: "journal", venue: "Neurocomputing, 457: 389-399",
    authors: "Lifang Zhou, Xueyuan Deng, Weisheng Li, Shenhai Zheng, Bangjun Lei",
    me: "Shenhai Zheng",
    title: "A Contour-aware Feature-merged Network for Liver Segmentation Based on Shape Prior Knowledge",
  },
];

/* ------------------------------------------------------------
   团队成员
   photo 可省略（省略时显示姓名首字占位头像）
   毕业了就整条剪切到 alumni，并补上 destination
------------------------------------------------------------ */
var STUDENTS = {
  current: [
    { name: "李建飞", en: "Jianfei Li", degree: "硕士", period: "2022 级", direction: "医学图像诊断", photo: "images/jianfei.jpg" },
    { name: "徐海涵", en: "Haihan Xu", degree: "硕士", period: "2022 级", direction: "计算机视觉 · 区块链", photo: "images/haihan.jpg" },
    { name: "陈清", en: "Qing Chen", degree: "硕士", period: "2022 级", direction: "计算机视觉 · 区块链", photo: "images/qing.jpg" },
    { name: "温思安", en: "Sian Wen", degree: "硕士", period: "2023 级", direction: "联邦学习 · 区块链" },
    { name: "李从宇", en: "Congyu Li", degree: "硕士", period: "2023 级", direction: "联邦学习 · 区块链" },
    { name: "黄越川", en: "Yuechuan Huang", degree: "硕士", period: "2023 级", direction: "区块链技术" },
    { name: "刘小暄", en: "Xiaoxuan Liu", degree: "硕士", period: "2023 级", direction: "图像处理" },
    { name: "高茜", en: "Xi Gao", degree: "硕士", period: "2023 级", direction: "多模态学习 · 图像分割" },
    { name: "杨华宇", en: "Huayu Yang", degree: "硕士", period: "2023 级", direction: "医学图像分割" },
    { name: "周卫夫", en: "Weifu Zhou", degree: "硕士", period: "2023 级", direction: "多模态学习 · 医学图像分割" },
    { name: "谭栋涛", en: "Dongtao Tan", degree: "硕士", period: "2023 级", direction: "多模态学习 · 医学图像分割" },
    { name: "廖玉林", en: "Yulin Liao", degree: "硕士", period: "2023 级", direction: "计算机网络与信息安全" },
    { name: "刘彻", en: "Che Liu", degree: "硕士", period: "2024 级", direction: "多模态学习 · 医学图像分割" },
    { name: "蒙文武", en: "Wenwu Meng", degree: "硕士", period: "2024 级", direction: "多模态大模型 · 医学图像分割" },
    { name: "李劲霖", en: "Jinlin Li", degree: "硕士", period: "2024 级", direction: "多模态学习 · 医学图像分割" },
    { name: "唐雪", en: "Xue Tang", degree: "硕士", period: "2024 级", direction: "多模态学习 · 图像分割" },
    { name: "吴隆伟", en: "Longwei Wu", degree: "硕士", period: "2024 级", direction: "多模态学习 · 医学图像分割" },
  ],
  alumni: [
    { name: "谭佳欣", en: "Jiaxin Tan", degree: "硕士", period: "2020–2023", direction: "医学图像分析", destination: "长安汽车" },
    { name: "刘鹏威", en: "Pengwei Liu", degree: "硕士", period: "2020–2023", direction: "视频实例分割", destination: "华为" },
    { name: "王瑞浩", en: "Ruihao Wang", degree: "硕士", period: "2020–2023", direction: "医学图像分析", destination: "中国农业银行" },
    { name: "孙秋玉", en: "Qiuyu Sun", degree: "硕士", period: "2021–2024", direction: "医学图像分析", destination: "中国电信" },
    { name: "叶鑫", en: "Xin Ye", degree: "硕士", period: "2021–2024", direction: "医学图像分析", destination: "中移信息技术有限公司" },
    { name: "赵海国", en: "Haiguo Zhao", degree: "硕士", period: "2021–2024", direction: "医学图像分割", destination: "安克创新科技股份有限公司" },
  ],
};
