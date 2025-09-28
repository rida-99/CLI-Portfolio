export default function Projects({}) {
  const projects = [
    {
      name: "Smart Inventory Management System",
      tech: "Vue.js, Node.js, Express, MongoDB, Docker, Chart.js",
      description:
        "A web-based inventory tracking system for small retailers, featuring dynamic dashboards, stock alerts, and barcode scanning support. Admin panel allows for real-time updates, user management, and product analytics.",
      period: "Jan 2024 – Apr 2024",
    },
    {
      name: "Remote Patient Monitoring App",
      tech: "React Native, Firebase, Redux, Bluetooth API, Google Fit API",
      description:
        "A cross-platform mobile app enabling healthcare providers to monitor patients’ vital signs remotely. Integrated with wearable devices via Bluetooth for real-time heart rate and oxygen level tracking. Data is synced with Firebase for secure cloud storage.",
      period: "Aug 2023 – Dec 2023",
    },
    {
      name: "Crypto Portfolio Tracker",
      tech: "Next.js, TypeScript, Tailwind CSS, CoinGecko API, Supabase",
      description:
        "A lightweight crypto portfolio tracker that allows users to manage assets, view real-time price changes, and receive alerts for market movements. Built with serverless architecture and JWT-based user authentication.",
      period: "May 2023 – Jul 2023",
    },
  ];
  return (
    <div style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
      <div style={{ marginBottom: "8px", color: "#58a6ff", fontWeight: 700 }}>
        PORTFOLIO PROJECTS
      </div>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "16px" }}>
          <div>
            <span style={{ color: "#58a6ff", fontWeight: 600 }}>
              {index + 1}. {project.name}
            </span>
          </div>
          <div>
            <span style={{ color: "#8b949e" }}>Tech Stack:</span>{" "}
            <span style={{ color: "#c9d1d9" }}>{project.tech}</span>
          </div>
          <div>
            <span style={{ color: "#8b949e" }}>Description:</span>{" "}
            <span style={{ color: "#c9d1d9" }}>{project.description}</span>
          </div>
          {project.link && (
            <div>
              <span style={{ color: "#8b949e" }}>Link:</span>{" "}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3fb950", textDecoration: "none" }}
              >
                {project.link}
              </a>
            </div>
          )}
        </div>
      ))}
      <br />
    </div>
  );
}
