export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Language' | 'Tools';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
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
  linkedin: 'https://www.linkedin.com/in/aya-hussein-19a359134',
  linkedinHandle: 'aya-hussein-19a359134',
  whatsapp: 'https://api.whatsapp.com/send/?phone=+201011833038',
  whatsappDisplay: '+20 101 183 3038',
  phone: 'tel:+201011833038',
  website: 'https://ayahussein.onrender.com/',
  websiteDisplay: 'ayahussein.com',
  workExperiencesUrl: 'https://ayahussein.onrender.com/work-experiences.html',
  photoUrl: 'https://ayahussein.onrender.com/profile-photo.jpg',
  summary:
    "I'm a full stack engineer with 3+ years of hands-on experience building and maintaining real-world applications using Node.js and Angular, along with over 4 years of overall experience in software development. In my previous role, I owned the end-to-end development of multiple features, including designing APIs, integrating with external systems, and ensuring reliable performance in production environments.",
  aboutExtra:
    "I'm currently focused on strengthening my skills in system design, scalability, and modern backend/frontend architecture best practices. Based in Alexandria, Egypt, I enjoy turning complex problems into elegant, user-friendly solutions — from CRM integrations at Make IT Simple to enterprise platforms at ServiceNow.",
  contactSubtitle:
    "I'm always interested in new opportunities and exciting projects. Let's work together and bring your ideas to life.",
  yearsOfExperience: 4,
  heroBadges: ['Node.js', 'Angular', 'Express.js', 'NestJS', 'SQL', 'AWS'],
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
    location: 'Cairo, Egypt',
    description:
      'Working on a PTO request solution covering real business scenarios for enterprise clients, building reliable workflows and integrations on the ServiceNow platform.',
    tech: ['JavaScript', 'ServiceNow', 'REST APIs'],
  },
  {
    company: 'Make IT Simple (MIS)',
    role: 'Full-Stack Developer',
    period: 'Aug 2022 – Nov 2025',
    location: 'UK (Remote)',
    description:
      'Built scalable backend services with Node.js and AWS Lambda, Angular Outlook add-ins with Microsoft Graph, cloud-native dashboards with AWS CDK, Bullhorn CRM integrations, and a data synchronization system between Bullhorn and Salesforce.',
    tech: ['Node.js', 'Angular', 'AWS Lambda', 'AWS CDK', 'Microsoft Graph API', 'Salesforce API'],
  },
  {
    company: 'Vodafone Egypt',
    role: 'Full-Stack Developer',
    period: 'Sep 2021 – Jul 2022',
    location: 'Cairo, Egypt',
    description:
      'Contributed to the OneNetwork automation platform for large-scale telecom operations, building backend services with Python and Django and working with SQL Server and Oracle databases.',
    tech: ['Python', 'Django', 'SQL Server', 'Oracle', 'SQLAlchemy'],
  },
];

export const projects: Project[] = [
  {
    title: 'Erecruit Outlook Integration Plugin',
    description:
      'Full-featured Outlook plugin integrated with Bullhorn CRM, enabling recruiters to manage candidate data from their inbox, match emails to CRM records, and sync interactions in real time using Microsoft Graph and Azure Functions.',
    tech: ['Node.js', 'Angular', 'Microsoft Graph API', 'Azure Functions', 'Serverless Framework'],
    github: null,
    demo: null,
    image: 'projects/outlook-plugin.svg',
    shape: 'mail-sync',
    iconLabel: 'Email & CRM integration',
  },
  {
    title: 'Pay Bill Monitoring & Analytics Dashboard',
    description:
      'Backend-driven monitoring system to analyze pay/bill data inconsistencies and business indicators within Bullhorn CRM, with drill-down into affected records via AWS Lambda, API Gateway, and PostgreSQL.',
    tech: ['Node.js', 'AWS Lambda', 'AWS CDK', 'PostgreSQL', 'Sequelize', 'API Gateway'],
    github: null,
    demo: null,
    image: 'projects/analytics-dashboard.svg',
    shape: 'chart',
    iconLabel: 'Analytics dashboard',
  },
  {
    title: 'Salesforce Bullhorn Data Sync',
    description:
      'Middleware integration layer between Salesforce and Bullhorn CRM to synchronize sales and recruitment data, with entity mapping, validation, and scheduled background jobs.',
    tech: ['Java', 'Spring MVC', 'Quartz Scheduler', 'Salesforce API', 'Bullhorn REST API'],
    github: null,
    demo: null,
    image: 'projects/data-sync.svg',
    shape: 'sync',
    iconLabel: 'Data synchronization',
  },
  {
    title: 'Kanban Candidate Management System',
    description:
      'Configurable Kanban-style visualization on top of Bullhorn CRM with dynamic filtering based on customizable fields, backed by Node.js APIs and an Angular frontend.',
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
      'Network automation platform for executing large-scale operations across telecom nodes with parallel command execution, feedback processing, and automated reporting.',
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
      'Various Bullhorn CRM customizations for multiple clients — dynamic forms, calculated fields, conditional UI behavior, and pre/post record creation interactions.',
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
