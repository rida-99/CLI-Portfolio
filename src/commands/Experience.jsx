export default function Experience({}) {
  const experience = [
    {
      position: "Cloud Infrastructure Engineer",
      company: "Thales Digital Factory – Toulouse",
      period: "Feb 2024 – Present",
      responsibilities: [
        "Designed and deployed cloud infrastructure using Terraform on AWS and Azure",
        "Implemented CI/CD pipelines with GitLab CI for microservices and containerized apps",
        "Monitored system health using Prometheus and Grafana, ensuring 99.9% uptime SLA",
        "Managed Kubernetes clusters for scalable deployment of internal tools",
        "Worked with DevSecOps team to implement automated compliance checks",
        "Wrote internal documentation and conducted onboarding sessions for new engineers",
      ],
    },
    {
      position: "IT Support Engineer",
      company: "Dassault Systèmes – Vélizy-Villacoublay",
      period: "Jan 2023 – Jan 2024",
      responsibilities: [
        "Provided L1 and L2 support for over 300 employees across multiple departments",
        "Troubleshot Windows, macOS, and Linux systems, as well as remote access tools",
        "Managed Active Directory users and group policies",
        "Configured and maintained internal ticketing system using ServiceNow",
        "Assisted in rolling out new hardware and security patches across the organization",
        "Documented recurring issues and created a knowledge base for support efficiency",
      ],
    },
    {
      position: "Junior Backend Developer",
      company: "NeoTech Solutions – Lyon",
      period: "May 2022 – Dec 2022",
      responsibilities: [
        "Developed RESTful APIs using Django and PostgreSQL for internal client portals",
        "Integrated third-party services (Stripe, SendGrid) for billing and notifications",
        "Participated in Agile sprints and daily stand-ups using Jira and Confluence",
        "Wrote unit and integration tests using PyTest to ensure code quality",
        "Collaborated with frontend developers to design consistent API contracts",
        "Maintained GitHub repositories and resolved merge conflicts during feature deployments",
      ],
    },
  ];

  return (
    <div style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
      <div style={{ marginBottom: "8px", color: "#58a6ff", fontWeight: 700 }}>
        WORK EXPERIENCE
      </div>
      {experience.map((exp, index) => (
        <div key={index} style={{ marginBottom: "16px" }}>
          <div>
            <span style={{ color: "#58a6ff", fontWeight: 600 }}>
              {index + 1}. {exp.position} @ {exp.company}
            </span>
          </div>
          <div>
            <span style={{ color: "#8b949e" }}>Period:</span>{" "}
            <span style={{ color: "#c9d1d9" }}>{exp.period}</span>
          </div>
          <div>
            <span style={{ color: "#8b949e" }}>Responsibilities:</span>
            <ul
              style={{
                marginTop: "4px",
                marginBottom: "0",
                paddingLeft: "20px",
                color: "#c9d1d9",
              }}
            >
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
}
