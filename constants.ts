
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
        role: 'Role #1',
        company: 'Company #1',
        period: 'Placeholder',
        description: [
            'a brief overview of the main responsibilities',
        ]
    },
    {
        role: 'Role #2',
        company: 'Company #2',
        period: 'Placeholder',
        description: [
            'a brief overview of the main responsibilities',
        ]
    }
];

export const RESUME_CERTIFICATIONS: CertificationEntry[] = [
    {
        certification: 'Technical Writing Certification',
        institution: 'Oregon State University',
        period: '2025',
    },
    {
        certification: 'Placeholder',
        institution: 'State College',
        period: 'Date here',
    }
];

export const RESUME_SKILLS: string[] = [
    'API Documentation (REST, GraphQL)', 'Docusaurus', 'Git & GitHub', 'Markdown & AsciiDoc',
    'Agile Methodologies', 'User Onboarding', 'Content Strategy', 'Style Guide Development',
    'Jira & Confluence', 'Video Tutorials (Camtasia)',
];


export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
    {
        id: 1,
        title: 'Project title #1',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
        imageUrl: 'https://picsum.photos/seed/project1/600/400',
        link: '#',
        tech: ['OpenAPI', 'REST', 'Docusaurus'],
    },
    {
        id: 2,
        title: 'Project title #2',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
        imageUrl: 'https://picsum.photos/seed/project2/600/400',
        link: '#',
        tech: ['Markdown', 'Interactive Demos', 'UX Writing'],
    },
    {
        id: 3,
        title: 'Project title #3',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
        imageUrl: 'https://picsum.photos/seed/project3/600/400',
        link: '#',
        tech: ['Confluence', 'Content Curation', 'Information Architecture'],
    },
    {
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
    }
];