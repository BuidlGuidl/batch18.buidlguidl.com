import Image from "next/image";
import type { NextPage } from "next";

// Using Next.js optimized Image component

const AVATAR_URL = "https://avatars.githubusercontent.com/u/583231?v=4";
const WALLET_ADDRESS = "0xaC1bBf2Aba61D6fC6fCbade72eCe3362de4724c3";

const SOCIALS = [
  { name: "Twitter", url: "https://twitter.com/yourhandle", icon: "🐦" },
  { name: "GitHub", url: "https://github.com/yourhandle", icon: "💻" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourhandle", icon: "🔗" },
];

const Web3ProfilePage: NextPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-teal-50 flex items-center justify-center font-sans">
      <section className="bg-white rounded-xl shadow-xl p-10 max-w-md w-full text-center">
        <Image
          src={AVATAR_URL}
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full object-cover shadow-sm mx-auto mb-4"
          priority
        />
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Gul Ahmed</h1>
        <p className="text-gray-600 mb-4">
          Web3 developer & blockchain enthusiast. Building the decentralized future, one block at a time.
        </p>
        <div className="bg-gray-100 rounded-lg py-2 mb-4 font-mono text-sm text-indigo-500 tracking-wide">
          {WALLET_ADDRESS}
        </div>
        <div className="flex justify-center gap-4">
          {SOCIALS.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl hover:text-blue-800 transition-colors"
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
};

export default Web3ProfilePage;
