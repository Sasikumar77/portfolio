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
  Check
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

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [copiedItem, setCopiedItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills'];
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
            {['Home', 'About', 'Experience', 'Skills'].map((item) => (
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
          </div>
          <div className="flex items-center gap-6 justify-center md:justify-start pt-8">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-100 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://hackerrank.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-emerald-500 transition-colors flex items-center gap-1">
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
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-blue-400">{edu.institution}</p>
                    {edu.link && (
                      <a 
                        href={edu.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-colors"
                        title="Read the Freshworks Article"
                      >
                        <ExternalLink className="w-3 h-3" /> Article
                      </a>
                    )}
                  </div>
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
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800/50 mt-12 bg-slate-950">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="https://hackerrank.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-emerald-500 transition-colors"><Code2 className="w-5 h-6" /></a>
        </div>
        <p className="text-slate-500 text-sm">
          Designed & Built by {personalInfo.name} &copy; {new Date().getFullYear()}
        </p>
      </footer>

    </div>
  );
}
