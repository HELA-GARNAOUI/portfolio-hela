export const projects = [
  {
    id: "ai-cv-matching",
    badge: "P-01",
    title: "AI CV Matching",
    category: "AI",
    type: "WEB APP",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop",
    color: "#FF6B35",
    github: "#",
    demo: "#",
    desc: "An intelligent platform that uses NLP to match candidates' resumes with job descriptions accurately.",
    fullDesc: `AI CV Matching is a cutting-edge recruitment platform that leverages Natural Language Processing (NLP) and machine learning to bridge the gap between job seekers and employers.

The platform analyses both resumes and job descriptions using advanced transformer models to extract key skills, experience levels, and domain knowledge. It then computes a compatibility score and ranks candidates intelligently.

Key capabilities include multi-language resume parsing, semantic similarity matching beyond keyword search, explainable AI scores that help recruiters understand why a candidate was ranked, and real-time job alert notifications for candidates.`,
    tech: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Docker", "Hugging Face"],
    features: [
      "NLP-powered resume parsing",
      "Semantic job-candidate matching",
      "Explainable AI match scores",
      "Real-time notifications",
      "Multi-language support",
      "RESTful API integration",
    ],
    year: "2024",
    role: "Full Stack Developer & AI Engineer",
    status: "Completed",
  },
  {
    id: "management-dashboard",
    badge: "P-02",
    title: "Management Dashboard",
    category: "Backend",
    type: "DASHBOARD",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    color: "#6C63FF",
    github: "#",
    demo: "#",
    desc: "A comprehensive management system customized for small to medium businesses.",
    fullDesc: `A feature-rich business management dashboard designed to streamline operations for small to medium-sized enterprises. It consolidates all key business metrics into a single, intuitive interface.

The system covers inventory management, sales tracking, employee management, financial reporting, and customer relationship management (CRM). It supports role-based access control so different team members see only what they need.

Built with performance in mind, it handles thousands of records with real-time filtering, export to PDF/Excel, and automated email reports.`,
    tech: ["Node.js", "Python", "PostgreSQL", "Next.js", "TypeScript", "Redis", "Docker"],
    features: [
      "Real-time analytics & KPIs",
      "Inventory & sales tracking",
      "Role-based access control",
      "Financial reporting",
      "CRM module",
      "PDF & Excel export",
    ],
    year: "2024",
    role: "Full Stack Developer",
    status: "Completed",
  },
  {
    id: "skillbridge",
    badge: "P-03",
    title: "SkillBridge",
    category: "Web",
    type: "MARKETPLACE",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    color: "#00D4AA",
    github: "#",
    demo: "#",
    desc: "A marketplace connecting mentors and mentees based on specific skill requirements.",
    fullDesc: `SkillBridge is a two-sided marketplace where aspiring professionals can find expert mentors tailored exactly to their skill development needs.

The platform uses a smart matching algorithm that considers skill gaps, learning goals, mentor availability, and past session ratings. Mentors can set their own rates, availability, and session formats (video call, async feedback, or project-based).

Integrated payment processing, calendar syncing, and a real-time messaging system make the entire experience seamless from discovery to session completion.`,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe", "Socket.io", "Cloudinary"],
    features: [
      "Smart mentor-mentee matching",
      "Real-time messaging",
      "Stripe payment integration",
      "Video session scheduling",
      "Rating & review system",
      "Skill progress tracking",
    ],
    year: "2023",
    role: "Full Stack Developer",
    status: "Completed",
  },
  {
    id: "love-connect",
    badge: "P-04",
    title: "Love Connect",
    category: "Web",
    type: "MOBILE APP",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
    color: "#FF4D8D",
    github: "#",
    demo: "#",
    desc: "A modern dating application with real-time chat and advanced matching algorithms.",
    fullDesc: `Love Connect is a modern dating application designed to create meaningful connections through thoughtful design and intelligent matching.

Unlike typical swipe-based apps, Love Connect uses a personality quiz and behavioural analysis to suggest compatible partners. Real-time chat with read receipts, voice messages, and a built-in icebreaker question system make starting conversations less intimidating.

Privacy and safety are top priorities: all profiles are verified, photos are moderated by AI, and users can report and block at any time.`,
    tech: ["React Native", "Node.js", "Socket.io", "Firebase", "MongoDB", "TensorFlow Lite"],
    features: [
      "Personality-based matching",
      "Real-time chat & voice messages",
      "AI photo moderation",
      "Profile verification",
      "Icebreaker questions",
      "Location-based discovery",
    ],
    year: "2023",
    role: "Full Stack Mobile Developer",
    status: "Completed",
  },
  {
    id: "rainify",
    badge: "P-05",
    title: "Rainify",
    category: "IoT",
    type: "IOT SYSTEM",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop",
    color: "#00B4D8",
    github: "#",
    demo: "#",
    desc: "Smart weather and irrigation system using IoT sensors and machine learning predictions.",
    fullDesc: `Rainify is an intelligent agricultural IoT system that automates irrigation based on real-time soil moisture data, weather forecasts, and machine learning predictions.

Sensors embedded in the field collect temperature, humidity, and soil moisture readings every 15 minutes and transmit them via MQTT to a central server. A trained ML model predicts the optimal irrigation schedule for the next 48 hours, factoring in local weather API data.

Farmers can monitor their fields remotely via a mobile dashboard, receive alerts for abnormal readings, and override automated decisions manually.`,
    tech: ["ESP32", "C++", "Python", "React", "MQTT", "scikit-learn", "FastAPI"],
    features: [
      "Real-time soil & weather sensors",
      "ML-powered irrigation prediction",
      "MQTT data pipeline",
      "Remote monitoring dashboard",
      "SMS & push alerts",
      "Manual override controls",
    ],
    year: "2023",
    role: "IoT & Full Stack Developer",
    status: "Completed",
  },
  {
    id: "tweetclone",
    badge: "P-06",
    title: "TweetClone",
    category: "Web",
    type: "SOCIAL MEDIA",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",
    color: "#1DA1F2",
    github: "#",
    demo: "#",
    desc: "A fully functional microblogging platform mimicking Twitter's core functionalities.",
    fullDesc: `TweetClone is a full-featured microblogging platform built as a faithful recreation of Twitter's core experience, with additional modern improvements.

Users can post tweets, reply, retweet, and like. A real-time feed powered by WebSockets ensures new posts appear instantly without a page refresh. The explore page features trending topics computed from hashtag frequency analysis.

Includes full authentication with OAuth (Google & GitHub), infinite scroll, image uploads, dark/light mode, and a notification system.`,
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "NextAuth", "Cloudinary", "WebSockets"],
    features: [
      "Real-time feed with WebSockets",
      "OAuth authentication",
      "Trending hashtags analysis",
      "Image uploads via Cloudinary",
      "Infinite scroll",
      "Full notification system",
    ],
    year: "2023",
    role: "Full Stack Developer",
    status: "Completed",
  },
  {
    id: "digiflow-agency",
    badge: "P-07",
    title: "DigiFlow Agency",
    category: "Web",
    type: "LANDING PAGE",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    color: "#F72585",
    github: "#",
    demo: "#",
    desc: "A premium landing page for a digital marketing agency with smooth scroll and animations.",
    fullDesc: `DigiFlow is a premium, award-winning landing page built for a digital marketing agency. Every section was crafted with pixel-perfect attention to detail, smooth animations, and conversion in mind.

The page features a full-screen hero with a particle background, animated statistics counters, a smooth-scroll service showcase, client testimonials carousel, and an animated contact form.

GSAP ScrollTrigger powers the scroll-based animations while Framer Motion handles micro-interactions. The site achieves a 98+ Lighthouse performance score despite its rich visual effects.`,
    tech: ["React", "Framer Motion", "GSAP", "Tailwind CSS", "EmailJS"],
    features: [
      "Particle hero background",
      "GSAP ScrollTrigger animations",
      "Animated statistics counters",
      "Testimonials carousel",
      "Animated contact form",
      "98+ Lighthouse score",
    ],
    year: "2024",
    role: "Frontend Developer",
    status: "Completed",
  },
  {
    id: "portfolio-website",
    badge: "P-08",
    title: "Portfolio Website",
    category: "Web",
    type: "PORTFOLIO",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    color: "#FF6B35",
    github: "#",
    demo: "#",
    desc: "A luxurious personal portfolio featuring glassmorphism and Framer Motion animations.",
    fullDesc: `This very portfolio website — a meticulously crafted digital identity designed to stand out. Built with a dark glassmorphism aesthetic, it features smooth page transitions, magnetic cursor effects, and rich micro-animations throughout.

Every section tells a story: the hero with a 3D orbital photo frame, an animated skills carousel, a 3D circular project showcase, and a contact form with real-time validation.

The site is fully responsive, SEO-optimised, and achieves top Lighthouse scores while maintaining its visually rich experience.`,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Resend"],
    features: [
      "Glassmorphism design system",
      "Magnetic cursor effect",
      "3D project carousel",
      "Animated skills orbits",
      "Page transition system",
      "Fully responsive & SEO ready",
    ],
    year: "2024",
    role: "Full Stack Developer & Designer",
    status: "In Progress",
  },
];

export type Project = (typeof projects)[0];
