import { useState } from "react";
import { BUILDER_ADDRESS, BUILDER_ENS } from "../constants";
import clsx from "clsx";
import { normalize } from "viem/ens";
import { useEnsAvatar } from "wagmi";
import { mainnet } from "wagmi/chains";
import { Glasses } from "~~/app/builders/0x1f88B7D5a0753b7b72658d36c06B372b1fd8617e/_components/Glasses";

export const BuilderAvatar = () => {
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const avatar = useEnsAvatar({
    chainId: mainnet.id,
    name: normalize(BUILDER_ENS),
  });

  return (
    <div className="min-w-[100px]">
      <div>
        {avatar.isLoading ? (
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <div className="loader" />
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="rounded-full"
            src={avatar.data || ""}
            width={100}
            height={100}
            alt={`${BUILDER_ADDRESS} avatar`}
            onLoad={() => setAvatarLoaded(true)}
          />
        )}

        <Glasses className={clsx(!avatarLoaded ? "hidden" : "block")} />
      </div>
    </div>
  );
};
