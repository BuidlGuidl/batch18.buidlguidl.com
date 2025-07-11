import { FC } from "react";

interface SkillProps {
  name: string;
  value: number;
}

export const Skill: FC<SkillProps> = ({ name, value }) => {
  return (
    <div className="skill-container grid grid-cols-[1fr_2fr] gap-1 mb-1">
      <div>{name}</div>
      <div className="skill-value">
        <div className="skill-value-bg" data-skill-pre-value={value - 5} data-skill-value={value} />
      </div>
    </div>
  );
};
