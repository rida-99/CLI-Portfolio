export default function Skills({}) {
  const skills = {
    languages: ["C#", "Go", "TypeScript", "SQL"],
    frontend: ["Vue.js", "Svelte", "Tailwind CSS", "Bootstrap"],
    backend: ["Django", "Express.js", "ASP.NET Core", "Spring Boot"],
    devOps: ["Terraform", "Ansible", "GitLab CI", "Jenkins"],
    cloud: ["AWS", "Oracle Cloud", "Firebase"],
    databases: ["MySQL", "MongoDB", "Redis", "ElasticSearch"],
    networks: ["EIGRP", "BGP", "VXLAN", "ACLs", "IPSec VPN", "QoS"],
    tools: ["Postman", "Figma", "Wireshark", "Notion", "Jira"],
  };

  return (
    <div style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
      <div style={{ marginBottom: "8px", color: "#58a6ff", fontWeight: 700 }}>
        ┌──── TECHNICAL SKILLS ────┐
      </div>

      <div style={{ marginBottom: "12px" }}>
        <div>
          <span style={{ color: "#8b949e" }}>Languages:</span>{" "}
          <span style={{ color: "#c9d1d9" }}>
            {skills.languages.join(" • ")}
          </span>
        </div>

        {skills.frontend && (
          <div>
            <span style={{ color: "#8b949e" }}>Frontend:</span>{" "}
            <span style={{ color: "#c9d1d9" }}>
              {skills.frontend.join(" • ")}
            </span>
          </div>
        )}

        {skills.backend && (
          <div>
            <span style={{ color: "#8b949e" }}>Backend:</span>{" "}
            <span style={{ color: "#c9d1d9" }}>
              {skills.backend.join(" • ")}
            </span>
          </div>
        )}

        <div>
          <span style={{ color: "#8b949e" }}>DevOps:</span>{" "}
          <span style={{ color: "#c9d1d9" }}>{skills.devOps.join(" • ")}</span>
        </div>

        <div>
          <span style={{ color: "#8b949e" }}>Cloud:</span>{" "}
          <span style={{ color: "#c9d1d9" }}>{skills.cloud.join(" • ")}</span>
        </div>

        <div>
          <span style={{ color: "#8b949e" }}>Networks:</span>{" "}
          <span style={{ color: "#c9d1d9" }}>
            {skills.networks.join(" • ")}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: "8px", color: "#58a6ff", fontWeight: 700 }}>
        └──────────────────────────┘
      </div>

      <div style={{ color: "#c9d1d9", lineHeight: "1.6" }}>
        Always learning new technologies and staying up-to-date with industry
        trends!
      </div>
      <br />
    </div>
  );
}
