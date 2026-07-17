// ─────────────────────────────────────────────────────────────────────────
// Edit this file to update your name, contact links, and skills.
// Everything here is placeholder content — swap in your real details.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Angel Rodriguez II',
  role: 'Software Engineer',
  tagline:
    'I build reliable, well-tested software solutions that target real world problems and inspire community.',
  location: 'El Paso, TX',
  email: 'angeldevelops@gmail.com',
  // Path to your resume PDF. Drop the file in `public/` (e.g. public/resume.pdf).
  resume: 'resume.pdf',

  socials: [
    { label: 'GitHub', href: 'https://github.com/JapaneseGrass', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/angel-rodriguez-ii-58043a1b7/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:angeldevelops@gmail.com', icon: 'mail' },
  ],

  // A short, scannable bio for the About section. 2–3 sentences works best.
  about: [
    'I’m a multi-faceted thinker and doer who enjoys the process of observation and understanding to develop human-centric solutions that contribute to someone’s ability to perform their work in a more fulfilling way. I care about solutions that make sense and can genuinely make a meaningful difference in someone’s day-to-day experience.',
    'Outside of work, I’m keeping up with the ever-evolving domains that pique my interest and align with the trajectory of my desired career. At the moment, I’m following advancements in artificial intelligence, ramping up my knowledge of cybersecurity, and inventing software and hardware solutions to problems in my personal life.',
  ],
};

// Grouped skills for the Skills section. Add/remove groups freely.
export const skillGroups: { name: string; items: string[] }[] = [
  {
    name: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'HTML & CSS'],
  },
  {
    name: 'Frameworks & Libraries',
    items: ['React Native', 'Expo', 'FastAPI', 'Astro', 'Node.js'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['AWS', 'CI/CD', 'Infrastructure as Code', 'Supabase', 'Render', 'Git'],
  },
  {
    name: 'Tools & Hardware',
    items: ['SQLite', 'PostgreSQL', 'REST APIs', 'Raspberry Pi', 'AI-assisted development'],
  },
  {
    name: 'Technical Support',
    items: [
      'End-user Support',
      'Hardware Troubleshooting',
      'Software Troubleshooting',
      'PC Diagnostics',
      'System Maintenance',
      'Hardware Installation',
      'Software Installation',
      'LAN Support',
      'Network Troubleshooting',
      'Ticketing Systems',
      'Remote Troubleshooting',
      'System Monitoring',
      'Inventory Management',
    ],
  },
  {
    name: 'IT / Systems',
    items: [
      'AWS Cloud Systems',
      'System Logs & Metrics',
      'Data Integrity',
      'Access / Security Awareness',
      'Process Improvement',
      'Workflow Optimization',
      'Agile Workflows',
    ],
  },
  {
    name: 'Public Service & Communication',
    items: [
      'Customer Service',
      'Public-sector Operations',
      'Cross-functional Collaboration',
      'Clear Technical Communication',
      'Field Operations Support',
      'Effective Working Relationships',
      'Documentation & Reporting',
      'CJIS Clearance',
    ],
  },
  {
    name: 'Soft Skills',
    items: [
      'Team Collaboration',
      'Problem Solving',
      'Innovation',
      'Communication',
      'Deliver Results',
      'Earn Trust',
      'Building Camaraderie',
      'Agile Methodologies',
    ],
  },
];
