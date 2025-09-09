const projectsData = [
  {
    title: "Auth Management System",
    category: "Web App",
    description:
      "A role-based authentication system where Users manage personal data, while Admins perform CRUD operations and view all registered accounts.",
    image: "/auth.jpg",
    github: "https://github.com/azkahrtmi/auth-management-system",
    demo: "https://auth-management-system.vercel.app/",
    status: "On-Going" as const,
    techStack: [
      "React Vite",
      "Tailwind",
      "TypeScript",
      "Express",
      "PostgreSQL",
    ],
    features: [
      "Separate login for User and Admin",
      "User dashboard to display personal data",
      "Admin dashboard with full CRUD for User and Admin accounts",
    ],
    demoAccount: {
      email: "admin@mail.com",
      password: "admin123",
    },
  },
  {
    title: "FinTrack",
    category: "Web App",
    description:
      "FinTrack is a financial management app that helps users track income, expenses, and savings with real-time insights and clean UI.",
    image: "/fintrack.jpg",
    github: "https://github.com/azkahrtmi/FinTrackplus",
    demo: "https://fin-trackplus.vercel.app/",
    status: "Completed" as const, // ✅ Hijau
    techStack: ["React Vite", "Tailwind", "TypeScript", "Supabase"],
    features: [
      "Real-time income and expense tracking",
      "Secure authentication with Supabase",
      "Responsive design with Tailwind",
    ],
    demoAccount: {
      email: "user@example.com",
      password: "testing123",
    },
  },
  {
    title: "RoemahDjogja",
    category: "Web App",
    description:
      "A custom bookkeeping web app for homestay and rental business, enabling daily financial tracking and automated invoice generation.",
    image: "/rumahjogja.jpg",
    github: "Private repo, cannot share due to client ownership",
    demo: "Private demo, cannot share due to client ownership",
    status: "Completed" as const,
    techStack: ["React Vite", "Tailwind", "TypeScript", "Supabase"],
    features: [
      "Custom web app for homestay bookkeeping",
      "Real-time income and expense tracking with Supabase",
      "Automated PDF invoice generation",
      "WhatsApp invoice sharing integration",
      "Thermal printer support for direct receipt printing",
      "Responsive UI with React (Vite) + Tailwind CSS",
    ],
  },
  {
    title: "BayangTrans",
    category: "Web App",
    description:
      "A tailored web app for vehicle rental businesses, streamlining fleet availability, scheduling, and financial tracking.",
    image: "/bayang.jpg",
    github: "Private repo, cannot share due to client ownership",
    demo: "Private demo, cannot share due to client ownership",
    status: "Completed" as const,
    techStack: ["React Vite", "Tailwind", "JavaScript", "Supabase"],
    features: [
      "Custom modules for fleet availability, rental schedules, and maintenance logs",
      "Real-time vehicle availability tracking and rental duration visualization",
      "Integrated per-vehicle and global income/expense tracking",
      "Authentication and data management powered by Supabase",
    ],
  },
  {
    title: "Task Management",
    category: "Backend",
    description:
      "A clean-architecture-based task management system built with .NET 6 and C#, following SOLID principles.",
    image: "/NET.png",
    github: "https://github.com/azkahrtmi/Task-Management",
    status: "Completed" as const,
    techStack: ["C#", ".NET 6"],
    features: [
      "Create, assign, update, and delete tasks with validation rules",
      "Filter tasks by assigned user",
      "RESTful API with clean architecture layers",
      "Logging for critical operations",
      "Unit tests for core functionalities",
    ],
  },

  {
    title: "Auth Testing",
    category: "Backend",
    description:
      "A comparative project testing insecure vs secure authentication APIs built with .NET and PostgreSQL.",
    image: "/NET.png",
    github: "https://github.com/azkahrtmi/AuthTesting",
    status: "Completed" as const,
    techStack: ["C#", ".NET", "PostgreSQL"],
    features: [
      "Implemented two API versions: insecure vs secure login/signup",
      "Demonstrated SQL Injection vulnerability for learning purposes",
      "Fixed injection risk with parameterized queries",
      "Added password hashing for secure storage",
      "Database setup with PostgreSQL (auth_demo)",
      "REST API endpoints for signup and login",
      "Tested endpoints using Postman",
    ],
  },
  {
    title: "Weather App",
    category: "Web App",
    description:
      "A weather forecasting web app with React frontend and Golang backend consuming Meteosource API.",
    image: "/weather.jpg",
    github: "https://github.com/azkahrtmi/Weather-app-i3",
    status: "Completed" as const,
    techStack: ["React Vite", "Tailwind", "TypeScript", "PostgreSQL", "Golang"],
    features: [
      "Integrated Golang backend fetching weather data from Meteosource API",
      "User-friendly React frontend with Tailwind styling",
      "Supports real-time weather forecast retrieval",
      "Displays temperature, conditions, and location-based data",
      "Backend connected with PostgreSQL for optional storage",
    ],
  },
];
export default projectsData;
