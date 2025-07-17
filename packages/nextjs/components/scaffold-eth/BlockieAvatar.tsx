"use client";

import { FC } from "react";
import { blo } from "blo";

interface BlockieAvatarProps {
  address: string;
  ensImage?: string | null;
  size: number;
  onLoad?: () => void;
  defaultAvatar?: string;
}

// Custom Avatar for RainbowKit
export const BlockieAvatar: FC<BlockieAvatarProps> = ({ address, ensImage, size, defaultAvatar, onLoad }) => (
  // Don't want to use nextJS Image here (and adding remote patterns for the URL)
  // eslint-disable-next-line @next/next/no-img-element
  <img
    className="rounded-full"
    src={ensImage || defaultAvatar || blo(address as `0x${string}`)}
    width={size}
    height={size}
    alt={`${address} avatar`}
    onLoad={onLoad}
  />
);
