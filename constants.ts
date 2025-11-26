
import { ResumeEntry, CertificationEntry, PortfolioProject } from './types';

export const PERSONAL_INFO = {
    name: 'Ariana Crain',
    title: 'Technical Writer',
    email: 'arianamartens@gmail.com',
    linkedin: 'https://www.linkedin.com/in/arianacrain/',
    github: 'https://github.com/amcrain',
};

export const ABOUT_ME_CONTENT = {
    greeting: "Hello, I'm Ariana Crain",
    introduction: "I'm a technical writer specializing in creating clear, concise, and comprehensive documentation for complex software products. With a passion for bridging the gap between developers and users, I transform technical jargon into user-friendly content that empowers and educates.",
    philosophy: "My approach is rooted in the principles of user-centric design. I believe that good documentation is not just about explaining features, but about anticipating user needs, solving their problems, and enhancing their overall experience. I thrive in collaborative environments, working closely with engineering, product, and support teams to ensure accuracy and consistency.",
};

export const RESUME_EXPERIENCE: ResumeEntry[] = [
    {
        role: 'Frontend Support Engineer',
        company: 'New Relic',
        period: '08/2022 - Ongoing',
        description: [
            'Investigate and reproduce customer issues across mobile and web platforms; create clear, reproducible steps and technical notes for engineering triage.',
            'Write concise runbooks, incident notes, and troubleshooting guides that reduce time-to-resolution and support cross-team handoffs.',
            'Author API documentation and NRQL/GraphQL examples to enable accurate data queries and operational analysis.',
            'Translate debugging outcomes into user-focused documentation and knowledge-base articles for internal and external audiences.',
            'Collaborate with engineering and product to surface recurring issues and improve monitoring configurations and documentation.'
        ]
    },
    {
        role: 'iOS Engineer Intern',
        company: 'Blapp',
        period: '06/2022 - 08/2022',
        description: [
            'Built and documented React / React Native components in TypeScript, producing readable code and clear implementation notes for other engineers.',
            'Created reproducible test cases and performance notes to support troubleshooting and to inform user-facing guidance.',
            'Captured implementation decisions and integration steps for shared components and navigation flows to aid maintenance and onboarding.'
        ]
    },
    {
        role: 'Frontend Engineer Intern',
        company: 'Review With Friends',
        period: '03/2022 - 08/2022',
        description: [
            'Documented UI components and usage patterns in Storybook to make design intent discoverable and reproducible by engineers.',
            'Wrote component-level documentation and tests to improve reliability and reduce onboarding time for new developers.',
            'Developed reusable, type-safe UI components and captured design rationale to support consistent user experiences.'
        ]
    },
    {
        role: 'Founding Member',
        company: 'Tech Ladies',
        period: '01/2022 - 01/2023',
        description: [
            'Led peer code reviews, pair-programming sessions, and mock interviews to improve technical skills and communication within the community.',
            'Prepared workshop materials and documentation to help members practice interview questions and hands-on coding exercises.'
        ]
    }
];

export const RESUME_CERTIFICATIONS: CertificationEntry[] = [
    {
        certification: 'Technical Writing Certification',
        institution: 'Oregon State University',
        period: '2025',
    }, /*
    {
        certification: 'Placeholder',
        institution: 'State College',
        period: 'Date here',
    } */
];

export const RESUME_SKILLS: string[] = [
    // Core technical writing
    'Technical Writing', 'API Documentation (REST, GraphQL)', 'Runbooks & Troubleshooting Guides', 'Knowledge Base Articles', 'Information Architecture', 'Style Guide Development',
    // Tools & platforms surfaced in resume/portfolio
    'Markdown & AsciiDoc', 'Git & GitHub', 'Storybook', 'React Testing Library', 'Docusaurus',
    // Product & UX
    'UX Writing', 'UX Audit & Data Visualization', 'Procedural Writing', 'SOPs',
    // Engineering context
    'React & TypeScript', 'React Native', 'GraphQL & NRQL', 'Terraform (deployments)', 
    // Collaboration & process
    'Agile Methodologies', 'Cross-functional Collaboration', 'User Onboarding',
];


export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
    {
        id: 1,
        title: 'PowerPanel Installation and Maintenance Manual',
        description: 'This project showcases my ability to develop structured, audience-specific technical documentation, as demonstrated by the PowerPanel Installation and Maintenance Manual. It features clear instructional design for complex procedures, adherence to safety communication standards, and integration of regulatory requirements, highlighting skills in information architecture, clarity, and precision.',
    // stored in public/images/ — resolved at runtime against the app base URL
    imageUrl: 'images/Electrical-Panel.jpg',
        imageAlt: 'PowerPanel Installation and Maintenance Manual — cover or screenshot',
        // PDF for embedded viewer — place this file under `public/pdfs/`
        pdfUrl: '/pdfs/PowerPanel-Install-Maintenance-Manual.pdf',
        link: '#',
        tech: ['Instructional Design', 'Product Documentation', 'Information Architecture', 'Standard Operating Procedures', 'Document Design', 'Installation Guide', 'Maintenance Guide'],
    },
    {
        id: 2,
        title: 'PNWX UX Audit Presentation',
        description: 'This presentation, "Elevating User Experience: Applying UX Design Principles to PNWX.com," outlines a comprehensive UX audit of a medical equipment website. It identifies critical usability issues based on Universal Design Principles and provides actionable, data-driven recommendations for improving mobile responsiveness, accessibility, navigation, and overall user satisfaction, demonstrating a clear understanding of practical UX application.',
    imageUrl: 'images/PNW-Medical-Solution.png',
        imageAlt: 'PNW UX Audit Presentation — sample slide or cover image',
        // PDF for embedded viewer — place this file under `public/pdfs/`
        pdfUrl: '/pdfs/PNWX-UX-Audit-Presentation.pdf',
        link: '#',
        tech: ['UX Design Principles', 'Information Architecture', 'UX Audit', 'Data Visualization', 'Usability Testing'],
    },
    {
        id: 3,
        title: 'Painting Bare Wood Procedure',
        description: 'I developed this "How to Paint Bare Wood"guide to simplify a multi-step process for end-users. It features detailed textual instructions combined with a logical flowchart, a checklist summary, and practical tips like knot sealing and primer tinting. This piece highlights my skills in instructional design, breaking down complex tasks, and creating user-friendly documentation.',
    imageUrl: 'images/Painting-Bare-Wood.png',
        imageAlt: 'How to Paint Bare Wood — example illustration or result photo',
    // PDF for embedded viewer — place this file under `public/pdfs/`
    pdfUrl: '/pdfs/Painting-Bare-Wood-Procedure.pdf',
        link: '#',
        tech: ['Instructional Design', 'Procedural Writing', 'Flowchart Design', 'User Guides', 'Process Documentation'],
    },
   /* {
        id: 4,
        title: 'Project title #4',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
        imageUrl: 'https://picsum.photos/seed/project4/600/400',
        link: '#',
        tech: ['Android', 'iOS', 'Camtasia', 'Technical SEO'],
    },
    {
        id: 5,
        title: 'Project title #5',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
        imageUrl: 'https://picsum.photos/seed/project5/600/400',
        link: '#',
        tech: ['Style Guide', 'Content Strategy', 'SME Interviews'],
    },
    {
        id: 6,
        title: 'Project title #6',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
        imageUrl: 'https://picsum.photos/seed/project6/600/400',
        link: '#',
        tech: ['Zendesk', 'Troubleshooting', 'Cross-functional Collaboration'],
    } */
];