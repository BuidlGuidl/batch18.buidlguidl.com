// app/builder/address/page.tsx

const AVATAR_URL = "https://avatars.githubusercontent.com/u/583231?v=4";
const WALLET_ADDRESS = "0xaC1bBf2Aba61D6fC6fCbade72eCe3362de4724c3";

const SOCIALS = [
  { name: "Twitter", url: "https://twitter.com/yourhandle", icon: "🐦" },
  { name: "GitHub", url: "https://github.com/yourhandle", icon: "💻" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourhandle", icon: "🔗" },
];

export default function Web3ProfilePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <section
        style={{
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          padding: "40px 32px",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <img
          src={AVATAR_URL}
          alt="Avatar"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            marginBottom: "18px",
          }}
        />
        <h1
          style={{
            fontSize: "2rem",
            margin: "0 0 10px 0",
            color: "#2d6cdf",
          }}
        >
          Gul Ahmed
        </h1>
        <p
          style={{
            color: "#444",
            marginBottom: "18px",
          }}
        >
          Web3 developer & blockchain enthusiast. Building the decentralized future, one block at a time.
        </p>
        <div
          style={{
            background: "#f3f4f6",
            borderRadius: "8px",
            padding: "10px 0",
            marginBottom: "18px",
            fontFamily: "monospace",
            fontSize: "0.95rem",
            color: "#6366f1",
            letterSpacing: "0.5px",
          }}
        >
          {WALLET_ADDRESS}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
          }}
        >
          {SOCIALS.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#2d6cdf",
                fontSize: "1.5rem",
                transition: "color 0.2s",
              }}
            >
              <span role="img" aria-label={social.name}>
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
