export default function social({}) {
  const personalInfo = {
    name: "Full Name",
    title: "IT Specialist",
    location: "Paris, France",
    email: "example@gmail.com",
    github: "https://github.com/username",
    linkedin: "https://www.linkedin.com/in/username/",
    website: "https://website.com/",
  };
  return (
    <div style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
      <div style={{ marginBottom: "8px", color: "#58a6ff", fontWeight: 700 }}>
        🌐 CONNECT WITH ME
      </div>

      <div style={{ marginBottom: "12px" }}>
        <div>
          <span style={{ color: "#8b949e" }}>GitHub:</span>{" "}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3fb950", textDecoration: "none" }}
          >
            {personalInfo.github}
          </a>
        </div>
        <div>
          <span style={{ color: "#8b949e" }}>LinkedIn:</span>{" "}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3fb950", textDecoration: "none" }}
          >
            {personalInfo.linkedin}
          </a>
        </div>
        <div>
          <span style={{ color: "#8b949e" }}>Website:</span>{" "}
          <a
            href={personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3fb950", textDecoration: "none" }}
          >
            {personalInfo.website}
          </a>
        </div>
        <div>
          <span style={{ color: "#8b949e" }}>Email:</span>{" "}
          <a
            href={`mailto:${personalInfo.email}`}
            style={{ color: "#3fb950", textDecoration: "none" }}
          >
            {personalInfo.email}
          </a>
        </div>
      </div>

      <div style={{ color: "#c9d1d9", lineHeight: "1.6" }}>
        Feel free to reach out for collaboration opportunities!
      </div>
      <br />
    </div>
  );
}
