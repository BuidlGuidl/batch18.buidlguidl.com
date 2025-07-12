import Image from "next/image";
import type { NextPage } from "next";
import { GithubIcon, TelegramIcon, XIcon } from "~~/components/assets/SocialIcons";
import { Address } from "~~/components/scaffold-eth";

const hedgyAddress = "0xADAeE26D04f78D24F2E73D87944f83E2eE50d6BB"; // my develop address

const ByteHedgy: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="relative w-32 h-32 mb-6">
        <Image src="/avatar/hedgy.webp" alt="hedgy Avatar" className="rounded-full shadow-md" fill sizes="96px" />
      </div>
      <h1 className="font-extrabold mb-2 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed">
        Hello, I&apos;m Hedgy
      </h1>
      <p className="mb-2 italic text-lg">Spikes up. Code clean. Web3 forever.</p>

      <p className="mb-1 max-w-md">5 years backend dev at a tech company, currently pursuing a master&apos;s in AI.</p>
      <p className="mb-2 max-w-md">
        <span className="font-semibold text-emerald-600">Location:</span> Beijing, China 🇨🇳
      </p>
      <p className="mb-2 max-w-md">
        <span className="font-semibold text-indigo-600">Skills:</span> Java, Python, Smart Contracts, Planning to learn
        Rust
      </p>

      <div className="mb-4 font-mono rounded px-4 py-2 select-all">
        <Address address={hedgyAddress} format="long" onlyEnsOrAddress />
      </div>

      <div className="flex gap-6 text-lg">
        <a href="https://github.com/byte-hedgy" target="_blank" rel="noopener noreferrer" className="link">
          <GithubIcon className="w-4 h-4" />
        </a>
        <a href="https://x.com/byte_hedgy" target="_blank" rel="noopener noreferrer" className="link">
          <XIcon className="w-4 h-4" />
        </a>
        <a href="https://telegram.me/byte_hedgy" target="_blank" rel="noopener noreferrer" className="link">
          <TelegramIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ByteHedgy;
