/**
 * ╔══════════════════════════════════════════════════════╗
 * ║              SITE CONFIGURATION                     ║
 * ║  All content lives here. Never touch the HTML/CSS.  ║
 * ╚══════════════════════════════════════════════════════╝
 */
const SITE_CONFIG = {

  /* ─── Identity ──────────────────────────────────────── */
  identity: {
    name:        'Your Name',
    nameAccent:  '',                   // Optional: second part of name rendered in accent colour
    initials:    'YN',                 // Fallback when logo SVG fails
    tagline:     'I build things. Here\'s the evidence.',
    location:    'City, Country',
    role:        'Your Discipline — Your Institution or Company',
    email:       'you@email.com',
    logo:        'tahlogo.svg',        // Path relative to root
    profileImg:  'assets/profile.jpg',
    aboutImg:    'assets/photo.jpg',
    cvFile:      'assets/cv.pdf',
  },

  /* ─── Navigation ────────────────────────────────────── */
  nav: {
    links: [
      { label: 'About',    href: '#about'    },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills',   href: '#skills'   },
      { label: 'Contact',  href: '#contact'  },
    ],
    // Optional external link shown with a distinct colour (set to null to hide)
    externalLink: {
      label: 'Works',
      href:  'https://your-username.github.io/works',
    },
  },

  /* ─── Hero ──────────────────────────────────────────── */
  hero: {
    eyebrow: 'City, Country',
    cta: [
      { label: 'View My Work', action: 'scroll:#projects', style: 'primary' },
      { label: 'LinkedIn',     href:   'https://linkedin.com/in/yourname',     style: 'outline', icon: 'linkedin' },
      { label: 'Download CV',  href:   'assets/cv.pdf',   style: 'outline', icon: 'download', download: true },
    ],
  },

  /* ─── About ─────────────────────────────────────────── */
  about: {
    paragraphs: [
      'Short intro sentence — your field, year, institution.',
      'What you build: languages, tools, domains. Keep it concrete.',
      'What makes you different: self-driven, independent work, interesting problems.',
      'One-line closing statement that ties it all together.',
    ],
    stats: [
      { number: '6+',  label: 'Projects'        },
      { number: '4+',  label: 'Languages/Tools'  },
      { number: 'B2',  label: 'English Level'    },
    ],
  },

  /* ─── Projects ──────────────────────────────────────── */
  projects: [
    {
      icon:   '⚙️',
      badge:  'Python',
      title:  'Project One',
      desc:   'One-sentence hook — what it does and why it matters.',
      detail: 'Expanded description. What you built, how it works, what you learned. Be specific — tools, algorithms, design decisions.',
      github: null,                // or 'https://github.com/you/repo'
    },
    {
      icon:   '🔧',
      badge:  'C++',
      title:  'Project Two',
      desc:   'One-sentence hook — what it does and why it matters.',
      detail: 'Expanded description. What you built, how it works, what you learned. Be specific — tools, algorithms, design decisions.',
      github: null,
    },
    {
      icon:   '🤖',
      badge:  'Hardware',
      title:  'Project Three',
      desc:   'One-sentence hook — what it does and why it matters.',
      detail: 'Expanded description. What you built, how it works, what you learned. Be specific — tools, algorithms, design decisions.',
      github: null,
    },
    {
      icon:   '📊',
      badge:  'C#',
      title:  'Project Four',
      desc:   'One-sentence hook — what it does and why it matters.',
      detail: 'Expanded description. What you built, how it works, what you learned. Be specific — tools, algorithms, design decisions.',
      github: null,
    },
    {
      icon:   '⚡',
      badge:  'Engineering',
      title:  'Project Five',
      desc:   'One-sentence hook — what it does and why it matters.',
      detail: 'Expanded description. What you built, how it works, what you learned. Be specific — tools, algorithms, design decisions.',
      github: null,
    },
    {
      icon:   '🎯',
      badge:  'Java',
      title:  'Project Six',
      desc:   'One-sentence hook — what it does and why it matters.',
      detail: 'Expanded description. What you built, how it works, what you learned. Be specific — tools, algorithms, design decisions.',
      github: null,
    },
  ],

  /* Optional "see all" card below the project grid (set to null to hide) */
  worksCard: {
    title:    'See the full portfolio →',
    subtitle: 'Design work, CAD models, extra projects — all in one place.',
    href:     'https://your-username.github.io/works',
  },

  /* ─── Skills ────────────────────────────────────────── */
  skills: [
    {
      icon:  '💻',
      label: 'Programming',
      tags:  ['C / C++', 'Python', 'C#', 'Java', 'SQL'],
    },
    {
      icon:  '⚙️',
      label: 'Engineering Tools',
      tags:  ['AutoCAD', 'MATLAB', 'Arduino', 'LTspice'],
    },
    {
      icon:  '🛠️',
      label: 'Other',
      tags:  ['Adobe Illustrator', 'Git', 'Linux'],
    },
  ],

  /* ─── Experience (Timeline) ─────────────────────────── */
  experience: [
    {
      role:    'Job Title',
      company: 'Company Name',
      date:    'Month YYYY – Month YYYY',
      bullets: [
        'Responsibility or achievement — be specific, use numbers.',
        'Second responsibility or achievement.',
        'Third bullet if needed.',
      ],
    },
  ],

  /* ─── Education ─────────────────────────────────────── */
  education: [
    {
      icon:   '🎓',
      date:   '2022 – Present',
      title:  'BSc Your Degree',
      school: 'Your University',
      spec:   'Faculty / Department',
      bullets: [
        'Core coursework and what it taught you practically.',
        'Hands-on lab work or projects.',
        'Academic foundation highlight.',
      ],
    },
    {
      icon:   '🏫',
      date:   '2018 – 2022',
      title:  'High School Diploma',
      school: 'Your High School',
      spec:   'Specialisation',
      bullets: [
        'Relevant track or focus area.',
        'Skill built here that carried forward.',
      ],
    },
  ],

  /* ─── Social / Contact links ────────────────────────── */
  social: {
    linkedin: 'https://linkedin.com/in/yourname',
    github:   'https://github.com/your-username',
    email:    'you@email.com',
  },

  /* ─── Contact section ───────────────────────────────── */
  contact: {
    blurb: 'If you\'re looking for an engineer who builds independently and delivers — the work is on this page. Use the form to reach out directly.',
    // Formspree endpoint (https://formspree.io — free tier, no backend needed)
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  },

  /* ─── Footer ────────────────────────────────────────── */
  footer: {
    year:  new Date().getFullYear(),
    motto: 'Built with care',
  },

  /* ─── Section visibility (set false to hide) ────────── */
  sections: {
    hero:       true,
    about:      true,
    experience: true,
    education:  true,
    projects:   true,
    skills:     true,
    contact:    true,
  },

};
