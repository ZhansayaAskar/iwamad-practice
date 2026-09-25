type Skill = {
    id: number;
    label: string;
  };
  
  type SkillBadgeProps = {
    skill: Skill;
  };
  
  function SkillBadge({ skill }: SkillBadgeProps) {
    return (
      <li className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
        {skill.label}
      </li>
    );
  }
  
  export default SkillBadge;