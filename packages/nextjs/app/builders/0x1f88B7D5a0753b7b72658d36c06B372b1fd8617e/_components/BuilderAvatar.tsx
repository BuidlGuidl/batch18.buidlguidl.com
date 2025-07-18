import { useState } from "react";
import { BUILDER_ADDRESS, BUILDER_ENS } from "../constants";
import clsx from "clsx";
import { normalize } from "viem/ens";
import { useEnsAvatar } from "wagmi";
import { mainnet } from "wagmi/chains";
import { Glasses } from "~~/app/builders/0x1f88B7D5a0753b7b72658d36c06B372b1fd8617e/_components/Glasses";
import { BlockieAvatar } from "~~/components/scaffold-eth";

const preloaderClasses = clsx(
  "w-12",
  "h-12",
  "border-10",
  "border-solid",
  "border-base-100",
  "rounded-full",
  "relative",
  "rotate-45",
  "box-border",
);
const preloaderBeforeClasses = clsx(
  "before:content-['']",
  "before:absolute",
  "before:box-border",
  "before:-inset-[10px]",
  "before:rounded-full",
  "before:border-10",
  "before:border-solid",
  "before:border-success",
  "before:animate-avatar-loader",
);

export const BuilderAvatar = () => {
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const avatar = useEnsAvatar({
    chainId: mainnet.id,
    name: normalize(BUILDER_ENS),
  });

  return (
    <div className="min-w-[100px]">
      <div className="relative">
        {avatar.isLoading ? (
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <div className={clsx(preloaderClasses, preloaderBeforeClasses)} />
          </div>
        ) : (
          <BlockieAvatar
            address={BUILDER_ADDRESS}
            size={100}
            ensImage={avatar.data}
            onLoad={() => setAvatarLoaded(true)}
          />
        )}

        <Glasses className={clsx(!avatarLoaded ? "hidden" : "block")} />
      </div>
    </div>
  );
};
