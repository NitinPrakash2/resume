import './Resume.css'
import {
  FaPhone, FaEnvelope, FaLinkedin, FaGithub,
  FaMapMarkerAlt, FaCode, FaServer, FaDatabase,
  FaTools, FaBrain, FaTrophy
} from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { MdWork, MdSchool, MdPerson } from 'react-icons/md'
import { BsKanban } from 'react-icons/bs'

const data = {
  name: "Nitin Prakash",
  contact: [
    { icon: <FaMapMarkerAlt />, label: "Noida, India",              href: null },
    { icon: <FaPhone />,        label: "+91-9304701381",            href: "tel:+919304701381" },
    { icon: <FaEnvelope />,     label: "nitinprakash268@gmail.com", href: "mailto:nitinprakash268@gmail.com" },
    { icon: <FaGithub />,       label: "Nitin Prakash",             href: "https://github.com/NitinPrakash2" },
    { icon: <FaLinkedin />,     label: "Nitin Prakash",             href: "https://www.linkedin.com/in/nitin-prakash-3b8a01373/" },
  ],

  summary: <span>Results-driven <b>Full Stack Web Developer</b> with experience in <b>MERN stack</b>, <b>Vue.js</b>, and <b>FastAPI</b>. Proven track record of building production-ready applications with <b>REST APIs</b>, <b>JWT authentication</b>, and <b>AI integration</b>. <b>1st Position Winner</b> in <b>Internal SIH Hackathon 2026</b> and <b>GeeksforGeeks HackPrep 2026 Runner-Up</b>. Adept at working in <b>agile, remote environments</b> with strong problem-solving skills.</span>,

  skills: [
    { icon: <FaCode />,     label: "Languages",        value: "JavaScript, Python, C, C++, HTML5, CSS3" },
    { icon: <FaCode />,     label: "Frontend",         value: "React.js, Vue.js, Tailwind CSS, Responsive Design" },
    { icon: <FaServer />,   label: "Backend",          value: "Node.js, Express.js, FastAPI, WebSocket (Socket.io), REST APIs" },
    { icon: <FaDatabase />, label: "Databases",        value: "MongoDB, MySQL, PostgreSQL" },
    { icon: <FaTools />,    label: "Tools & Cloud",    value: "Git, GitHub, Vercel, Render, Postman, Notion" },
    { icon: <FaBrain />,    label: "Core Competencies", value: "Generative AI (Gemini), Web Security, JWT RBAC, Redux Toolkit" },
  ],

  experience: [
    {
      company: "MyNadezhda Consultancy Services Pvt. Ltd.",
      duration: "Feb. 2026 – Aug. 2026",
      role: "Full Stack Technology Developer (Intern)",
      location: "Remote (Work from Home)",
      points: [
        <span>Developed and maintained <b>full-stack web applications</b> using <b>Vue.js</b> (frontend) and <b>FastAPI</b> (backend) under professional supervision</span>,
        <span>Built and consumed <b>REST APIs</b> with FastAPI; handled <b>PostgreSQL</b> database design and query optimization</span>,
        <span>Worked with <b>Nuxt.js</b> and <b>Postman</b> for API testing and frontend development workflows</span>,
        <span>Participated in <b>code reviews, testing, and debugging</b> following industry coding standards and documentation practices</span>,
        <span>Collaborated with team members in an <b>agile remote environment</b>, reporting progress regularly and following project guidelines</span>,
      ],
    },
  ],

  projects: [
    {
      name: "AI-SAKSHAM – AI-Assisted Security Assessment Platform",
      link: "https://ai-saksham-mocha.vercel.app/",
      stack: "React, Node.js, Express.js, MongoDB, Socket.IO, Gemini AI, Tailwind CSS",
      points: [
        <span>Built <b>full-stack MERN security platform</b> automating end-to-end assessment workflows: Target → Attack Surface Discovery → Scanning → Evidence → AI Analysis → CVSS/Risk → Remediation → PDF Report</span>,
        <span>Developed <b>custom scanner engine</b> detecting 10+ vulnerability classes (Broken Auth, XSS, SQLi, IDOR, headers, CORS, secrets) with CVSS v3.1 scoring and 0–100 Security Health Score</span>,
        <span>Integrated <b>Google Gemini AI</b> for false-positive filtering, plain-English impact explanation, fix prioritization, and remediation steps; added context-aware AI chatbot assistant</span>,
        <span>Engineered <b>real-time assessment pipeline</b> with Socket.IO live progress (8 stages), JWT RBAC auth, bulk API tester with latency analytics, and PDFKit report generation</span>,
      ],
    },
    {
      name: "Resume AI Checker",
      link: "https://resume-ai-checker-two.vercel.app/",
      stack: "Node.js, Express, React, Neon Postgres, REST APIs",
      points: [
        <span>Built a <b>full-stack AI-powered resume analyzer</b> with ATS scoring, job matching, and interview prep</span>,
        <span>Integrated multiple <b>AI providers (Gemini, Groq, OpenRouter)</b> with user-configurable API keys</span>,
        <span>Implemented <b>JWT authentication</b>, PostgreSQL (Neon) database with Sequelize ORM</span>,
        <span>Used <b>Adzuna API</b> for real-time job search and matching</span>,
      ],
    },
  ],

  education: [
    {
      school: "Institute of Management Studies (IMS), Noida",
      duration: "Expected Graduation: 2027",
      degree: "Bachelor of Computer Applications (BCA)",
      location: "CGPA: 7.10 / 10.0",
      points: [
        <span><b>Coursework:</b> Data Structures, Algorithms, Database Management, Operating Systems, Web Technologies</span>,
        <span><b>Activities:</b> Technical Club Member, Competitive Programming, Hackathon Participant</span>,
      ],
    },
  ],

  achievements: [
    <span>Secured <b>1st position</b> in <b>Internal SIH Hackathon 2026</b></span>,
    <span>Secured <b>2nd position</b> in a hackathon organized by <b>GeeksforGeeks</b></span>,
    <span><b>Runner-up</b> in multiple hackathons for developing innovative and problem-solving based projects</span>,
  ],
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
          <div className="tagline">Full Stack Developer</div>
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
