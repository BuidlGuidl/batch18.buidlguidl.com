"use client";

import Image from "next/image";
import ProfilePic from "./profilepic.jpg";
import { NextPage } from "next";

const TrynaxProfile: NextPage = () => {
  function copyWalletAddress() {
    navigator.clipboard.writeText("0x458d02b43B572f0ea64aFB2CAC7dE02d5968CB2a");
    alert("Wallet address copied to clipboard!");
  }
  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-6 py-6 relative bg-base-100  min-h-screen">
      <div className="text-center border-b border-base-300 pb-8 mb-8">
        <div className="relative inline-block">
          <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full overflow-hidden">
            <Image
              src={ProfilePic}
              alt="Trynax Trynax Picture"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
            <span className="text-sm">🚀</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">Trynax</h1>
        <p className="text-lg text-base-content/70 mb-4">Software Engineer</p>
        <div className="flex justify-center items-center space-x-2 text-sm">
          <span
            className="badge badge-primary cursor-pointer hover:badge-primary-focus transition-colors flex items-center gap-1"
            onClick={copyWalletAddress}
            title="Click to copy wallet address"
          >
            📋 0x458d...8CB2a
          </span>
          <span className="text-base-content/50">•</span>
          <span className="text-base-content/70">I get curious about stuff and I learn about them.</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">
                <span className="text-2xl mr-2">👋</span>
                About Me
              </h2>
              <p className="text-base-content/80 leading-relaxed">
                I&apos;m a Software Engineer with a background in web2. I discovered web3 not too long ago, and my
                curiosity quickly turned into a deep interest. Recently, I began exploring the dev side of web3 and have
                been actively learning and building ever since.
              </p>
              <div className="mt-4 p-4 bg-base-300/50 rounded-lg border-l-4 border-primary">
                <p className="italic text-base-content/90">
                  &quot;First, solve the problem. Then, write the code.&quot;— John Johnson
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">
                <span className="text-2xl mr-2">⚡</span>
                Tech Stack
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="badge badge-outline badge-lg">Solidity</div>
                <div className="badge badge-outline badge-lg">TypeScript</div>
                <div className="badge badge-outline badge-lg">Javascript</div>
                <div className="badge badge-outline badge-lg">Golang</div>
                <div className="badge badge-outline badge-lg">Python</div>
                <div className="badge badge-outline badge-lg">React</div>
                <div className="badge badge-outline badge-lg">Foundry</div>
                <div className="badge badge-outline badge-lg">Node.js</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">
                <span className="text-2xl mr-2">📚</span>
                Learning Journey
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span>Completed SpeedRunEthereum challenges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span>Reading Mastering Ethereum book by Gavin</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
                  <span>Building with BuidlGuidl Batch 18</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span>Solidity Smart Contract Developer - Cyfrin Updraft</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">
                <span className="text-2xl mr-2">🎯</span>
                Current Work
              </h2>
              <div className="space-y-4">
                <div className="p-3 bg-base-100 rounded-lg">
                  <h3 className="font-semibold text-primary">Frontend at Choice Exchange (DEX on Injective)</h3>
                  <p className="text-sm text-base-content/70">
                    Building user interface components and integrating with smart contracts
                  </p>
                </div>
                <div className="p-3 bg-base-100 rounded-lg">
                  <h3 className="font-semibold text-secondary">Building a Buybot</h3>
                  <p className="text-sm text-base-content/70">Built a buy bot for a few tokens on Injective</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">
                <span className="text-2xl mr-2">🌐</span>
                Let&apos;s Connect
              </h2>
              <div className="space-y-3">
                <a
                  href="https://github.com/trynax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-base-300/50 rounded-lg hover:bg-base-300 transition-colors"
                >
                  <span className="text-xl">💻</span>
                  <span className="font-medium">GitHub</span>
                  <span className="text-sm text-base-content/70">@trynax</span>
                </a>
                <a
                  href="https://twitter.com/trynaxPRMR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-base-300/50 rounded-lg hover:bg-base-300 transition-colors"
                >
                  <span className="text-xl">🐦</span>
                  <span className="font-medium">X</span>
                  <span className="text-sm text-base-content/70">@trynaxPRMR</span>
                </a>
                <div className="flex items-center space-x-3 p-3 bg-base-300/50 rounded-lg">
                  <span className="text-xl">📧</span>
                  <span className="font-medium">Email</span>
                  <span className="text-sm text-base-content/70">Trynax001@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">
                <span className="text-2xl mr-2">✨</span>
                Fun Facts
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span>🍕</span>
                  <span>I love food, I eat a lot.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⚽</span>
                  <span>Love gaming (Favorite is FC25 currently)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🎵</span>
                  <span>Music drives me</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📈</span>
                  <span>Always trying to get better 1% every day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 pt-8 border-t border-base-300">
        <p className="text-lg italic text-base-content/70">
          &quot;Building tomorrow&apos;s decentralized world, today&quot; 🌟
        </p>
        <div className="mt-4 text-sm text-base-content/50">
          <span>BuidlGuidl Batch 18 • Ethereum Address: 0x458d02b43B572f0ea64aFB2CAC7dE02d5968CB2a</span>
        </div>
      </div>
    </div>
  );
};

export default TrynaxProfile;
