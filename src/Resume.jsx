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

  summary: <span>Full Stack Developer with <b>1+ years of experience</b> specializing in <b>MERN stack</b>, <b>Vue.js</b>, and <b>FastAPI</b>. <b>Winner in multiple hackathons</b> including <b>GeeksforGeeks HackPrep 2026 Runner-Up</b>. Proven track record of building scalable <b>real estate</b> and <b>AI-driven</b> web applications with clean code and measurable business value.</span>,

  skills: [
    { icon: <FaCode />,      label: "Languages",       value: "JavaScript, TypeScript, Python, C++" },
    { icon: <FaCode />,      label: "Frontend",        value: "React.js, Next.js, Vue.js, Tailwind CSS, shadcn/ui, Responsive Design" },
    { icon: <FaServer />,    label: "Backend",         value: "Node.js, Express.js, FastAPI, RESTful APIs, WebSocket (Socket.io)" },
    { icon: <FaDatabase />,  label: "Databases",       value: "MongoDB, PostgreSQL, MySQL, Firebase, pgAdmin" },
    { icon: <FaTools />,     label: "Tools & Cloud",   value: "Git, GitHub, Docker, Postman, Bruno, Mockoon, Vercel, Render" },
    { icon: <FaShieldAlt />, label: "Authentication",  value: "Descope, Firebase Auth, JWT, OAuth2.0" },
  ],

  experience: [
    {
      company: "E Sutra Technologies",
      duration: "Jan 2026 – Present",
      role: "Full Stack Developer",
      location: "Remote",
      points: [
        <span>Engineered <b>Hirebrid LMS</b> with MERN stack + PostgreSQL, handling <b>1k+ active users</b> across institutions</span>,
        <span>Extended <b>Descope authentication</b> using Next.js and NocoDB, architecting data migration pipelines for 1k+ legacy users with <b>zero downtime</b></span>,
        <span>Reduced auth latency by <b>25%</b> by optimizing session caching and token validation logic</span>,
        <span>Integrated <b>OpenAPI-documented backend</b> with automated Swagger UI, improving API adoption across frontend teams</span>,
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
        <span>Reusable UI library deployed across <b>3 production environments</b>, cutting development time by 20% for new features</span>,
      ],
    },
  ],

  projects: [
    {
      name: "Zipacres – Real Estate Marketplace",
      link: "https://zipacres.com/",
      stack: "MERN Stack, Firebase Auth, PostgreSQL, REST APIs",
      date: "Jul 2025",
      points: [
        <span>Deployed a production <b>full-stack MERN application</b> for a real estate platform serving over <b>500+ active concurrent users</b></span>,
        <span>Designed a scalable database infrastructure optimized with connection pooling to handle peaks of <b>1,000+ requests/sec</b></span>,
        <span>Architected security protocols integrating <b>Firebase Authentication</b> with role-based access controls for <b>3 unique user tiers</b></span>,
        <span>Implemented <b>real-time property listing updates</b> using WebSocket, reducing stale data issues by <b>70%</b></span>,

      ],
    },
    {
      name: "Triply AI – Travel Planner",
      link: "https://triplyv2.vercel.app/",
      stack: "MERN Stack, MongoDB Aggregation, RESTful APIs",
      date: "Apr 2025",
      points: [
        <span>Launched a <b>full-stack AI travel planning platform</b> generating personalized itineraries based on budget, preferences, and trip duration</span>,
        <span>Designed optimized RESTful APIs and <b>MongoDB aggregation pipelines</b> for dynamic trip filtering and recommendation generation</span>,
        <span>Boosted complex query execution performance by <b>~50%</b> through aggregation optimization and indexed database operations</span>,
        <span>Integrated <b>Google Maps API</b> for interactive route visualization and location-based attraction recommendations</span>,

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
        <span><b>Coursework:</b> Data Structures, Algorithms, Web Development, Database Management, Operating Systems</span>,
        <span><b>Activities:</b> Technical Club Member, Competitive Programming, Hackathon Participant</span>,
      ],
    },
  ],

  achievements: [
    <span><b>Winner</b> in multiple hackathons — <b>GeeksforGeeks HackPrep 2026 Runner-Up</b></span>,
    <span>Built and deployed <b>2 production-grade applications</b> with 500+ active users serving real-world clients</span>,
    <span>Consistently contributed to <b>open-source projects</b> and technical problem-solving competitions</span>,
    <span>Solved <b>200+ DSA problems</b> on LeetCode and GeeksforGeeks; strong foundation in algorithms and data structures</span>,
    <span>Recognized for <b>fastest feature delivery</b> at E Sutra Technologies within first month of joining</span>,
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
