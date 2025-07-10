"use client";

import type { NextPage } from "next";
import { normalize } from "viem/ens";
import { useEnsAvatar } from "wagmi";
import { mainnet } from "wagmi/chains";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { AddressLinkWrapper } from "~~/components/scaffold-eth/Address/AddressLinkWrapper";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";

const BUILDER_ADDRESS = "0x1f88B7D5a0753b7b72658d36c06B372b1fd8617e";
const BUILDER_ENS = "soul4code.eth";

const GitHubIcon = () => {
  return (
    <span className="[&>svg]:h-5 [&>svg]:w-5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
      </svg>
    </span>
  );
};

const TelegramIcon = () => {
  return (
    <span className="[&>svg]:h-5 [&>svg]:w-5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
        <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
      </svg>
    </span>
  );
};

const Soul4CodeBuilderPage: NextPage = () => {
  const { targetNetwork } = useTargetNetwork();
  const blockExplorerAddressLink = getBlockExplorerAddressLink(targetNetwork, BUILDER_ADDRESS);

  const avatar = useEnsAvatar({
    chainId: mainnet.id,
    name: normalize(BUILDER_ENS),
  });

  return (
    <div className="w-1/1 md:9/10 lg:w-2/3 pl-4 pr-4 ml-auto mr-auto">
      <div className="flex m-auto mt-8 mb-8">
        <div>
          <div style={{ opacity: avatar.isLoading ? 0.2 : 1 }}>
            <BlockieAvatar size={100} address={BUILDER_ADDRESS} ensImage={avatar.data} />
          </div>
        </div>
        <div className="ml-4">
          <h4 className="text-xl font-bold">Anton (soul4code)</h4>
          <AddressLinkWrapper blockExplorerAddressLink={blockExplorerAddressLink}>{BUILDER_ADDRESS}</AddressLinkWrapper>
          <div className="flex gap-2 mt-4">
            <a href="https://github.com/soul4code" target="_blank" role="button">
              <GitHubIcon />
            </a>
            <a href="https://telegram.me/soul_coder" target="_blank" role="button">
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
      <p className="text-lg">
        Hi there! I’m a web developer from Russia, currently working with Python and React. I’ve been in the commercial
        development game for over a decade now. Besides my main focus, I’m really into Data Science/Machine Learning and
        blockchain development (Solidity, Solana, TON).
      </p>
    </div>
  );
};

export default Soul4CodeBuilderPage;
