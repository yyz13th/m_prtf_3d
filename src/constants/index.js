import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    githubw,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: githubw,
        theme: 'btn-back-yellow',
        name: 'A Shirt Customization website',
        description: 'A Shirt Customization website',
        link: 'https://github.com/yyz13th/shrt_clr',
        deploy: 'https://custom-shirt-custom.netlify.app/'
    },
    {
        iconUrl: githubw,
        theme: 'btn-back-red',
        name: 'A Camp Area Traveling Website',
        description: 'A Camp Area Traveling Website',
        link: 'https://github.com/yyz13th/trvl_ui-ux',
        deploy: 'https://trvl-ui-ux.netlify.app/'
    },
    {
        iconUrl: githubw,
        theme: 'btn-back-pink',
        name: 'GTP-3 Ad Landing Site',
        description: 'GTP-3 Ad Landing Site',
        link: 'https://github.com/yyz13th/gpt_lnding_rct',
        deploy: 'https://github.com/yyz13th/gpt_lnding_rct'
    },
    {
        iconUrl: githubw,
        theme: 'btn-back-red',
        name: 'E-commerce Clothing Shop',
        description: 'Dynamic e-commerce shop built with React for an online clothing store. Users can add items to their cart, checkout and view their order list.',
        link: 'https://github.com/yyz13th/e-comm-clth-shop',
        deploy: 'https://e-comm-shopping.netlify.app'
    },
    {
        iconUrl: githubw,
        theme: 'btn-back-green',
        name: 'Bring-It-Up',
        description: 'Single page training coaching page in JS/HTML which looks like multi-page site.',
        link: 'https://github.com/yyz13th/bring-it-up_multi',
        deploy: 'https://bringit-multi.netlify.app'
    },
    {
        iconUrl: githubw,
        theme: 'btn-back-blue',
        name: 'Discover Places in Japan',
        description: 'Small landing project in html/css with basic js.',
        link: 'https://github.com/yyz13th/discover_japan_places',
        deploy: 'https://japplaces-discover.netlify.app'
    },
    {
        iconUrl: githubw,
        theme: 'btn-back-pink',
        name: 'Order-a-painting',
        description: 'Web-site for painting ordering in HMTL/JS and coverted to TS',
        link: 'https://github.com/yyz13th/paint_order_',
        deploy: 'https://github.com/yyz13th/paint_order_'
    },
    {
        iconUrl: githubw,
        theme: 'btn-back-black',
        name: 'Irvis Windows',
        description: 'An HTML/JS learning project in building windows shop site using pop-ups, scheduled events, animations, multi-level pop-ups and more.',
        link: 'https://github.com/yyz13th/wind_shop',
        deploy: 'https://winsite-test-test.netlify.app'
    },
    {
        iconUrl: githubw,
        theme: 'btn-back-yellow',
        name: 'Raycast engine',
        description: 'Starter project for Raycast engine in JS',
        link: 'https://github.com/yyz13th/raycst_js',
        deploy: 'https://raycast-js-test.netlify.app'
    }
];