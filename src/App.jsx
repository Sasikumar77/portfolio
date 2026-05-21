import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Server,
  Code2,
  Wrench,
  Award,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Briefcase,
  Check,
  Download
} from 'lucide-react';

// --- DATA ---
const personalInfo = {
  name: "Sasikumar Saminathan",
  preferredName: "Sasi",
  role: "Full Stack Developer",
  email: "thesasi.dev@gmail.com",
  phone: "+91 6374523686",
  location: "Chennai, India",
  summary: "Full Stack Developer with over 2.5 years of experience at Freshworks, specializing in building scalable APIs with Java and Spring Boot, and responsive frontends using React. Focused on improving system stability through automation frameworks. Proven track record in contributing to AI agent epics and resolving 100+ production issues."
};

const skills = [
  { category: "Backend & Frameworks", icon: <Server className="w-5 h-5 text-blue-400" />, items: ["Java", "Spring Boot", "REST APIs", "Web Services", "Redis", "SQL"] },
  { category: "Frontend", icon: <Code2 className="w-5 h-5 text-emerald-400" />, items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { category: "Automation", icon: <Terminal className="w-5 h-5 text-purple-400" />, items: ["Playwright", "Selenium", "POM Framework"] },
  { category: "Tools & Concepts", icon: <Wrench className="w-5 h-5 text-orange-400" />, items: ["Git & GitHub", "Docker", "Maven", "Postman", "OOP", "Data Structures", "System Integration"] }
];

const experience = [
  {
    role: "Junior Developer",
    company: "Freshworks",
    period: "Jan 2025 - May 2026",
    location: "Chennai, India",
    achievements: [
      "Worked on epic-level initiatives for AI agents, addressing complex bugs and driving feature enhancements.",
      "Designed and implemented RESTful APIs for AI agents, enabling seamless communication and data exchange.",
      "Developed an internal tracking application to monitor deployment statuses across five regional production environments.",
      "Strengthened system reliability by creating a Playwright automation suite covering 300+ test cases.",
      "Applied the Page Object Model (POM) framework using TypeScript to improve test suite maintainability."
    ]
  },
  {
    role: "Intern",
    company: "Freshworks",
    period: "Aug 2022 - Dec 2023",
    location: "Chennai, India",
    achievements: [
      "Investigated and resolved technical customer issues through root cause analysis.",
      "Contributed to identifying and resolving bugs and implementing feature enhancements for chatbot.",
      "Developed the frontend of a Marketplace application using React, reducing user load times by 20%."
    ]
  }
];

const awards = [
  { title: "Silver Award", description: "Optimized Selenium-based API test suites, maintaining a 99% pass rate." },
  { title: "Above & Beyond Certificate", description: "Resolved 100+ production customer issues in H1 2024." }
];

const projects = [
  {
    title: "Deployment Status Tracker",
    role: "Solo Developer",
    context: "Internal Tool @ Freshworks",
    contextColor: "blue",
    description: "A real-time deployment monitoring dashboard giving the engineering team instant visibility into release rollouts for Freshdesk, Freshchat, and Freshbots across staging and five global production regions (US, India, EU, Middle East, Australia).",
    highlights: [
      "Designed a Node.js/Express backend that aggregated data from three separate APIs — Google Calendar, GitHub Tags API, and Freshworks' internal Kubix deployment platform — into a single unified response",
      "Built a two-step API architecture that decoupled tag discovery from status fetching, so the React dashboard could show release tags instantly while deployment statuses loaded in the background",
      "Implemented regex-based tag pattern matching and iterative tag-walking to always surface the most current deployment status per region",
      "Handled product-specific tag naming conventions and pipeline structures for three different products",
      "Containerised with Docker and deployed on an internal pod"
    ],
    tech: ["React.js", "Node.js", "Express", "Docker", "Google Calendar API", "GitHub API", "REST APIs"],
    links: []
  },
  {
    title: "Haybot",
    role: "Ideator & Team Lead",
    context: "Freshworks Internal Hackathon",
    contextColor: "purple",
    description: "An AI-powered log analysis tool that eliminates manual log inspection by automatically summarising large log files into structured, actionable insights — enabling engineers to identify issues in seconds instead of minutes.",
    highlights: [
      "Came up with the original idea — noticed engineers were manually reading logs and built an AI solution to automate it",
      "Led a cross-functional team of 4 junior developers end to end — from ideation to final presentation",
      "Architected the core batching logic to pull logs from an internal tool, chunk and stream them to an AI model, and render structured summaries on the frontend",
      "Built the React.js frontend using GitHub Copilot to deliver fast within the 2-day window",
      "Solved multiple technical challenges around async data handling, batching strategy, and AI response parsing under time pressure",
      "Received appreciation from panel directors and senior leadership — specifically recognised for delivering a production-ready prototype as a team of junior developers within 2 days"
    ],
    tech: ["React.js", "Spring Boot", "AI/LLM Integration", "GitHub Copilot"],
    links: []
  },
  {
    title: "ShopNow",
    role: "Solo Developer",
    context: "FSSA Software Academy",
    contextColor: "emerald",
    description: "A three-tier full stack e-commerce platform connecting local sellers with buyers, featuring location-based product discovery, seller listings, and purchase flows — built with enterprise-grade architecture practices.",
    highlights: [
      "Designed a layered backend architecture following DAO, Service, Validator, and Util layers with clean separation of concerns and SOLID principles",
      "Built REST APIs using Java Servlets and JSP to handle buyer and seller operations with custom exception handling and input validation",
      "Designed MySQL schema with product and image URL relationships, integrated via JDBC",
      "Maintained code quality using SonarCloud static analysis and JaCoCo code coverage reporting",
      "Wrote JUnit 5 test suites across the backend",
      "Built responsive frontend with vanilla JavaScript, HTML5, and CSS3 with LocalStorage for client-side state"
    ],
    tech: ["Java 17", "Servlets", "JSP", "MySQL", "Maven", "JUnit 5", "SonarCloud", "JaCoCo", "HTML5", "CSS3", "JavaScript"],
    links: [
      { label: "Frontend", url: "https://github.com/fssa-batch3/sasikumar.saminathan__web_project" },
      { label: "Core Java", url: "https://github.com/fssa-batch3/sec_c_sec_c_sasikumar.saminathan__corejava_project_2" },
      { label: "Servlet/JSP", url: "https://github.com/fssa-batch3/sec_c_sasikumar.saminathan__servlet_jsp_project" }
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA) - Online Mode",
    institution: "SASTRA University",
    period: "Mar 2025 - Present"
  },
  {
    degree: "Full Stack Development Certification",
    institution: "FSSA - Software Academy",
    period: "Aug 2022 - Dec 2023",
    link: "https://www.freshworks.com/theworks/company-news/freshworks-software-academy-apps/"
  }
];

// --- COMPONENTS ---

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">{title}</h2>
    {subtitle && <div className="h-1 w-20 bg-blue-500 rounded-full"></div>}
  </div>
);

const contextColorMap = {
  blue:    { badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',   border: 'hover:border-blue-500/50',   dot: 'bg-blue-500' },
  purple:  { badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30', border: 'hover:border-purple-500/50', dot: 'bg-purple-500' },
  emerald: { badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', border: 'hover:border-emerald-500/50', dot: 'bg-emerald-500' },
};

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const colors = contextColorMap[project.contextColor] || contextColorMap.blue;

  return (
    <div className={`group bg-slate-900/60 border border-slate-800 ${colors.border} rounded-2xl p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/60`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}></span>
              {project.context}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700">
              {project.role}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors">{project.title}</h3>
        </div>
        {project.links.length > 0 && (
          <div className="flex gap-2 flex-shrink-0">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

      {/* Key Highlights */}
      <div className="mb-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white mb-3 transition-colors"
        >
          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`} />
          Key Highlights
          <span className="ml-1 text-xs font-normal text-slate-500">({project.highlights.length})</span>
        </button>
        <ul className={`space-y-2.5 overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t, i) => (
          <span key={i} className="px-3 py-1 bg-slate-950 text-slate-400 text-xs rounded-md border border-slate-800 font-mono">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [copiedItem, setCopiedItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleCopy = (text, type) => {
    // Using execCommand for better iframe compatibility
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold text-slate-100 tracking-tight cursor-pointer" onClick={() => scrollTo('home')}>
            Sasi<span className="text-blue-500">.dev</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['Home', 'About', 'Experience', 'Skills', 'Projects'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`transition-colors hover:text-blue-400 ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-slate-400'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:block px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all hover:scale-105 active:scale-95"
          >
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Sasi</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl">
            A Full Stack Developer specializing in Java, Spring Boot, React, and robust automation frameworks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <button onClick={() => scrollTo('experience')} className="px-6 py-3 rounded-lg bg-slate-100 hover:bg-white text-slate-900 font-semibold transition-all">
              View My Work
            </button>
            <button onClick={() => scrollTo('contact')} className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold transition-all border border-slate-700">
              Contact Me
            </button>
            <a href="/Sasikumar_Saminathan_Resume.pdf" download className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          <div className="flex items-center gap-6 justify-center md:justify-start pt-8">
            <a href="https://github.com/Sasikumar77" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-100 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sasikumardev/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.hackerrank.com/profile/sasikumar_samin1" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-emerald-500 transition-colors flex items-center gap-1">
              <Code2 className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex-1 relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl opacity-50"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl shadow-blue-900/20 font-mono text-sm">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-2">
              <p><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
              <p className="pl-4">name: <span className="text-emerald-400">"{personalInfo.name}"</span>,</p>
              <p className="pl-4">role: <span className="text-emerald-400">"{personalInfo.role}"</span>,</p>
              <p className="pl-4">company: <span className="text-emerald-400">"Freshworks"</span>,</p>
              <p className="pl-4">skills: [<span className="text-emerald-400">"Java"</span>, <span className="text-emerald-400">"Spring Boot"</span>, <span className="text-emerald-400">"React"</span>],</p>
              <p className="pl-4">issuesResolved: <span className="text-orange-400">100</span>+</p>
              <p>{'}'};</p>
              <p className="mt-4 text-slate-500">// Ready to build scalable systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1">
            <SectionHeading title="About Me" subtitle />
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              {personalInfo.summary}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-100 font-semibold mb-1">Full Stack Architecture</h4>
                  <p className="text-sm text-slate-400">Building scalable APIs & responsive UIs with Java & React.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-100 font-semibold mb-1">Test Automation</h4>
                  <p className="text-sm text-slate-400">Ensuring stability via Playwright & Selenium.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full space-y-6">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" /> Awards & Achievements
              </h3>
              <div className="space-y-6">
                {awards.map((award, i) => (
                  <div key={i} className="group">
                    <h4 className="text-slate-200 font-medium group-hover:text-blue-400 transition-colors">{award.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
        <SectionHeading title="Work Experience" subtitle />
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>

              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>

                <div className="md:w-[45%] mb-2 md:mb-0">
                  <div className={`text-blue-400 font-mono text-sm mb-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    {job.period}
                  </div>
                </div>

                <div className="md:w-[45%] bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                      <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.company}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                        <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Technical Skills" subtitle />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-slate-900 rounded-lg">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm rounded-md border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle />
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex items-center gap-3">
            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-100">Featured in the News</h2>
          </div>
          <a
            href="https://www.freshworks.com/theworks/company-news/freshworks-software-academy-apps/"
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div className="bg-slate-900/80 border-2 border-blue-500/40 hover:border-blue-500 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 backdrop-blur">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="inline-block mb-3 px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs font-semibold text-blue-400">
                    FRESHWORKS OFFICIAL
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors mb-3">
                    Freshworks Software Academy (FSSA) Success Story
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    Featured in the official Freshworks company news article for excellence in the Full Stack Development Certification program. A recognition of commitment to building scalable systems and driving innovation.
                  </p>
                </div>
                <ExternalLink className="w-6 h-6 text-blue-400 flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700">FSSA Program</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700">Full Stack Development</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700">Aug 2022 - Dec 2023</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Education & Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Education Info */}
        <div>
          <SectionHeading title="Education" subtitle />
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 text-slate-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-slate-100 font-medium text-lg">{edu.degree}</h4>
                  <p className="text-blue-400">{edu.institution}</p>
                  <p className="text-sm text-slate-500 mt-1">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <SectionHeading title="Get In Touch" subtitle />
          <p className="text-slate-400 mb-8">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="space-y-4 mb-8">
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="w-full flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors group text-left"
            >
              {copiedItem === 'email' ? <Check className="w-5 h-5 text-emerald-400" /> : <Mail className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />}
              <span className="text-slate-300 group-hover:text-white transition-colors">
                {copiedItem === 'email' ? "Email copied to clipboard!" : personalInfo.email}
              </span>
            </button>
            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="w-full flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors group text-left"
            >
              {copiedItem === 'phone' ? <Check className="w-5 h-5 text-emerald-400" /> : <Phone className="w-5 h-5 text-slate-400 group-hover:text-emerald-400" />}
              <span className="text-slate-300 group-hover:text-white transition-colors">
                {copiedItem === 'phone' ? "Phone number copied!" : personalInfo.phone}
              </span>
            </button>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <MapPin className="w-5 h-5 text-slate-400" />
              <span className="text-slate-300">{personalInfo.location}</span>
            </div>
            <a href="/Sasikumar_Saminathan_Resume.pdf" download className="w-full flex items-center gap-4 p-4 rounded-xl bg-blue-600 hover:bg-blue-700 border border-blue-500 transition-colors group text-left">
              <Download className="w-5 h-5 text-white" />
              <span className="text-white group-hover:text-blue-100 transition-colors font-semibold">Download Resume</span>
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800/50 mt-12 bg-slate-950">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/Sasikumar77" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/sasikumardev/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="https://www.hackerrank.com/profile/sasikumar_samin1" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-emerald-500 transition-colors"><Code2 className="w-5 h-6" /></a>
        </div>
        <p className="text-slate-500 text-sm">
          Designed & Built by {personalInfo.name} &copy; {new Date().getFullYear()}
        </p>
      </footer>

    </div>
  );
}
