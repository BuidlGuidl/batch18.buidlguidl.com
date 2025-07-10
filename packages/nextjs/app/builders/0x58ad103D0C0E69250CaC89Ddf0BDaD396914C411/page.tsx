import { NextPage } from "next";
import Image from "next/image";
import { Address } from "~~/components/scaffold-eth";

const RoguePage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-black dark:text-white p-4 transition-colors">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <div className="flex flex-col items-center mb-4">
          <Image src="/favicon.png" alt="Logo" width={120} height={120} className="rounded-full mb-4" />
        </div>
        <h1 className="font-extrabold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent text-xl md:text-2xl lg:text-3xl">
          MrRogueKnight
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 italic">Web3 Builder · Smart Contracts</p>
        <p className="text-base text-gray-500 dark:text-gray-400 mb-4">Blockchain, Solidity & dApp explorer, passionate about building the decentralized future with BuidlGuidl.</p>
        <div className="flex justify-center mb-4">
          <Address address="0x58ad103D0C0E69250CaC89Ddf0BDaD396914C411" format="long" />
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/MrRogueKnight"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            title="GitHub"
          >
            <span className="text-2xl">🐙</span>
          </a>
          <a
            href="https://twitter.com/MrRogueKnight"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-600/20 dark:hover:bg-blue-600/40 transition-colors"
            title="Twitter"
          >
            <span className="text-2xl">🐦</span>
          </a>
          <a
            href="https://t.me/MrRogueKnight"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-500/20 dark:hover:bg-blue-500/40 transition-colors"
            title="Telegram"
          >
            <span className="text-2xl">📱</span>
          </a>
          <a
            href="https://linkedin.com/in/MrRogueKnight"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 hover:bg-blue-300 dark:bg-blue-700/20 dark:hover:bg-blue-700/40 transition-colors"
            title="LinkedIn"
          >
            <span className="text-2xl">💼</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoguePage;
