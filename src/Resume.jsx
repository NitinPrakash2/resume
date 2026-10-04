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
  name: "Priyanshu Sony",
  tagline: "Developer",
  contact: [
    { icon: <FaMapMarkerAlt />, label: "Noida, India", href: null },
    { icon: <FaPhone />, label: "+91-8294101360", href: "tel:+918294101360" },
    { icon: <FaEnvelope />, label: "priyanshu.sony22@gmail.com", href: "mailto:priyanshu.sony22@gmail.com" },
    { icon: <FaLinkedin />, label: "linkedin.com/in/priyanshusony22", href: "https://www.linkedin.com/in/priyanshusony22" },
  ],

  summary: <span>Results-driven <b>Developer</b> with <b>5.4 years</b> of experience in designing, developing, and scaling enterprise web applications using <b>Angular (10–19)</b>, <b>TypeScript</b>, and <b>Agentic AI development</b>. Currently driving microfrontends, UI modernization, and AI-assisted enterprise workflows for <b>Caterpillar</b>, following impactful tenure at <b>TCS</b>. Strong expertise in building high-performance frontend architectures, reactive state management, and delivering scalable digital solutions.</span>,

  skills: [
    { icon: <FaCode />, label: "Languages", value: "JavaScript (ES6+), TypeScript, HTML5, CSS3" },
    { icon: <FaCode />, label: "Frontend", value: "Angular (10–19), Angular Signals, RxJS, Microfrontends, React.js, PrimeNG, Bootstrap, Responsive Design" },
    { icon: <FaBrain />, label: "AI & Architecture", value: "Agentic AI Development, Component-Based Architecture, Lazy Loading, Multitenancy, RBAC" },
    { icon: <FaDatabase />, label: "Databases & APIs", value: "RESTful APIs, MongoDB, MySQL" },
    { icon: <FaTools />, label: "Cloud & DevOps", value: "Google Cloud Platform (GCP), Azure DevOps (ADO), CI/CD Pipelines, Git, GitHub, Nginx, Vercel" },
    { icon: <FaShieldAlt />, label: "Testing & Tools", value: "Jest, Jasmine/Karma, Bruno, Postman, JIRA, Jile, Agile/Scrum" },
  ],

  experience: [
    {
      company: "Deloitte Touche Tohmatsu India LLP (DTTL)",
      duration: "Oct 2024 – Present",
      role: "Angular Developer",
      location: "Noida, India",
      points: [
        <span>Led <b>Angular 19</b> enterprise frontend development utilizing <b>microfrontends</b> and lazy loading architecture, reducing initial bundle load times</span>,
        <span>Architected fine-grained reactive state management leveraging <b>Angular Signals</b> and <b>RxJS</b>, improving application rendering speed by <b>35%</b> across telemetry dashboards</span>,
        <span>Integrated high-throughput <b>RESTful APIs</b> and authored comprehensive unit testing using <b>Jest</b> to ensure superior code quality and stability</span>,
        <span>Actively contributed to <b>system architecture planning</b>, cross-functional agile sprints, and technical demos for key stakeholders</span>,
      ],
    },
    {
      company: "Tata Consultancy Services (TCS)",
      duration: "May 2021 – Sep 2024",
      role: "Front-end Developer",
      location: "Noida, India",
      points: [
        <span>Engineered dynamic, responsive enterprise web applications using <b>Angular (10–14)</b> and <b>TypeScript</b> for telecom clients including <b>BSNL Mobile</b> and <b>KPN N.V. (Netherlands)</b></span>,
        <span>Architected modular component hierarchies, reusable UI libraries, and optimized <b>RESTful API integrations</b> across distributed microservices</span>,
        <span>Implemented reactive state management and performance tuning, reducing initial page load times by <b>30%</b> and enhancing overall responsiveness</span>,
        <span>Collaborated with cross-functional global teams in Agile sprints, and was awarded <b>Employee of the Month twice</b> for delivery excellence</span>,
      ],
    },
  ],

  projects: [
    {
      name: "VisionLink (Caterpillar) – Personnel & Fleet Telematics Management",
      link: null,
      stack: "Angular 19, TypeScript, RxJS, Agentic AI, REST APIs, HTML5/CSS3",
      date: "Jan 2026 – Present",
      points: [
        <span>Architected the <b>Personnel Management module</b> on Caterpillar's <b>VisionLink</b> platform, enabling centralized identity, role assignment, and tracking for both <b>machine operators and haul truck drivers</b></span>,
        <span>Engineered responsive driver/operator management interfaces to manage equipment pairing, active shift tracking, credential verification, and safety compliance across mixed-OEM fleets</span>,
        <span>Integrated <b>Agentic AI assistants</b> and telematics data streams to automate driver/operator dispatch recommendations, analyze shift telemetry patterns, and generate predictive coaching insights</span>,
        <span>Utilized <b>Angular 19, TypeScript, and RxJS</b> to build real-time personnel dispatch dashboards with instant search, filtering, and role-based access control (RBAC), delivering sub-second state synchronization</span>,
      ],
    },
    {
      name: "VLP (Caterpillar) – Machinery Monitoring Platform",
      link: null,
      stack: "Angular 17 (Signals), TypeScript, RxJS, Agentic AI, REST APIs",
      date: "Oct 2024 – Dec 2025",
      points: [
        <span>Engineered the <b>Operator Management System (OMS)</b> for Caterpillar's <b>VisionLink Productivity</b> platform, tracking equipment assignments, fuel usage, and operator behavior in real-time</span>,
        <span>Developed intuitive operator profiling and <b>Agentic AI-driven coaching modules</b> to analyze machine handling habits, identify anomaly patterns, and drive jobsite <b>safety and accountability</b></span>,
        <span>Architected fine-grained reactive state management using <b>Angular Signals (signal, computed, effect)</b> and <b>RxJS</b>, delivering sub-second updates for operator scoring, machine telemetry, and KPI reporting</span>,
      ],
    },
    {
      name: "CNOPS (BSNL Mobile) – Telecommunication Web Platform",
      pageBreakBefore: true,
      link: null,
      stack: "Angular, TypeScript, JavaScript, HTML5/CSS3, REST APIs, CI/CD",
      date: "Dec 2022 – Sep 2024",
      points: [
        <span>Built dynamic, adaptable telecom web applications and led the conversion of complex design wireframes into fully responsive, user-friendly interfaces using <b>Angular</b> and <b>TypeScript</b></span>,
        <span>Engineered high-performance UI components and optimized web application architecture, achieving notable improvements in <b>loading times</b> and overall runtime responsiveness</span>,
        <span>Integrated robust <b>RESTful APIs</b> to facilitate seamless, secure communication between front-end interfaces and back-end telecommunication microservices</span>,
        <span>Proficiently utilized <b>Git version control</b> for effective cross-team collaboration, streamlined code versioning, and branch management</span>,
        <span>Embraced modern Agile paradigms including continuous integration, test-driven development (TDD), and <b>CI/CD pipelines</b> to accelerate deployment processes</span>,
      ],
    },
    {
      name: "CNOPS (KPN N.V.) – Cognitive Network Operations",
      link: null,
      stack: "Angular, TypeScript, HTML5/CSS3, Heuristic Analytics, REST APIs",
      date: "Jul 2021 – Nov 2022",
      points: [
        <span>Engineered front-end interfaces for <b>KPN Netherlands' CNOPS platform</b>, leveraging AI/ML efficiency to deliver customer-centric network experience analytics in near real-time through NOCs</span>,
        <span>Architected complex monitoring dashboards delivering a <b>single view of network</b>, automated fault ticketing, heuristic data analysis, and predictive performance metrics</span>,
        <span>Developed and maintained multiple high-traffic client portals using <b>Angular, TypeScript, HTML5, and CSS3</b>, ensuring optimal responsiveness across diverse devices</span>,
        <span>Implemented <b>multitenancy architecture</b> and exhaustive component libraries, accelerating feature delivery and enabling stakeholders to make reliable, data-driven decisions</span>,
      ],
    },
  ],

  education: [
    {
      school: "Galgotias University, Greater Noida (Uttar Pradesh)",
      duration: "2017 – 2021",
      degree: "B.Tech – Computer Science & Engineering",
      location: "CGPA: 8.26",
    },
  ],

  achievements: [
    <span>Received <b>Client Appreciation</b> at <b>Deloitte</b> from Caterpillar leadership for exceptional delivery, proactive ownership, and high-quality frontend execution on the VisionLink platform</span>,
    <span>Acquired <b>Associate Cloud Engineer (GCP)</b> certification from Google</span>,
    <span>Awarded <b>Employee of the Month twice</b> at TCS for outstanding technical delivery, dedication, and problem-solving excellence</span>,
    <span>Participated in multiple hackathons conducted by TCS's Fresco Play; strong command over modern web architecture and computer science fundamentals</span>,
  ],

  portfolio: "https://www.linkedin.com/in/priyanshusony22",
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
                  <span className="qr-label">LinkedIn</span>
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
            <div key={proj.name} className={`entry ${proj.pageBreakBefore ? 'print-page-break' : ''}`}>
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
