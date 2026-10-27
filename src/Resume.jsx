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

  summary: <span>Results-driven <b>Full Stack Developer</b> with a strong core in the <b>MERN stack</b>, alongside production experience in <b>TypeScript</b>, <b>Next.js</b>, and <b>Sanity.io Headless CMS</b>. Proven track record of building scalable web applications with <b>REST APIs</b>, <b>JWT authentication</b>, and enterprise platforms. <b>1st Position Winner</b> in <b>Internal SIH Hackathon 2026</b> and <b>GeeksforGeeks Runner-Up</b>.</span>,

  skills: [
    { icon: <FaCode />,     label: "Languages",        value: "JavaScript (ES6+), TypeScript, Python, C, C++, HTML5, CSS3" },
    { icon: <FaCode />,     label: "Frontend",         value: "React.js, Next.js, Vue.js, Tailwind CSS, Redux Toolkit, Responsive Design" },
    { icon: <FaServer />,   label: "Backend",          value: "Node.js, Express.js, FastAPI, REST APIs, WebSocket (Socket.io)" },
    { icon: <FaDatabase />, label: "Databases & CMS",  value: "MongoDB, Firebase (Firestore), PostgreSQL, MySQL, Sanity.io (CMS)" },
    { icon: <FaTools />,    label: "Tools & Cloud",    value: "Git, GitHub, Firebase, Vercel, Render, Postman, Sanity Studio" },
    { icon: <FaBrain />,    label: "Core Competencies", value: "MERN Stack Architecture, Generative AI (Gemini), Web Security, JWT RBAC, Full-Stack Design" },
  ],

  experience: [
    {
      company: "Indo-Japan Chamber of Commerce (IJCC)",
      duration: "Sept. 2026 – Present",
      role: "Web Developer (Intern)",
      location: "Hybrid (Noida, India)",
      points: [
        <span>Designed and developed the official bilateral portal (<b>ijcc.in</b>) using <b>Next.js</b>, <b>TypeScript</b>, and <b>Tailwind CSS</b> for India-Japan business ties</span>,
        <span>Architected dynamic <b>Sanity.io Headless CMS</b> for real-time updates of events, resources, and directories with zero redeployments</span>,
        <span>Implemented <b>Firebase Auth</b> and structured <b>Cloud Firestore</b> database for member gating, profile storage, and session access</span>,
        <span>Optimized Core Web Vitals, asset caching, and SEO structure, achieving <b>95+ performance scores</b> and sub-second page transitions</span>,
      ],
    },
    {
      company: "MyNadezhda Consultancy Services Pvt. Ltd.",
      duration: "Feb. 2026 – Aug. 2026",
      role: "Full Stack Technology Developer (Intern)",
      location: "Remote (Work from Home)",
      points: [
        <span>Developed full-stack web applications using <b>Vue.js</b> (frontend) and <b>FastAPI</b> (backend) under professional supervision</span>,
        <span>Built and consumed <b>REST APIs</b> with FastAPI; handled <b>PostgreSQL</b> database design and query optimization</span>,
        <span>Conducted comprehensive API testing using <b>Postman</b> and <b>Nuxt.js</b> frontend integration workflows</span>,
        <span>Engineered responsive UI components and handled state management for web interfaces</span>,
        <span>Collaborated in an <b>agile remote environment</b>, participating in code reviews, bug fixes, and documentation</span>,
      ],
    },
  ],

  projects: [
    {
      name: "IJCC – Official Chamber of Commerce Web Portal & Headless CMS",
      link: "https://www.ijcc.in/",
      stack: "Next.js, TypeScript, Sanity.io (Headless CMS), Firebase (Auth & Firestore), Tailwind CSS",
      points: [
        <span>Engineered the production portal for the <b>Indo-Japan Chamber of Commerce</b>, driving bilateral trade, skilling, and cultural alliances</span>,
        <span>Built schema-driven <b>Sanity.io Headless CMS</b> with GROQ queries and live preview to manage events, publications, and records dynamically</span>,
        <span>Integrated <b>Firebase Auth & Firestore</b> for member access gating; built responsive UI with <b>Tailwind CSS</b> and strict <b>TypeScript</b></span>,
        <span>Engineered interactive event calendar modules, bilingual resource directories, and Outlook Webmail connectivity for delegates</span>,
      ],
    },
    {
      name: "AI-SAKSHAM – AI-Assisted Security Assessment Platform",
      link: "https://ai-saksham-mocha.vercel.app/",
      stack: "React, Node.js, Express.js, MongoDB, Socket.IO, Gemini AI, Tailwind CSS",
      points: [
        <span>Built <b>full-stack MERN security platform</b> automating assessment workflows: Target → Scan → AI Analysis → CVSS/Risk → PDF Report</span>,
        <span>Developed custom scanner detecting 10+ vulnerability classes (Auth, XSS, SQLi, IDOR) with CVSS v3.1 scoring and 0–100 Health Score</span>,
        <span>Integrated <b>Google Gemini AI</b> for false-positive filtering, remediation insights, and context-aware chat assistant</span>,
        <span>Engineered real-time assessment pipeline with <b>Socket.IO</b> live progress (8 stages), JWT RBAC auth, and PDFKit report generation</span>,
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
        <span><b>Relevant Coursework:</b> Data Structures, Algorithms, Database Management, Operating Systems, Web Technologies</span>,
        <span><b>Extracurriculars:</b> Active Technical Club Member, Competitive Programming, Hackathon Team Lead</span>,
      ],
    },
  ],

  achievements: [
    <span>Secured <b>1st position</b> in <b>Internal Smart India Hackathon (SIH) 2026</b></span>,
    <span>Secured <b>2nd position</b> in <b>GeeksforGeeks HackPrep 2026</b></span>,
    <span><b>Runner-Up</b> in multiple hackathons for developing innovative, problem-solving web applications</span>,
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
