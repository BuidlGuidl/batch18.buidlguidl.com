import { FC } from "react";
import clsx from "clsx";

export const Glasses: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={clsx("glasses", className)}
      width="70"
      height="50"
      viewBox="0 40 100 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g xmlns="http://www.w3.org/2000/svg">
        <rect x="18.8" y="48.3" width="3.5" height="3.5" />
        <rect x="67.3" y="48.3" width="3.5" height="3.5" />
        <path d="M5,41.3v6.9h3.5v3.5h3.5v3.5h3.5v3.5h24.2v-3.5h3.5v-3.5h3.5v-6.9h6.9v6.9h3.5v3.5h3.5v3.5h24.2v-3.5h3.5v-3.5h3.5v-3.5H95   v-6.9H5z M29.2,55.2h-3.5v-3.5h-3.5v3.5h-3.5v-3.5h-3.5v-3.5h-3.5v-3.5h3.5v3.5h3.5v-3.5h3.5v3.5h3.5v3.5h3.5V55.2z M77.7,55.2   h-3.5v-3.5h-3.5v3.5h-3.5v-3.5h-3.5v-3.5h-3.5v-3.5h3.5v3.5h3.5v-3.5h3.5v3.5h3.5v3.5h3.5V55.2z" />
      </g>
    </svg>
  );
};
