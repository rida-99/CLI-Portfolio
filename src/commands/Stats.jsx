export default function Stats({ data }) {
  return (
    <div
      style={{
        whiteSpace: "pre-wrap",
        fontFamily: "inherit",
        color: "#c9d1d9",
      }}
    >
      <div
        style={{
          marginBottom: "10px",
          color: "#58a6ff",
          fontWeight: 700,
        }}
      >
        GitHub Stats
      </div>

      {/* --- Live Stats from API --- */}
      <div>
        Public Repos:{" "}
        <span style={{ color: "#3fb950" }}>{data.public_repos}</span>
      </div>
      <div>
        Followers: <span style={{ color: "#3fb950" }}>{data.followers}</span>
      </div>
      <div>
        Following: <span style={{ color: "#3fb950" }}>{data.following}</span>
      </div>
      <div>
        Profile:{" "}
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#3fb950" }}
        >
          {data.html_url}
        </a>
      </div>

      {/* --- Readme Stats Images --- */}
      <div style={{ marginTop: "20px" }}>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=username&show_icons=true&theme=tokyonight`}
          alt="GitHub Stats"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
        <br />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=username&layout=compact&theme=tokyonight`}
          alt="Top Languages"
          style={{
            maxWidth: "100%",
            marginTop: "12px",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
}
