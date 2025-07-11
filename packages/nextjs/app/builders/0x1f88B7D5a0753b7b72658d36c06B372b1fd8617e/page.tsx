"use client";

import { BUILDER_ADDRESS } from "./constants";
import "./page.css";
import type { NextPage } from "next";
import { BuilderAvatar } from "~~/app/builders/0x1f88B7D5a0753b7b72658d36c06B372b1fd8617e/_components/BuilderAvatar";
import { GitHubIcon } from "~~/app/builders/0x1f88B7D5a0753b7b72658d36c06B372b1fd8617e/_components/GitHubIcon";
import { Skill } from "~~/app/builders/0x1f88B7D5a0753b7b72658d36c06B372b1fd8617e/_components/Skill";
import { TelegramIcon } from "~~/app/builders/0x1f88B7D5a0753b7b72658d36c06B372b1fd8617e/_components/TelegramIcon";
import { AddressCopyIcon } from "~~/components/scaffold-eth/Address/AddressCopyIcon";
import { AddressLinkWrapper } from "~~/components/scaffold-eth/Address/AddressLinkWrapper";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";

const Soul4CodeBuilderPage: NextPage = () => {
  const { targetNetwork } = useTargetNetwork();

  const blockExplorerAddressLink = getBlockExplorerAddressLink(targetNetwork, BUILDER_ADDRESS);

  return (
    <div className="w-1/1 md:9/10 lg:w-2/3 pl-4 pr-4 ml-auto mr-auto">
      <div className="flex m-auto mt-8 mb-8">
        <BuilderAvatar />
        <div className="ml-4">
          <h4 className="text-xl font-bold">Anton (soul4code)</h4>
          <div className="flex items-center">
            <AddressLinkWrapper blockExplorerAddressLink={blockExplorerAddressLink}>
              <span>
                {BUILDER_ADDRESS.slice(0, 6)}...{BUILDER_ADDRESS.slice(-4)}
              </span>
            </AddressLinkWrapper>
            <AddressCopyIcon className="ml-1 w-5 cursor-pointer" address={BUILDER_ADDRESS} />
          </div>
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
      <div>
        <p className="text-lg font-bold">Skills</p>
        <div>
          <Skill name="Python" value={90} />
          <Skill name="TypeScript" value={90} />
          <Skill name="DS/ML" value={70} />
          <Skill name="Solidity" value={50} />
          <Skill name="Solana (Rust)" value={30} />
          <Skill name="TON (Tact)" value={30} />
        </div>
      </div>
    </div>
  );
};

export default Soul4CodeBuilderPage;
