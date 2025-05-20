import { capaybilities1, capaybilities2, capaybilities3, capaybilities4, client01, client02, client03, client04, client05, client06, client07, client08, client09, insights1, insights2, insights3, latest1, latest2, nestle, officevibe, phase1, phase2, phase3, phase4, phase5, planetly, project1, project2, project3, project4, project5, project6, project7, project8, project9, publication1, publication2, publication3 } from "@/public";

// Navbar
export const navbarItems = [
   {
      id: 1,
      title: "Services",
      href: "/services",
   },
   {
      id: 2,
      title: "Our work",
      href: "/",
   },
   {
      id: 3,
      title: "About us",
      href: "/bizkit-team",
   },
   // {
   //    id: 4,
   //    title: "Insights",
   //    href: "/insights",
   // },
   {
      id: 5,
      title: "Contact us",
      href: "/contact",
   },
];

// Footer

export const footerItems = [
   {
      id: 1,
      title: "Instagram",
      href: "https://www.instagram.com/",
   },
   {
      id: 2,
      title: "Behance",
      href: "https://www.behance.com/",
   },
   {
      id: 3,
      title: "Facebook",
      href: "https://www.facebook.com/",
   },
   {
      id: 4,
      title: "Linkedin",
      href: "https://www.linkedin.com/company/studio-bizkit/",
   },
];

export const footernavbarItems = [
   {
      id: 1,
      title: "Home",
      href: "/",
   },
   {
      id: 2,
      title: "Services",
      href: "services",
   },
   {
      id: 3,
      title: "Our work",
      href: "",
   },
   {
      id: 4,
      title: "About us",
      href: "bizkit-team",
   },
   {
      id: 6,
      title: "Contact us",
      href: "contact",
   },
];

export const clientsItem = [
   {
     id: 1,
     website: "Kursheeth B",
     href: "#",
     title: "Services:",
     name: "Kursheeth B",
     src: client01,
     review: "Loved the entire process and the final outcome. The brand kit and website turned out exactly how I envisioned it. Clear communication, timely delivery, and attention to detail. Highly recommended!",
     links: [
       {
         id: 1,
         title: "brand kit",
         href: "/services",
       },
       {
         id: 2,
         title: "website",
         href: "/services",
       },
     ]
   },
   {
     id: 2,
     website: "Tej, Ozone",
     href: "#",
     title: "Services:",
     name: "Team Ozone",
     src: client02,
     review: "We needed something that made our packaging pop—and they nailed it. Fresh, modern, and aligned with our brand vibe. Would definitely work with them again!",
     links: [
       {
         id: 1,
         title: "packaging design",
         href: "/services",
       },
     ]
   },
   {
     id: 3,
     website: "Cure 32",
     href: "#",
     title: "Services:",
     name: "Cure 32 Team",
     src: client03,
     review: "Print-ready assets delivered perfectly. The materials looked professional, polished, and completely on brand. Fast turnaround too!",
     links: [
       {
         id: 1,
         title: "print design",
         href: "/services",
       },
     ]
   },
   {
     id: 4,
     website: "Shumsudheen",
     href: "#",
     title: "Services:",
     name: "Shumsudheen",
     src: client04,
     review: "Website looks stunning and works beautifully on all devices. They really captured what I was going for—clean, professional, and easy to navigate.",
     links: [
       {
         id: 1,
         title: "website",
         href: "/services",
       },
     ]
   },
 ];
 
export const projectItem = [
   {
      id: 1,
      title: "ozone",
      href: "https://www.behance.net/gallery/203548383/Packaging-Design-Ozone",
      src: project1,
      links: [
         {
            id: 1,
            title: "packaging design",
            href: "/services",
         },
         {
            id: 2,
            title: "visual strategy",
            href: "/services",
         },
      ]
   },
   {
      id: 2,
      title: "flaneur",
      href: "https://www.behance.net/gallery/215729795/Flaneur-Premium-Chocolate-Website-UIUX",
      src: project2,
      links: [
         {
            id: 1,
            title: "web design",
            href: "/services",
         },
         {
            id: 2,
            title: "ux storytelling",
            href: "/services",
         },
      ]
   },
   {
      id: 3,
      title: "zenly",
      href: "https://www.behance.net/gallery/193831697/Branding-Zenly-Redefining-workspaces-",
      src: project3,
      links: [
         {
            id: 1,
            title: "branding",
            href: "/services",
         },
         {
            id: 2,
            title: "identity system",
            href: "/services",
         },
      ]
   },
   {
      id: 4,
      title: "astra",
      href: "https://www.behance.net/gallery/204603339/UI-design-Astra-Task-Management-app-Branding",
      src: project4,
      links: [
         {
            id: 1,
            title: "app design",
            href: "/services",
         },
         {
            id: 2,
            title: "ui/ux",
            href: "/services",
         },
      ]
   },
];


// services page

export const serviceProcessItems = [
   {
      id: 1,
      phase: "01. Phase",
      name: "Discovery",
      src: phase1,
      review: "We define your goals, get to know your audience, and understand the context. Through a process of exploration, investigation, and research, we seek the insights that inform our future decisions.",
      button: "read"
   },
   {
      id: 2,
      phase: "02. Phase",
      name: "Storytelling",
      src: phase2,
      review: "Based on the answers, previous drafts, and additional research, we will develop a foundation of the deck — the structure of the presentation. We build a tone of voice, flow, and narrative to engage our audience. Here we will win people's minds.",
      button: "read"
   },
   {
      id: 3,
      phase: "03. Phase",
      name: "Design",
      src: phase3,
      review: "We use design to guide our audience's attention and keep them engaged. It's not only what you want them to do, but also how you make them feel. We make sure the presentation wins people's hearts and leaves a perfect long-lasting impression.",
      button: "read"
   },
   {
      id: 4,
      phase: "04. Phase",
      name: "Feedback",
      src: phase4,
      review: "We want to stay on the same page. Hence, each phase wraps up presenting the work to you to collect and implement your feedback if such appears.",
      button: "read"
   },
   {
      id: 5,
      phase: "05. Phase",
      name: "Delivery",
      src: phase5,
      review: "We will carefully collect and prepare all the project files to ensure smooth future use.",
      button: "read"
   },
];

export const serviceClientsItem = [
   {
      id: 1,
      website: "Karman Ventures",
      href: "https://www.ochi.design",
      title: "Services:",
      name: "William Barnes",
      src: client01,
      review: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
      links: [
         {
            id: 1,
            title: "investor deck",
            href: "/services",
         },
         {
            id: 2,
            title: "sales deck",
            href: "services",
         },
      ]
   },
   {
      id: 2,
      website: "Planetly",
      href: "https://www.planetly.com",
      title: "Services:",
      name: "Nina Walloch",
      src: client02,
      review: "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.",
      links: [
         {
            id: 1,
            title: "agency",
            href: "/services",
         },
         {
            id: 2,
            title: "big news deck",
            href: "services",
         },
         {
            id: 3,
            title: "branded template",
            href: "services",
         },
         {
            id: 4,
            title: "investor deck",
            href: "services",
         },
         {
            id: 5,
            title: "product presentation",
            href: "services",
         },
         {
            id: 6,
            title: "sales deck",
            href: "services",
         },
         {
            id: 7,
            title: "startup pitch",
            href: "services",
         },
      ]
   },
   {
      id: 3,
      website: "Workiz Easy",
      href: "https://www.workiz.com",
      title: "Services:",
      name: "Tormer levy",
      src: client03,
      review: "OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients.",
      links: [
         {
            id: 1,
            title: "compony presentation",
            href: "/services",
         },
         {
            id: 2,
            title: "onboarding presentation",
            href: "services",
         },
         {
            id: 3,
            title: "policy deck and playbook",
            href: "services",
         },
         {
            id: 4,
            title: "redesign",
            href: "services",
         },
         {
            id: 5,
            title: "sales deck",
            href: "services",
         },
      ]
   },
   {
      id: 4,
      website: "Premium Blend",
      href: "https://www.premium-blend.com",
      title: "Services:",
      name: "Elien Kim",
      src: client04,
      review: "They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations.",
      links: [
         {
            id: 1,
            title: "branded template",
            href: "/services",
         },
         {
            id: 2,
            title: "illustration",
            href: "services",
         },
      ]
   },
   {
      id: 5,
      website: "Hypercare Systems",
      href: "https://www.hypercare-systems.com",
      title: "Services:",
      name: "Brendon Goss",
      src: client05,
      review: "The service received from OCHI was absolutely first-class. Their close attention to detail, and deep thought in terms of narrative, flow, and aesthetics, completely exceeded my expectations, which were very high from the outset. Especially loved and appreciated the creation of visuals, animation, and advice around the look and feel that we are after. We will definitely continue working with Ihor and his team. I cannot recommend them highly enough.",
      links: [
         {
            id: 1,
            title: "investor deck",
            href: "/services",
         },
         {
            id: 2,
            title: "startup pitch",
            href: "services",
         },
      ]
   },
   {
      id: 6,
      website: "Officevibe",
      href: "https://www.officevibe.com",
      title: "Services:",
      name: "Raff Labri",
      src: client06,
      review: "Ochi has an impressive understanding of what’s needed to do an effective presentation. The stakeholders at work said it’s the best most complete PP template they’ve ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!",
      links: [
         {
            id: 1,
            title: "branded template deck",
            href: "/services",
         },
      ]
   },
   {
      id: 7,
      website: "Orderlion",
      href: "https://www.orderlion.com",
      title: "Services:",
      name: "Stefan Strohmer",
      src: client07,
      review: "The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!",
      links: [
         {
            id: 1,
            title: "agency",
            href: "/services",
         },
         {
            id: 2,
            title: "investor deck",
            href: "services",
         },
         {
            id: 3,
            title: "product presentation",
            href: "services",
         },
         {
            id: 4,
            title: "review",
            href: "services",
         },
         {
            id: 2,
            title: "sales deck",
            href: "services",
         },
      ]
   },
   {
      id: 8,
      website: "Black Book",
      href: "https://www.blackbookapp.co",
      title: "Services:",
      name: "Jacki Smith",
      src: client08,
      review: "They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We’re very happy with the process and the final product. All was handled well and professionally.",
      links: [
         {
            id: 1,
            title: "review",
            href: "/services",
         },
         {
            id: 2,
            title: "startup pitch",
            href: "services",
         },
      ]
   },
];

export const serviceCapaybilitiesItem = [
   {
      id: 1,
      src1: capaybilities1,
      title1: "RAISE FUNDS:",
      review: "We help manage investor expectations and secure financing for your business with an excellent investor deck.Having a good product or illuminating ideas is not enough anymore.Poor investor presentation may close the door to potential financing right away.In contrast, a properly made investor deck provides investors with clarity, evokes confidence, and leaves them craving for more.",
      subTitle: "Projects",
      links1: [
         {
            id: 1,
            title: "investor deck",
            href: "/"
         },
         {
            id: 2,
            title: "startup pitch",
            href: "/"
         },
      ],
      src2: capaybilities2,
      title2: "SELL PRODUCTS:",
      links2: [
         {
            id: 1,
            title: "business proposal",
            href: "/"
         },
         {
            id: 2,
            title: "company presentation",
            href: "/"
         },
         {
            id: 3,
            title: "product presentation",
            href: "/"
         },
         {
            id: 4,
            title: "sales deck",
            href: "/"
         },
         {
            id: 5,
            title: "service deck",
            href: "/"
         },
      ]
   },
   {
      id: 2,
      src1: capaybilities3,
      title1: "HIRE & MANAGE PEOPLE:",
      review: "We help manage investor expectations and secure financing for your business with an excellent investor deck.Having a good product or illuminating ideas is not enough anymore.Poor investor presentation may close the door to potential financing right away.In contrast, a properly made investor deck provides investors with clarity, evokes confidence, and leaves them craving for more.",
      subTitle: "Projects",
      links1: [
         {
            id: 1,
            title: "big news deck",
            href: "/"
         },
         {
            id: 2,
            title: "branded template",
            href: "/"
         },
         {
            id: 3,
            title: "onboarding presentation",
            href: "/"
         },
         {
            id: 4,
            title: "policy deck & playbook",
            href: "/"
         },
         {
            id: 5,
            title: "progress report",
            href: "/"
         },
      ],
      src2: capaybilities4,
      title2: "ADDITIONAL:",
      links2: [
         {
            id: 1,
            title: "agency",
            href: "/"
         },
         {
            id: 2,
            title: "branding",
            href: "/"
         },
         {
            id: 3,
            title: "corporate training",
            href: "/"
         },
         {
            id: 4,
            title: "redesign",
            href: "/"
         },
         {
            id: 5,
            title: "review",
            href: "/"
         },
      ]
   },
];

export const expectationsItems = [
  {
    id: 1,
    title1: "01",
    subTitle1: "Clear Communication",
    btn: "read",
    para1:
      "At Studio Bizkit, transparency is everything. From kickoff to delivery, you’re looped in via a shared Notion dashboard — complete with timelines, updates, and ongoing discussions. No guessing games. Just honest progress and prompt replies.",
  },
  {
    id: 2,
    title1: "02",
    subTitle1: "Dedicated Project Lead",
    btn: "read",
    para1:
      "Every project has a single point of contact — someone who gets your vision and speaks your language. Whether it's Bilal on tech, Ashwath on design, or Rahul on operations, you’re always talking to someone who’s in the weeds with you, not just reading the brief.",
  },
  {
    id: 3,
    title1: "03",
    subTitle1: "Rooted in India, Built for the World",
    btn: "read",
    para1:
      "We’re proudly based in Coimbatore, India — but our work speaks globally. Studio Bizkit is built on grit, creative exploration, and strong partnerships with founders and businesses across the world. We're small, agile, and ready to scale alongside you.",
  },
  {
    id: 4,
    title1: "04",
    subTitle1: "Holistic Discovery",
    btn: "read",
    para1:
      "We ask a lot of questions — the right ones. Before pushing pixels or writing code, we dive deep into your market, goals, and competitors. Discovery fuels our design and dev choices, keeping the entire build intentional and aligned with your mission.",
  },
  {
    id: 5,
    title1: "05",
    subTitle1: "Always Evolving",
    btn: "read",
    para1:
      "We don’t do rinse-and-repeat. Our team is constantly leveling up — through feedback, research, and internal experiments. That means you're not just hiring a team that’s skilled today, but one that’s hungry to be better tomorrow.",
  },
  {
    id: 6,
    title1: "06",
    subTitle1: "Focused Workload",
    btn: "read",
    para1:
      "We don’t take on everything — and that’s on purpose. By working with a handful of clients at a time, we go deep instead of wide. This lets us bring real value and attention to your project, instead of spreading ourselves thin across dozens of timelines.",
  },
];


export const achiveItems = [
  {
    id: 1,
    title1: ["50+"],
    title2: ["70+"],
    subTitle1: "Clients from 5 Countries in 5 months",
    subTitle2: "Projects successfully shipped",
  },
  {
    id: 2,
    title1: ["90%"],
    title2: ["98%"],
    subTitle1: "Of our clients come back",
    subTitle2: "Net Promoter Score",
  },
];


// presentation page

export const presentationProjectItem = [
   {
      id: 1,
      title: "fyde",
      src: project1,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "audit",
            href: "/services",
         },
         {
            id: 2,
            title: "copywriting",
            href: "services",
         },
         {
            id: 3,
            title: "sales deck",
            href: "services",
         },
         {
            id: 4,
            title: "slides design",
            href: "services",
         },
      ]
   },
   {
      id: 2,
      title: "trawa",
      src: project3,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand identity",
            href: "/services",
         },
         {
            id: 2,
            title: "design research",
            href: "services",
         },
         {
            id: 3,
            title: "investor deck",
            href: "services",
         },
      ]
   },
   {
      id: 3,
      title: "premium blend",
      src: project4,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
      ]
   },
   {
      id: 4,
      title: "planetly",
      src: project5,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
         {
            id: 2,
            title: "big news deck",
            href: "/services",
         },
         {
            id: 3,
            title: "branded template",
            href: "/services",
         },
         {
            id: 4,
            title: "investor deck",
            href: "/services",
         },
         {
            id: 5,
            title: "policy deck & playbook",
            href: "/services",
         },
         {
            id: 6,
            title: "sales deck",
            href: "/services",
         },
      ]
   },
   {
      id: 5,
      title: "black box",
      src: project8,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "investor deck",
            href: "/services",
         },
         {
            id: 2,
            title: "redesign",
            href: "/services",
         },
         {
            id: 3,
            title: "review",
            href: "/services",
         },
      ]
   },
   {
      id: 6,
      title: "vise",
      src: project2,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "agency",
            href: "/services",
         },
         {
            id: 2,
            title: "compony presentation",
            href: "services",
         },
      ]
   },
   {
      id: 7,
      title: "soft start",
      src: project9,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
         {
            id: 2,
            title: "sales desc",
            href: "/services",
         },
      ]
   },
   {
      id: 8,
      title: "officevibe",
      src: project7,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
      ]
   },
   {
      id: 9,
      title: "workiz easy",
      src: project6,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "onboarding presentation",
            href: "/services",
         },
         {
            id: 2,
            title: "policy deck & playbook",
            href: "/services",
         },
         {
            id: 3,
            title: "sales deck",
            href: "/services",
         },
      ]
   },
];


export const publicationItems = [
   {
      id: 1,
      title: "officevibe ppt template",
      src: publication1
   },
   {
      id: 2,
      title: "trawa energy pitch deck",
      src: publication2
   },
   {
      id: 3,
      title: "tech for ukraine",
      src: publication3
   },
];

// insights page constants

export const insightsPublicationItems = [
   {
      id: 1,
      title: "Sales calls?  Oh no!👀",
      src: insights1
   },
   {
      id: 2,
      title: "Are you trying to be the main character?",
      src: insights2
   },
   {
      id: 3,
      title: "New Top 7",
      src: insights3
   },
];

export const latestItemss = [
   {
      id: 1,
      href: "/",
      src: latest1,
      links: [
         {
            id: 1,
            title: "public speaking"
         },
         {
            id: 1,
            title: "storytelling"
         },
      ],
      title: "Presenting to an International Audience: <br/> Tips and Lessons Learned.",
      subTitle: "By Ihor Hulyahrodskyy",
      date: "26 May 2023"
   },
   {
      id: 2,
      href: "/",
      src: latest2,
      links: [
         {
            id: 1,
            title: "presentation template"
         },
      ],
      title: "Developing compony-wide presentation template for premium blend.",
      subTitle: "By Ihor Hulyahrodskyy",
      date: "07 Dec 2022"
   },
];

// workiz page constants
export const workizItem = [
   {
      id: 1,
      title: "office vibe",
      src: project7,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
      ]
   },
   {
      id: 2,
      title: "planetly",
      src: project5,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
         {
            id: 2,
            title: "big news deck",
            href: "/services",
         },
         {
            id: 3,
            title: "branded template",
            href: "/services",
         },
         {
            id: 4,
            title: "investor deck",
            href: "/services",
         },
         {
            id: 5,
            title: "policy deck & playbook",
            href: "/services",
         },
         {
            id: 6,
            title: "sales deck",
            href: "/services",
         },
      ]
   },
];


// about page constants

export const aboutPartberItems = [
   {
      id: 1,
      src: planetly,
      title: "Planetly",
      para: "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership."
   },
   {
      id: 2,
      src: officevibe,
      title: "Officevibe",
      para: "Ochi has an impressive understanding of what's needed to do an effective presentation. The stakeholders at work said it's the best most complete PP template they've ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!"
   },
   {
      id: 3,
      src: nestle,
      title: "Nestle",
      para: "This is just a great experience for us! As an established company, you operate within different industries and expect immediate input with a certain level of service. Ihor and the team delivered exactly that. Fantastic result, quick delivery time, and highly responsive. This team is a hidden gem. We've already started to outline our next projects for them."
   },
   // {
   //    id: 4,
   //    src: toyota,
   //    title: "Toyota",
   //    para: "Great work, great communication, and work ethic. Their skills, and understanding of project scope and subject matter - are simply unmatched. Looking very forward to working again soon."
   // },
   // {
   //    id: 5,
   //    src: lexus,
   //    title: "Lexus",
   //    para: "Thanks for your great work! The communication was excellent, the team was able to grasp in detail what we wanted and plastered it on the company presentation and sales deck. Their work is absolutely amazing."
   // },
   // {
   //    id: 6,
   //    src: aflorihtmic,
   //    title: "Aflorithmic",
   //    para: "Super responsive and quick. A charm to work with. Unfortunately, often designers are not like that and you end up losing a lot of time with briefings that don't lead anywhere. This is definitely not the case here. I'd work again with lhor and his team anytime!"
   // },
   // {
   //    id: 7,
   //    src: orderlion,
   //    title: "Orderlion",
   //    para: "The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!"
   // },
   // {
   //    id: 8,
   //    src: blackBox,
   //    title: "BlackBox",
   //    para: "They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We're very happy with the process and the final product. All was handled well and professionally."
   // },
];

// contact page constants

export const FaqItems = [
  {
    id: 1,
    question: "How many revisions do you offer per project?",
    title: "Description",
    description:
      "At Studio Bizkit, we focus on delivering work that hits the mark without needing endless back-and-forth. We include up to 3 structured revision rounds, but if there's something critical, we're not the type to say 'no' just for policy's sake.",
    links: [
      {
        id: 1,
        title: 1,
        description:
          "Most projects don’t even need all 3 rounds — clarity during discovery and communication does the heavy lifting early on."
      },
      {
        id: 2,
        title: 2,
        description:
          "If we feel a project isn’t a great fit, we’re upfront about it. And we’ll gladly point you to someone who is a better fit."
      }
    ],
    button: "read"
  },
  {
    id: 2,
    question: "Do you animate websites or interfaces?",
    title: "Description",
    description:
      "Absolutely. We love adding purposeful motion to our interfaces — micro-interactions, page transitions, and scroll animations that guide the user rather than distract them.",
    links: [
      {
        id: 1,
        title: 1,
        description:
          "We mostly use Framer Motion and GSAP depending on the stack. Subtlety is key — motion should support usability, not show off."
      }
    ],
    button: "read"
  },
  {
    id: 3,
    question: "Do you collaborate with other agencies or freelancers?",
    title: "Description",
    description:
      "Yes, we team up with external creatives when needed — especially for niche skills like 3D, advanced animation, or complex data visualization. Our extended network means we can scale flexibly without compromising quality.",
    links: [
      {
        id: 1,
        title: 1,
        description:
          "All partnerships go through our quality control and communication standards, so you’ll still have one consistent experience."
      }
    ],
    button: "read"
  },
  {
    id: 4,
    question: "Are you hiring? Can I join the team?",
    title: "Description",
    description:
      "We're always open to talking with talented designers, developers, and strategists. If you love solving real problems and shipping work that matters, let’s talk.",
    links: [
      {
        id: 1,
        title: 1,
        description:
          "Send your portfolio/CV to hello@studiobizkit.com with the subject 'BIZKIT CANDIDATE'. If we vibe, we’ll get in touch."
      },
      {
        id: 2,
        title: 2,
        description:
          "We also love collaborating with students. If you’re from a creative or tech background and want an internship or mentorship, hit us up."
      }
    ],
    button: "read"
  },
  {
    id: 5,
    question: "Can I invite you for a talk, workshop, or university session?",
    title: "Description",
    description:
      "Yes — we enjoy sharing what we’ve learned. Whether it’s a classroom, online panel, or corporate team, we’re happy to teach and exchange ideas.",
    links: [
      {
        id: 1,
        title: 1,
        description:
          "We’ve done sessions on UI/UX, product strategy, design systems, and startup-tech alignment. Just send us the what, when, and where."
      }
    ],
    button: "read"
  },
  {
    id: 6,
    question: "Would you be open to a podcast or YouTube feature?",
    title: "Description",
    description:
      "Sure! We’re always up for a good conversation — especially if it’s around design, tech, entrepreneurship, or anything that moves the creative web forward.",
    links: [
      {
        id: 1,
        title: 1,
        description:
          "Email your pitch to hello@studiobizkit.com with 'Podcast/YT Proposal' as the subject. Add links and context so we know what we’re stepping into."
      }
    ],
    button: "read"
  }
];
