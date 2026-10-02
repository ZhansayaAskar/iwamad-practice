import SkillBadge from '../components/SkillBadge';

type Skill = {
  id: number;
  label: string;
};

const skills: Skill[] = [
  { id: 1, label: 'Python' },
  { id: 2, label: 'SQL' },
  { id: 3, label: 'Power BI' },
  { id: 4, label: 'C++' },
  { id: 5, label: 'AWS' },
];

function SkillsPage() {
  return (
    <section className="profile-card bg-white p-6 border border-gray-200 rounded-xl shadow-md max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4 text-center">My Skills</h1>

      {skills.length > 0 ? (
        <ul className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm text-center">No skills added yet.</p>
      )}
    </section>
  );
}

export default SkillsPage;