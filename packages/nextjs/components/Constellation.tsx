"use client";

import { useMemo } from "react";
import { Address } from "~~/components/scaffold-eth";

export type ConstellationNode = {
  address: string;
  position: { x: number; y: number };
  size: "large" | "small";
};

type ConstellationProps = {
  nodes: ConstellationNode[];
  connections: { from: number; to: number }[];
};

const BuilderPoint = ({ isLarge, delay }: { isLarge: boolean; delay: string }) => {
  const sizeClass = isLarge ? "w-8 h-8" : "w-5 h-5";
  const borderClass = isLarge ? "border-[3px] shadow-[0_0_25px_#6DD5FA]" : "border-2 shadow-[0_0_15px_#6DD5FA]";
  const innerSizeClass = isLarge ? "w-[10px] h-[10px]" : "w-[6px] h-[6px]";

  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${sizeClass} animate-[pulse-scale_4s_ease-in-out_infinite]`}
      style={{ animationDelay: delay }}
    >
      <div className={`w-full h-full rounded-full border-[#6DD5FA] ${borderClass}`} />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full border border-[rgba(109,213,250,0.5)] ${innerSizeClass}`}
      />
    </div>
  );
};

const BuilderLabel = ({ address, isRightEdge }: { address?: string; isRightEdge: boolean }) =>
  address ? (
    <div
      className={`absolute top-1/2 -translate-y-1/2 flex items-center w-max p-2 text-center rounded-full pointer-events-none backdrop-blur-md
      bg-white/70 dark:bg-black/60
      ${isRightEdge ? "right-full mr-6" : "left-full ml-6"}`}
    >
      <Address address={address} />
    </div>
  ) : null;

const Constellation = ({ nodes, connections }: ConstellationProps) => {
  const animationDelays = useMemo(() => {
    const delays: Record<string, string> = {};
    nodes.forEach(node => {
      if (node.address) {
        delays[node.address] = `${(Math.random() * 5).toFixed(1)}s`;
      }
    });
    return delays;
  }, [nodes]);

  return (
    <div className="relative w-full h-full">
      {/* SVG Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A5A8A" stopOpacity="0" />
            <stop offset="50%" stopColor="#6DD5FA" stopOpacity="1" />
            <stop offset="100%" stopColor="#2A5A8A" stopOpacity="0" />
          </linearGradient>
        </defs>
        {connections.map(({ from, to }, idx) => (
          <line
            key={idx}
            x1={`${nodes[from].position.x}%`}
            y1={`${nodes[from].position.y}%`}
            x2={`${nodes[to].position.x}%`}
            y2={`${nodes[to].position.y}%`}
            stroke="url(#line-gradient)"
            strokeWidth="2.5"
            className="opacity-90"
          />
        ))}
      </svg>

      {/* Node Points + Labels */}
      {nodes.map(({ address, position, size }, index) => {
        if (!address) return null;

        const delay = animationDelays[address] || "0s";
        const isRightEdge = position.x > 75;

        return (
          <div key={address || index} className="absolute" style={{ left: `${position.x}%`, top: `${position.y}%` }}>
            <BuilderPoint isLarge={size === "large"} delay={delay} />
            <BuilderLabel address={address} isRightEdge={isRightEdge} />
          </div>
        );
      })}
    </div>
  );
};

export default Constellation;
