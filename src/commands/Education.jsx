export default function Education({}) {
  const education = [
    {
      degree: "Master of Science in Cybersecurity",
      institution: "École d’Ingénieurs en Informatique – Lyon",
      period: "Sept 2023 – Sept 2025",
    },
    {
      degree: "Bachelor of Science in Information Systems",
      institution: "Université de Technologie de Compiègne",
      period: "Sept 2019 – Jul 2023",
    },
    {
      degree: "Preparatory Classes in Mathematics and Computer Science (CPGE)",
      institution: "Lycée Henri Poincaré – Nancy",
      period: "Sept 2017 – Jul 2019",
    },
  ];

  return (
    <div style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
      <div style={{ marginBottom: "8px", color: "#58a6ff", fontWeight: 700 }}>
        EDUCATION
      </div>
      {education.map((edu, index) => (
        <div key={index} style={{ marginBottom: "16px" }}>
          <div>
            <span style={{ color: "#58a6ff", fontWeight: 600 }}>
              {edu.degree}
            </span>
          </div>
          <div>
            <span style={{ color: "#8b949e" }}>Institution:</span>{" "}
            <span style={{ color: "#c9d1d9" }}>{edu.institution}</span>
          </div>
          <div>
            <span style={{ color: "#8b949e" }}>Period:</span>{" "}
            <span style={{ color: "#c9d1d9" }}>{edu.period}</span>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
}
