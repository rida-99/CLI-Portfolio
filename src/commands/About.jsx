export default function About({}) {
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
        ┌───── ABOUT ME ─────┐
      </div>
      <div style={{ marginBottom: "12px" }}>
        <div>
          <span style={{ color: "#8b949e" }}>Name:</span>{" "}
          <span style={{ color: "#c9d1d9" }}>{personalInfo.name}</span>
        </div>
        <div>
          <span style={{ color: "#8b949e" }}>Title:</span>{" "}
          <span style={{ color: "#c9d1d9" }}>{personalInfo.title}</span>
        </div>
        <div>
          <span style={{ color: "#8b949e" }}>Location:</span>{" "}
          <span style={{ color: "#c9d1d9" }}>{personalInfo.location}</span>
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
        <div>
          <span style={{ color: "#8b949e" }}>Github:</span>{" "}
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
      </div>
      <div style={{ marginBottom: "8px", color: "#58a6ff", fontWeight: 700 }}>
        └────────────────────┘
      </div>

      <div style={{ color: "#c9d1d9", lineHeight: "1.6" }}>
        I currently work as an IT specialist at IAM, where I am developing my
        skills in network and systems infrastructure administration and
        management.
        <br />
        <br />
        Having earned a Master's degree in Computer Science (Faculty of
        Sciences, Rabat, graduating class of 2025), I have acquired a solid
        foundation of both theoretical and practical knowledge.
        <br />
        <br />
        Passionate about automation, management, and infrastructure deployment,
        I am particularly interested in innovative solutions in these areas.
        <br />
        <br />
        I'm always open to discussing new opportunities, collaborating on
        projects, or just having a chat about technology!
        <br />
        <br />
      </div>
      <br />
    </div>
  );
}
