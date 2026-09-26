import './Resume.css'
import { QRCodeSVG } from 'qrcode.react'
import {
  FaPhone, FaEnvelope, FaLinkedin, FaGithub,
  FaMapMarkerAlt, FaCode, FaServer, FaDatabase,
  FaTools, FaBrain, FaTrophy, FaShieldAlt
} from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { MdWork, MdSchool, MdPerson } from 'react-icons/md'
import { BsKanban } from 'react-icons/bs'

const data = {
  name: "Himanshu Jha",
  tagline: "Full Stack Developer",
  contact: [
    { icon: <FaMapMarkerAlt />, label: "Delhi, India",               href: null },
    { icon: <FaPhone />,        label: "+91-9821305674",             href: "tel:+919821305674" },
    { icon: <FaEnvelope />,     label: "jhahimanshu930@gmail.com",   href: "mailto:jhahimanshu930@gmail.com" },
    { icon: <FaGithub />,       label: "Himanshu Jha",               href: "https://github.com/Himanshujha25" },
    { icon: <FaLinkedin />,     label: "Himanshu Jha",               href: "https://www.linkedin.com/in/himanshujha25" },
  ],

  summary: <span>Full Stack Developer specializing in <b>MERN stack</b>, <b>Vue.js</b>, and <b>FastAPI</b>. Currently building scalable HRMS & job management systems at <b>AurInHubb Technologies</b>. Proven track record of architecting production-ready web applications, automated security platforms, and AI integrations. <b>1st Position Winner</b> in <b>Internal SIH Hackathon 2026</b> and <b>GeeksforGeeks HackPrep 2026 Runner-Up</b>.</span>,

  skills: [
    { icon: <FaCode />,      label: "Languages",       value: "JavaScript, TypeScript, Python, C++" },
    { icon: <FaCode />,      label: "Frontend",        value: "React.js, Next.js, Vue.js, Tailwind CSS, shadcn/ui, Responsive Design" },
    { icon: <FaServer />,    label: "Backend",         value: "Node.js, Express.js, FastAPI, RESTful APIs, WebSocket (Socket.io)" },
    { icon: <FaDatabase />,  label: "Databases",       value: "MongoDB, PostgreSQL, MySQL, Firebase, pgAdmin" },
    { icon: <FaTools />,     label: "Tools & Cloud",   value: "Git, GitHub, Docker, Postman, Bruno, Mockoon, Vercel, Render" },
    { icon: <FaShieldAlt />, label: "Authentication & Security", value: "JWT, OAuth2.0, RBAC, Descope, Firebase Auth, OWASP" },
  ],

  experience: [
    {
      company: "AurInHubb Technologies",
      duration: "Jun 2026 – Present",
      role: "MERN Stack Developer",
      location: "Remote",
      points: [
        <span>Architected and engineered <b>TopMatch</b>, an enterprise full-stack <b>HRMS and Job Management Platform</b> using <b>MERN stack</b></span>,
        <span>Built modular RESTful microservices for <b>applicant tracking (ATS)</b>, resume parsing, job distribution, and candidate interview workflows</span>,
        <span>Implemented real-time status updates via <b>Socket.IO</b> and designed intuitive recruiter dashboards with <b>React & Tailwind CSS</b></span>,
      ],
    },
    {
      company: "E Sutra Technologies",
      duration: "Jan 2026 – Jun 2026",
      role: "Full Stack Developer",
      location: "Remote",
      points: [
        <span>Engineered <b>Hirebrid LMS</b> with MERN stack + PostgreSQL, handling <b>1k+ active users</b> across institutions</span>,
        <span>Extended <b>Descope authentication</b> using Next.js and NocoDB, architecting data migration pipelines for 1k+ legacy users with <b>zero downtime</b></span>,
        <span>Reduced auth latency by <b>25%</b> by optimizing session caching and token validation logic</span>,
      ],
    },
    {
      company: "MN Pvt. Ltd. (1MN.io)",
      duration: "Aug 2025 – Dec 2025",
      role: "Full Stack Developer",
      location: "Remote",
      points: [
        <span>Created enterprise <b>Vue 3 + TypeScript</b> components, achieving <b>40% faster load times</b> through lazy loading and code splitting</span>,
        <span>Formulated modular <b>FastAPI routes</b> with auto-generated Swagger docs; improved API response time by <b>35%</b> via query optimization</span>,
        <span>Architected scalable backend services using <b>FastAPI & Pydantic</b> with async database queries and automated schema validation</span>,
      ],
    },
  ],

  projects: [
    {
      name: "AI-SAKSHAM – AI-Assisted Security Assessment Platform",
      link: "https://ai-saksham-mocha.vercel.app/",
      stack: "React 19, Node.js, Express, MongoDB, Socket.IO, Gemini AI, Tailwind CSS",
      date: "2026",
      points: [
        <span>Built <b>full-stack MERN security platform</b> automating end-to-end assessment workflows: Target → Attack Surface Discovery → Scanning → Evidence → AI Analysis → CVSS/Risk → Remediation → PDF Report</span>,
        <span>Developed <b>custom scanner engine</b> detecting 10+ vulnerability classes (Broken Auth, XSS, SQLi, IDOR, headers, CORS, secrets) with CVSS v3.1 scoring and 0–100 Security Health Score</span>,
        <span>Integrated <b>Google Gemini AI</b> for false-positive filtering, plain-English impact explanation, fix prioritization, and remediation steps; added context-aware AI chatbot assistant</span>,
        <span>Engineered <b>real-time assessment pipeline</b> with Socket.IO live progress (8 stages), JWT RBAC auth, bulk API tester with latency analytics, and PDFKit report generation</span>,
      ],
    },
  ],

  education: [
    {
      school: "Institute of Management Studies (IMS), Noida",
      duration: "Expected Graduation: 2027",
      degree: "Bachelor of Computer Applications (BCA)",
      location: "CGPA: 7.10 / 10.0",
    },
  ],

  achievements: [
    <span><b>1st Position Winner</b> — <b>Internal SIH Hackathon 2026</b></span>,
    <span><b>Runner-Up</b> — <b>GeeksforGeeks HackPrep 2026</b></span>,
    <span>Built and deployed <b>production-grade applications</b> serving real-world users and enterprise workflows</span>,
    <span><b>Winner</b> in <b>Tech Quiz (2026)</b> at <b>IMS Unison University</b> Dehradun</span>,
    <span>Solved <b>200+ DSA problems</b> on LeetCode and GeeksforGeeks; strong foundation in algorithms and data structures</span>,
  ],



  portfolio: "https://himanshu-portfolio-v2.vercel.app/",
}

function Section({ title, icon, children }) {
  return (
    <div className="section">
      <div className="section-title">{icon && <span className="section-icon">{icon}</span>}{title}</div>
      <hr className="section-line" />
      {children}
    </div>
  )
}

export default function Resume() {

  const handleDownload = () => window.print()

  return (
    <>
      <button className="download-btn" onClick={handleDownload}>⬇ Download PDF</button>
      <div className="resume">

        {/* Header */}
        <div className="heading">
          <h1>{data.name}</h1>
          <div className="tagline">{data.tagline}</div>
          <div className="heading-main">
            <div className="contact">
              {data.contact.map((item, i) => (
                <span key={i} className="contact-item">
                  {i !== 0 && <span className="sep">|</span>}
                  <span className="contact-icon">{item.icon}</span>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                    : <span>{item.label}</span>}
                </span>
              ))}
              <span className="contact-item">
                <span className="sep">|</span>
                <span className="qr-inline">
                  <QRCodeSVG value={data.portfolio} size={52} fgColor="#1a1a2e" />
                  <span className="qr-label">Portfolio</span>
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <Section title="PROFESSIONAL SUMMARY" icon={<MdPerson />}>
          <p className="summary">{data.summary}</p>
        </Section>

        {/* Skills */}
        <Section title="TECHNICAL SKILLS" icon={<FaTools />}>
          <div className="skills-grid">
            {data.skills.map((s) => (
              <div key={s.label} className="skill-row">
                <span className="skill-icon">{s.icon}</span>
                <span className="skill-label">{s.label}:</span>
                <span className="skill-value">{s.value}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section title="EXPERIENCE" icon={<MdWork />}>
          {data.experience.map((exp) => (
            <div key={exp.company} className="entry">
              <div className="entry-row">
                <span className="entry-main">{exp.company}</span>
                <span className="entry-date">{exp.duration}</span>
              </div>
              <div className="entry-row">
                <span className="entry-sub">{exp.role}</span>
                <span className="entry-date">{exp.location}</span>
              </div>
              <ul>
                {exp.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </Section>

        {/* Projects */}
        <Section title="PROJECTS" icon={<BsKanban />}>
          {data.projects.map((proj) => (
            <div key={proj.name} className="entry">
              <div className="entry-row">
                <span className="entry-main">
                  {proj.name}
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="proj-link">
                      <HiOutlineExternalLink />
                    </a>
                  )}
                </span>
                <span className="entry-date">{proj.date}</span>
              </div>
              <div className="proj-stack">Tech Stack: {proj.stack}</div>
              <ul>
                {proj.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </Section>

        {/* Education */}
        <Section title="EDUCATION" icon={<MdSchool />}>
          {data.education.map((edu) => (
            <div key={edu.school} className="entry">
              <div className="entry-row">
                <span className="entry-main">{edu.degree}</span>
                <span className="entry-date">{edu.duration}</span>
              </div>
              <div className="entry-row">
                <span className="entry-sub">{edu.school}</span>
                <span className="entry-date">{edu.location}</span>
              </div>
              {edu.points && <ul>{edu.points.map((p, i) => <li key={i}>{p}</li>)}</ul>}
            </div>
          ))}
        </Section>

        {/* Achievements */}
        <Section title="ACHIEVEMENTS" icon={<FaTrophy />}>
          <ul>
            {data.achievements.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </Section>


      </div>
    </>
  )
}
