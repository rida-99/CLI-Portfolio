import React, { useState, useEffect, useRef } from "react";
import Terminal from "react-console-emulator";

import Help from "./commands/Help";
import About from "./commands/About";
import Skills from "./commands/Skills";
import Projects from "./commands/Projects";
import Stats from "./commands/Stats";
import Experience from "./commands/Experience";
import Education from "./commands/Education";
import Social from "./commands/Social";

const asciiBanner = `
██╗    ██╗ ███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
██║    ██║ ██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║ █████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
██║███╗██║ ██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
╚███╔███╔╝ ███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝  ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝

Welcom to my Portfolio

Type 'help' for a list of all available commands

`;

export default function App() {
  const [visitCount, setVisitCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const terminalRef = useRef(null);

  const fetchVisitorCountLocal = () => {
    try {
      const stored = localStorage.getItem("portfolio-visit-count");
      const currentCount = stored ? parseInt(stored) + 1 : 1;
      localStorage.setItem("portfolio-visit-count", currentCount.toString());
      setVisitCount(currentCount);
    } catch (error) {
      console.error("localStorage not available:", error);
      setVisitCount(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVisitorCountLocal();
  }, []);

  const commands = {
    help: {
      description: "Show available commands",
      usage: "help",
      fn: () => <Help />,
    },

    about: {
      description: "About me",
      usage: "about",
      fn: () => <About />,
    },

    projects: {
      description: "Show portfolio projects",
      usage: "projects",
      fn: () => <Projects />,
    },

    skills: {
      description: "Display technical skills",
      usage: "skills",
      fn: () => <Skills />,
    },

    social: {
      description: "Show social links",
      usage: "social",
      fn: () => <Social />,
    },

    stats: {
      description: "Show GitHub stats",
      usage: "stats",
      fn: async () => {
        try {
          const response = await fetch("https://api.github.com/users/username");
          const data = await response.json();

          return <Stats data={data} />;
        } catch (error) {
          return "⚠️ Failed to load GitHub stats.";
        }
      },
    },

    experience: {
      description: "Show work experience",
      usage: "experience",
      fn: () => <Experience />,
    },

    education: {
      description: "Show educational background",
      usage: "education",
      fn: () => <Education />,
    },

    contact: {
      description: "Get in touch",
      usage: "contact",
      fn: () => `
        CONTACT ME
        ${"=".repeat(20)}

        I'm always open to discussing new opportunities, 
        collaborating on projects, or just having a chat 
        about technology!

        Primary: ${personalInfo.email}
        Phone: +212 
        Location: ${personalInfo.location}

        Let's build something amazing together!`,
    },

    clear: {
      description: "Clear the terminal",
      usage: "clear",
      fn: () => {
        if (terminalRef.current) {
          terminalRef.current.clearStdout(); //  clears the terminal
        }
        return null;
      },
    },

    date: {
      description: "Show current date and time",
      usage: "date",
      fn: () => new Date().toString(),
    },

    visitors: {
      description: "Show visitor count",
      usage: "visitors",
      fn: () =>
        loading
          ? "Loading visitor count..."
          : `This portfolio has been visited ${visitCount.toLocaleString()} times!`,
    },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        fontFamily: "'Fira Code', 'Courier New', monospace",
        padding: "16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ASCII Banner - Responsive */}
      <div
        style={{
          textAlign: "left",
          marginBottom: "24px",
          overflowX: "auto", // allows horizontal scroll if needed
          padding: "8px 0",
        }}
      >
        <pre
          style={{
            margin: 0,
            fontSize: "clamp(8px, 4vw, 16px)", // responsive font size
            color: "#66b3ff",
            whiteSpace: "pre",
            lineHeight: 1.3,
          }}
        >
          {asciiBanner}
        </pre>
      </div>

      {/* Terminal - Takes remaining space */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <Terminal
          ref={terminalRef}
          commands={commands}
          welcomeMessage={""}
          promptLabel={"visitor@portfolio:~$"}
          noDefaults={true}
          whiteSpace="pre-wrap"
          style={{
            backgroundColor: "#0d1117",
            height: "100%",
            width: "100%",
            overflow: "auto", // ensures scroll if content overflows
          }}
          contentStyle={{
            color: "#c9d1d9",
            fontSize: "clamp(12px, 3.5vw, 16px)", // responsive font
            lineHeight: "1.5",
            padding: "8px",
          }}
          promptLabelStyle={{
            color: "#58a6ff",
          }}
          inputStyle={{
            color: "#f0f6fc",
            backgroundColor: "transparent",
            fontSize: "inherit",
          }}
        />
      </div>
    </div>
  );
}
