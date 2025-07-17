import { FC } from "react";

interface SkillProps {
  name: string;
  value: number;
}

export const Skill: FC<SkillProps> = ({ name, value }) => {
  const gradFrom = "var(--color-success)_0%";
  const gradVia = "var(--color-success)_attr(data-via-value_%)";
  const gradTo = "var(--color-base-100)_attr(data-to-value_%)";
  const gradientClass = `bg-linear-[90deg,${gradFrom},${gradVia},${gradTo}]`;
  const bgClassName = ["absolute", "h-full", "-left-full", "w-full", "animate-skill", gradientClass].join(" ");

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-1 mb-1 shadow-md shadow-base-300">
      <div>{name}</div>
      <div className="relative bg-base-100 overflow-hidden">
        <div data-via-value={value - 5} data-to-value={value} className={bgClassName} />
      </div>
    </div>
  );
};
