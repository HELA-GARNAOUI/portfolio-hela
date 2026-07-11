export const projects = [
  {
    id: "tunify-travel",
    badge: "P-09",
    title: "Tunify Travel",
    category: "Web",
    type: "WEB APP",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    color: "#4A90E2",
    github: "#",
    demo: "#",
    desc: "An innovative travel platform that won 1st place at JCI in 2026.",
    fullDesc: `Tunify Travel is an award-winning travel platform that took the top prize at JCI in 2026. Designed to revolutionize how people plan their journeys, the platform combines intuitive design with powerful scheduling and booking features.

It provides users with tailored travel recommendations, real-time booking capabilities, and an interactive itinerary planner that ensures a seamless travel experience.`,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "JCI Top 1 Winner (2026)",
      "Interactive itinerary planner",
      "Real-time booking system",
      "Tailored travel recommendations",
      "Interactive destination maps",
    ],
    year: "2026",
    role: "Full Stack Developer",
    status: "Completed",
  },
  {
    id: "ai-cv-matching",
    badge: "P-01",
    title: "AI CV Matching",
    category: "Site",
    type: "WEB APP",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop",
    color: "#FF6B35",
    github: "#",
    demo: "#",
    desc: "An intelligent platform that uses NLP to match candidates' resumes with job descriptions accurately.",
    fullDesc: `AI CV Matching is a cutting-edge recruitment platform that leverages Natural Language Processing (NLP) and machine learning to bridge the gap between job seekers and employers.

The platform analyses both resumes and job descriptions using advanced transformer models to extract key skills, experience levels, and domain knowledge. It then computes a compatibility score and ranks candidates intelligently.

Key capabilities include multi-language resume parsing, semantic similarity matching beyond keyword search, explainable AI scores that help recruiters understand why a candidate was ranked, and real-time job alert notifications for candidates.`,
    tech: ["React", "Flask", "Python", "TensorFlow", "PostgreSQL"],
    features: [
      "NLP-powered resume parsing",
      "Semantic job-candidate matching",
      "Explainable AI match scores",
      "Real-time notifications",
      "Multi-language support",
      "RESTful API integration",
    ],
    year: "2025",
    role: "Full Stack Developer & AI Engineer",
    status: "Completed",
  },
  {
    id: "snap-compta",
    badge: "P-02",
    title: "Snap Compta",
    category: "Logiciel",
    type: "LOGICIEL",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    color: "#6C63FF",
    github: "#",
    demo: "#",
    desc: "An intelligent accounting software utilizing Machine Learning and MLOps.",
    fullDesc: `Snap Compta is an advanced accounting software designed to automate and streamline financial operations using Machine Learning models.

The system processes financial documents and transactions intelligently, leveraging MLOps pipelines to ensure models are continuously trained and deployed efficiently.

Built with a modern Next.js frontend and containerized with Docker, it offers a robust, scalable, and intelligent solution for modern accounting needs.`,
    tech: ["Next.js", "ML", "MLOps", "Docker", "Python"],
    features: [
      "Machine Learning document processing",
      "Continuous MLOps pipelines",
      "Real-time analytics",
      "Automated financial reporting",
      "Scalable containerized architecture",
    ],
    year: "2026",
    role: "Full Stack ML Developer",
    status: "Not completed",
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
    tech: ["Next.js", "Django", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Smart mentor-mentee matching",
      "Real-time messaging",
      "Stripe payment integration",
      "Video session scheduling",
      "Rating & review system",
      "Skill progress tracking",
    ],
    year: "2026",
    role: "Full Stack Developer",
    status: "Not completed",
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
    tech: ["React Native", "Django", "Python", "Socket.io", "PostgreSQL", "TensorFlow Lite"],
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
    status: "Not completed",
  },
  {
    id: "rainify",
    badge: "P-05",
    title: "Rainify",
    category: "IoT",
    type: "APPLICATION",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop",
    color: "#00B4D8",
    github: "#",
    demo: "#",
    desc: "Smart weather and irrigation application with an IoT system using machine learning predictions.",
    fullDesc: `Rainify is an intelligent agricultural application with an IoT system that automates irrigation based on real-time soil moisture data, weather forecasts, and machine learning predictions.

Sensors embedded in the field collect temperature, humidity, and soil moisture readings every 15 minutes and transmit them via MQTT to a central server. A trained ML model predicts the optimal irrigation schedule for the next 48 hours, factoring in local weather API data.

Farmers can monitor their fields remotely via a mobile dashboard, receive alerts for abnormal readings, and override automated decisions manually.`,
    tech: ["ESP32", "C++", "Python", "React", "Flask", "MQTT", "scikit-learn"],
    features: [
      "Real-time soil & weather sensors",
      "ML-powered irrigation prediction",
      "MQTT data pipeline",
      "Remote monitoring dashboard",
      "SMS & push alerts",
      "Manual override controls",
    ],
    year: "2025",
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
    tech: ["Django", "Python", "PostgreSQL", "Tailwind CSS", "Cloudinary", "WebSockets"],
    features: [
      "Real-time feed with WebSockets",
      "OAuth authentication",
      "Trending hashtags analysis",
      "Image uploads via Cloudinary",
      "Infinite scroll",
      "Full notification system",
    ],
    year: "2024",
    role: "Full Stack Developer",
    status: "Not completed",
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
    desc: "A premium landing page and portal for a digital marketing agency with an AI-powered RAG system.",
    fullDesc: `DigiFlow is a premium, award-winning platform built for a digital marketing agency. Beyond pixel-perfect attention to detail and smooth animations, it integrates advanced AI capabilities.

The platform features an intelligent AI assistant powered by a Retrieval-Augmented Generation (RAG) system, allowing clients to query agency reports and marketing insights seamlessly.

GSAP ScrollTrigger powers the scroll-based animations while Framer Motion handles micro-interactions, all built on a robust Next.js and Django architecture.`,
    tech: ["Next.js", "Django", "Python", "RAG", "Tailwind CSS", "Framer Motion"],
    features: [
      "AI integration with RAG system",
      "Interactive marketing assistant",
      "Particle hero background",
      "GSAP ScrollTrigger animations",
      "Testimonials carousel",
      "Animated contact form",
    ],
    year: "2025",
    role: "Full Stack AI Developer",
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
