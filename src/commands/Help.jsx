export default function Help({}) {
  const commandList = [
    ["about", "Display information about me"],
    ["projects", "Show my portfolio projects"],
    ["skills", "List my technical skills"],
    ["social", "Show my social media links"],
    ["stats", "Display my GitHub stats"],
    ["experience", "Show my professional experience"],
    ["education", "Show my academic background"],
    //["contact", "Get my contact details"],
    ["clear", "Clear the terminal screen"],
    ["date ", "Show the current date and time"],
    //["visitors", "Display the number of portfolio visitors"],
  ];
  return (
    <div style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
      {commandList.map(([cmd, desc]) => (
        <div key={cmd}>
          <span style={{ color: "#58a6ff", fontWeight: 600 }}>
            {cmd.padEnd(12, " ")}
          </span>
          <span style={{ color: "#8b949e" }}> : {desc}</span>
        </div>
      ))}
    </div>
  );
}
