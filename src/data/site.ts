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
    'I’m a software engineer who enjoys turning ambiguous problems into shipped, maintainable software. I care about readable code, sensible tests, and interfaces that feel obvious to use.',
    'Outside of work I’m usually exploring a new tool, contributing to open source, or building small projects to learn something hands-on.',
  ],
};

// Grouped skills for the Skills section. Add/remove groups freely.
export const skillGroups: { name: string; items: string[] }[] = [
  {
    name: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Astro', 'Next.js', 'HTML & CSS', 'Tailwind'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Redis'],
  },
  {
    name: 'Tooling & Cloud',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Vitest / Jest'],
  },
];
