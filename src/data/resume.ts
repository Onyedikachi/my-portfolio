export const profile = {
  name: 'Onyedikachi Nwosu',
  role: 'Senior Software Engineer',
  location: 'Mushin, Lagos, Nigeria',
  email: 'onyedikachinwosu@rocketmail.com',
  phone: '+234 813 920 3980',
  whatsapp: 'https://wa.me/2348139203980',
  linkedin: 'http://linkedin.com/in/devkachi',
  github: 'http://github.com/Onyedikachi',
  summary:
    'Senior Software Engineer with 8+ years of experience, specializing in Full Stack Development and DevOps, with deep expertise in C#, Node.js, React, and TypeScript. Proficient in frontend development, modernization, and delivering scalable solutions through strategic refactoring, rigorous testing, and robust DevOps practices.',
  highlights: [
    { value: '8+', label: 'Years of experience' },
    { value: '8', label: 'Engineers led at KPMG' },
    { value: '90%', label: 'Manual effort cut via automation' },
    { value: '13+', label: 'Cloud & DevOps certifications' },
  ],
}

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['Next.js', 'React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Micro Frontends', 'PWA'],
  },
  {
    title: 'Backend',
    skills: ['C#', '.NET Core', 'Node.js', 'NestJS', 'API Services', 'SQL', 'MongoDB', 'Microservices'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Microsoft Azure', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Azure DevOps'],
  },
  {
    title: 'Practice & Leadership',
    skills: [
      'Software Architecture',
      'Design Patterns',
      'Agile / Scrum / Kanban',
      'TDD',
      'Team Management',
      'Mentorship & Recruiting',
    ],
  },
]

export const experience = [
  {
    company: 'KPMG',
    role: 'Senior Software Engineer',
    period: 'May 2023 — Present',
    summary:
      'Directs a team of 8 engineers designing and delivering scalable software solutions aligned with modern engineering practice.',
    bullets: [
      'Architected and designed software systems using Node.js, React.js, and C#, incorporating design patterns to enhance reliability, scalability, and long-term maintainability.',
      'Managed the end-to-end cloud migration of client solutions to Microsoft Azure, ensuring seamless deployment and robust CI/CD integration in a DevOps environment.',
      'Established comprehensive engineering practices across the SDLC, including coding standards, code reviews, testing strategies, and live-site operations to improve product quality.',
      'Collaborated closely with product, program management, and cross-functional teams to plan and deliver product implementations while communicating technical concepts to non-technical stakeholders.',
      'Conducted detailed code reviews aimed at enhancing product durability and reducing technical debt, proactively leaving the codebase in a better state.',
      'Documented processes and streamlined communication between technical teams and senior leadership.',
    ],
  },
  {
    company: 'SignTech Paperless Solutions',
    role: 'Software Engineer',
    period: 'Apr 2019 — May 2023',
    summary: 'Engineered digital transformation projects focused on user experience and backend performance.',
    bullets: [
      'Applied modern frameworks like Next.js and React.js, using Git and JIRA to manage project workflows.',
      'Provided technical oversight and support to team members through code reviews and architectural discussions.',
      'Developed two automated paperless transformation solutions that reduced manual intervention by 90%.',
      'Integrated the Stripe Payment Gateway into a digital transformation project, leveraging AWS services for secure transactions.',
      'Managed the development and maintenance of cloud-based software solutions aligned with complex technical requirements.',
      'Strengthened cross-functional collaboration, resulting in a 20% increase in customer retention after redesigning the SignTech Paperless Apps.',
      'Enhanced UI design by incorporating modern styling practices such as Tailwind CSS.',
    ],
  },
  {
    company: 'Smiles Innovations',
    role: 'Web Developer',
    period: 'Sep 2017 — Mar 2019',
    summary: 'Built seamless software solutions focused on high performance and user satisfaction.',
    bullets: [
      'Developed a web application to verify the accuracy and reliability of client addresses, integrating CodeIgniter for the backend and AngularJS for the frontend.',
      'Collaborated with the Product Manager to identify, prioritize, and implement new features aligned with project goals.',
      'Conducted code reviews to enhance quality and minimize technical debt.',
    ],
  },
]

export const education = [
  {
    school: 'University of Lagos',
    credential: 'M.Sc. Biomedical Engineering',
    period: 'Feb 2018 — Mar 2019',
    detail: 'GPA 4.62/5.00 — Distinction',
  },
  {
    school: 'University of Ibadan',
    credential: 'B.Sc. Electrical & Electronics Engineering',
    period: 'Jan 2010 — Mar 2015',
    detail: 'Second Class Upper',
  },
]

export const certifications = [
  { name: 'Azure Solutions Architect Expert (AZ-305)', issuer: 'Microsoft Azure', date: 'Jul 2025' },
  { name: 'Azure Administrator Associate (AZ-104)', issuer: 'Microsoft Azure', date: 'Jul 2025' },
  { name: 'Professional Cloud Architect', issuer: 'Google Cloud', date: 'Sep 2024' },
  { name: 'Azure DevOps Engineer Expert (AZ-400)', issuer: 'Microsoft Azure', date: 'Jun 2024' },
  { name: 'Azure Developer Associate (AZ-204)', issuer: 'Microsoft Azure', date: 'Feb 2024' },
  { name: 'ALX-T Full Stack Developer', issuer: 'Udacity', date: 'Sep 2022' },
  { name: 'Cloud Practitioner', issuer: 'AWS', date: 'Nov 2021' },
  { name: 'HTML, CSS, JavaScript', issuer: 'Microsoft', date: 'Feb 2017' },
]

export const projects = [
  {
    title: 'Meditex Diagnostic Laboratory',
    description:
      'Corporate website for a medical diagnostics center covering services, accreditations, and patient-facing information.',
    image: 'meditex.png',
    platform: 'web' as const,
    tags: ['React', 'Frontend', 'Healthcare'],
    demo: 'https://meditex.com.ng',
  },
  {
    title: 'SignTech Admin Portal',
    description: 'Internal operations portal used to manage accounts, permissions, and business workflows for SignTech.',
    image: 'admin-portal.png',
    platform: 'web' as const,
    tags: ['React', 'Admin Tooling'],
    demo: 'http://admin.amazondigitaloffice.com',
  },
  {
    title: 'Amazon Digital Office',
    description:
      'Paperless office platform enabling document workflows across web and mobile, cutting manual processing by 90%.',
    image: 'paperlessoffice.png',
    platform: 'web' as const,
    tags: ['Node.js', 'AWS', 'Paperless Workflow'],
    demo: 'https://amazondigitaloffice.com',
  },
  {
    title: 'SpeedySign Mobile App',
    description: 'iOS companion app for on-the-go document signing, part of the SignTech Paperless suite.',
    image: 'speedysignapp.png',
    platform: 'mobile' as const,
    tags: ['iOS', 'Mobile'],
    demo: 'https://apps.apple.com/ng/app/signtech-speedysign/id1012982844?platform=iphone',
  },
  {
    title: 'SignTech Paperless Mobile App',
    description: 'Mobile client for the SignTech Paperless platform, redesigned to lift customer retention by 20%.',
    image: 'paperlessapp.png',
    platform: 'mobile' as const,
    tags: ['iOS', 'Mobile'],
    demo: 'https://apps.apple.com/ng/app/signtech-paperless/id1184332679?platform=iphone',
  },
]
