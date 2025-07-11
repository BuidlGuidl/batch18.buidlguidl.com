import Image from "next/image";
import { DiscordIcon, GithubIcon, XIcon } from "../../../components/assets/Icons";
import { Address } from "../../../components/scaffold-eth/Address/Address";
import { NextPage } from "next";

const RahulDevRio: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl p-4 sm:p-8 flex flex-col items-center w-full max-w-xs sm:max-w-md border border-gray-200 dark:border-gray-700 transition duration-300">
        <div className="mb-4">
          <Image
            src="/avatar/rahuldevrio.webp"
            alt="Builder Avatar"
            width={96}
            height={96}
            className="border rounded-lg object-cover object-center w-24 h-24 sm:w-32 sm:h-32"
          />
        </div>
        <h1 className="text-lg sm:text-2xl font-bold mb-2 text-purple-700 dark:text-purple-300">RahulDevRio</h1>
        <div className="mb-2">
          <Address address="0x4F6cAA40C4FD61cc6dF9c04a44DbD48492FA0d0f" />
        </div>
        <p className="mb-6 text-center max-w-md dark:text-gray-200 text-base sm:text-lg">
          Hi, I’m Rahul from India. I have a background in Mechanical Engineering and MSc in Data Science. I love
          experimenting with new dApp ideas and contributing to the Web3 ecosystem.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs sm:text-sm font-semibold dark:bg-purple-900 dark:text-purple-200">
            Solidity
          </span>
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-semibold dark:bg-green-900 dark:text-green-200">
            DeFi
          </span>
          <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs sm:text-sm font-semibold dark:bg-pink-900 dark:text-pink-200">
            NFTs
          </span>
          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs sm:text-sm font-semibold dark:bg-yellow-900 dark:text-yellow-200">
            dApps
          </span>
        </div>
        <div className="flex gap-4">
          <a
            href="https://twitter.com/RahulDevRio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <XIcon className="w-7 h-7 sm:w-8 sm:h-8 text-sky-500 dark:text-sky-400" />
          </a>
          <a
            href="https://github.com/Rahul-Roy-Hub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <GithubIcon className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900 dark:text-white" />
          </a>
          <a
            href="https://discord.com/users/rahuldevrio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <DiscordIcon className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-500 dark:text-indigo-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RahulDevRio;
