import { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const RoguePage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white p-4">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center text-5xl font-bold shadow-2xl animate-pulse">
          ⚡
        </div>
        <h1 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          MrRogueKnight
        </h1>
        <p className="text-xl text-gray-300 mb-4 italic">Web3 Builder & Smart Contract Sorcerer</p>
        <div className="flex justify-center">
          <Address address="0x58ad103D0C0E69250CaC89Ddf0BDaD396914C411" format="long" />
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-300">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-200">
          Hey! I&apos;m <span className="font-bold text-emerald-300">MrRogueKnight</span>, a passionate developer diving
          deep into the world of blockchain and smart contracts. Currently part of BuidlGuidl&apos;s Batch 18, where
          I&apos;m learning advanced Solidity development, exploring Arbitrum, and building innovative dApps. I believe
          in the power of decentralized technology to transform how we interact with digital systems.
        </p>
      </div>

      {/* Skills Section */}
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-300">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Solidity",
            "Hardhat",
            "TypeScript",
            "React",
            "Next.js",
            "Ethereum",
            "Arbitrum",
            "Web3.js",
            "Ethers.js",
            "OpenZeppelin",
          ].map(skill => (
            <span
              key={skill}
              className="px-4 py-2 bg-emerald-600/20 border border-emerald-400/30 rounded-full text-emerald-200 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* BuidlGuidl Journey */}
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-300">BuidlGuidl Journey</h2>
        <div className="bg-gray-800/30 border border-gray-600/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2 text-emerald-200">Batch 18 Progress</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <span className="text-emerald-400">✅</span>
              <span className="text-gray-300">Successfully checked in with BatchRegistry contract</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400">✅</span>
              <span className="text-gray-300">Deployed contracts to Arbitrum network</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400">✅</span>
              <span className="text-gray-300">Created personal builder page</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-yellow-400">🔄</span>
              <span className="text-gray-300">Working on graduation requirements</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-300">Connect With Me</h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg hover:bg-gray-700/50 transition-colors"
          >
            <span className="text-2xl">🐙</span>
            <span>GitHub</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 border border-blue-400/30 rounded-lg hover:bg-blue-600/30 transition-colors"
          >
            <span className="text-2xl">🐦</span>
            <span>Twitter</span>
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-lg hover:bg-blue-500/30 transition-colors"
          >
            <span className="text-2xl">📱</span>
            <span>Telegram</span>
          </a>
        </div>
      </div>

      {/* Current Focus */}
      <div className="max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-300">Current Focus</h2>
        <div className="bg-gray-800/30 border border-gray-600/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2 text-emerald-200">Building the Future</h3>
          <p className="text-gray-300">
            Currently focused on mastering advanced smart contract patterns, exploring Layer 2 solutions, and
            contributing to the growing Web3 ecosystem. Always excited to collaborate on innovative projects that push
            the boundaries of decentralized technology.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-400">
        <p>🚀 Building the future, one block at a time</p>
      </div>
    </div>
  );
};

export default RoguePage;
