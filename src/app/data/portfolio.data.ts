export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Language' | 'Tools';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  demo: string | null;
  image: string;
  shape: 'mail-sync' | 'chart' | 'sync' | 'kanban' | 'network' | 'form' | 'inventory';
  iconLabel: string;
}

export const profile = {
  name: 'Aya Hussein',
  initials: 'AH',
  title: 'Software Developer (Node.js, Angular, React)',
  tagline:
    'Full-Stack Developer with 4+ years of experience building scalable applications, APIs, and integrations across frontend and backend.',
  location: 'Alexandria, Egypt',
  email: 'aya.hussein3107@gmail.com',
  github: 'https://github.com/AyaHusseinAly',
  githubHandle: 'AyaHusseinAly',
  linkedin: 'https://linkedin.com/in/aya-hussein-19a359134',
  whatsapp: 'https://api.whatsapp.com/send/?phone=+201011833038',
  whatsappDisplay: '+20 101 183 3038',
  photoUrl: 'https://ayahussein.onrender.com/profile-photo.jpg',
  summary:
    "I'm a full stack engineer with 3+ years of hands-on experience building and maintaining real-world applications using Node.js and Angular, along with over 4 years of overall experience in software development. In my previous role, I owned the end-to-end development of multiple features, including designing APIs, integrating with external systems, and ensuring reliable performance in production environments.",
  aboutExtra:
    'Based in Alexandria, Egypt, I enjoy turning complex problems into elegant, user-friendly solutions. From CRM integrations at Make IT Simple to enterprise platforms at ServiceNow, I bring a full stack mindset to every project.',
  yearsOfExperience: 4,
  heroBadges: ['Node.js', 'Angular', 'Express.js', 'NestJS','SQL', 'AWS'],
};

export const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Projects Delivered', value: '15+' },
  { label: 'Companies', value: '3' },
];

export const skills: Skill[] = [
  { name: 'Angular', level: 90, category: 'Frontend' },
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'Nest.js', level: 82, category: 'Backend' },
  { name: 'Express.js', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Tools' },
  { name: 'MongoDB', level: 78, category: 'Tools' },
  { name: 'AWS', level: 80, category: 'Tools' },
  { name: 'Git', level: 90, category: 'Tools' },
];

export const experience: Experience[] = [
  {
    company: 'ServiceNow Egypt',
    role: 'Senior Software Engineer',
    period: 'Dec 2025 – Present',
    description:
      'Working on PTO request solution covering real business scenarios for enterprise clients.',
    tech: ['JavaScript', 'ServiceNow', 'REST APIs'],
  },
  {
    company: 'Make IT Simple (MIS)',
    role: 'Full-Stack Developer',
    period: 'Aug 2022 – Nov 2025',
    description:
      'Built scalable backend services with Node.js and AWS Lambda, Angular Outlook add-ins with Microsoft Graph, cloud-native dashboards with AWS CDK, and Bullhorn CRM integrations.',
    tech: ['Node.js', 'Angular', 'AWS Lambda', 'AWS CDK', 'Microsoft Graph API'],
  },
  {
    company: 'Vodafone Egypt',
    role: 'Full-Stack Developer',
    period: 'Sep 2021 – Jul 2022',
    description:
      'Contributed to the OneNetwork automation platform, building backend services with Python and Django and working with SQL Server and Oracle databases.',
    tech: ['Python', 'Django', 'SQL Server', 'Oracle', 'SQLAlchemy'],
  },
];

export const projects: Project[] = [
  {
    title: 'Erecruit Outlook Integration Plugin',
    description:
      'Full-featured Outlook plugin integrated with Bullhorn CRM for recruiters to manage candidate data directly from their inbox.',
    tech: ['Node.js', 'Angular', 'Microsoft Graph API', 'Azure Functions'],
    github: null,
    demo: null,
    image: 'projects/outlook-plugin.svg',
    shape: 'mail-sync',
    iconLabel: 'Email & CRM integration',
  },
  {
    title: 'Pay Bill Monitoring & Analytics Dashboard',
    description:
      'Backend-driven monitoring system to analyze pay/bill data inconsistencies and business indicators within Bullhorn CRM.',
    tech: ['Node.js', 'AWS Lambda', 'AWS CDK', 'PostgreSQL', 'Sequelize'],
    github: null,
    demo: null,
    image: 'projects/analytics-dashboard.svg',
    shape: 'chart',
    iconLabel: 'Analytics dashboard',
  },
  {
    title: 'Salesforce Bullhorn Data Sync',
    description:
      'Middleware integration layer between Salesforce and Bullhorn CRM to synchronize sales and recruitment data.',
    tech: ['Java', 'Spring MVC', 'Salesforce API', 'Bullhorn REST API'],
    github: null,
    demo: null,
    image: 'projects/data-sync.svg',
    shape: 'sync',
    iconLabel: 'Data synchronization',
  },
  {
    title: 'Kanban Candidate Management System',
    description:
      'Configurable Kanban-style visualization on top of Bullhorn CRM with dynamic filtering based on customizable fields.',
    tech: ['Node.js', 'Express', 'Angular', 'MySQL'],
    github: null,
    demo: null,
    image: 'projects/kanban.svg',
    shape: 'kanban',
    iconLabel: 'Kanban board',
  },
  {
    title: 'OneNetwork Automation Platform',
    description:
      'Network automation platform for executing large-scale operations across telecom nodes with parallel command execution.',
    tech: ['Python', 'pandas', 'SQL Server', 'Paramiko', 'Telnet'],
    github: null,
    demo: null,
    image: 'projects/onenetwork.svg',
    shape: 'network',
    iconLabel: 'Network automation',
  },
  {
    title: 'Bullhorn Workflow Customizations',
    description:
      'Various Bullhorn CRM customizations for multiple clients — dynamic forms, calculated fields, and conditional UI behavior.',
    tech: ['JavaScript', 'Bullhorn APIs', 'Angular'],
    github: null,
    demo: null,
    image: 'projects/bullhorn-custom.svg',
    shape: 'form',
    iconLabel: 'Custom workflow forms',
  },
  {
    title: 'Inventory Tracking & Warehouse Management System',
    description:
      'Inventory management application in Retool to track items, warehouses, and notes with capacity enforcement, assignment workflows, search and filtering, and live weather integrations.',
    tech: ['Retool', 'Retool Database', 'SQL', 'JavaScript', 'Open-Meteo API'],
    github: null,
    demo: 'https://ayahusseinhassan3107.retool.com/embedded/public/4e91ccea-bdae-4cf1-b712-c4909acd0cda',
    image: 'projects/inventory.svg',
    shape: 'inventory',
    iconLabel: 'Inventory and warehouse dashboard',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const skillCategories = [
  'Frontend',
  'Backend',
  'Mobile',
  'Language',
  'Tools',
] as const;
