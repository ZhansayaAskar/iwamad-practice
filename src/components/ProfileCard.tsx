import { useState } from 'react';
import SkillBadge from './SkillBadge';

type Skill = {
  id: number;
  label: string;
};

type ProfileCardProps = {
  name: string;
  username: string;
  role: string;
  bio: string;
  avatarUrl: string;
  email: string;
  github: string;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
  skills: Skill[];
};

function ProfileCard({
  name,
  username,
  role,
  bio,
  avatarUrl,
  email,
  github,
  stats,
  skills,
}: ProfileCardProps) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <main className="profile-card bg-white p-6 border border-gray-200 rounded-xl shadow-md max-w-md w-full">
      <section className="flex flex-col items-center text-center">
        <img
          src={avatarUrl}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
        />
        <h1 className="text-2xl font-bold mt-4">{username}</h1>

        <ul className="stats mt-3 flex justify-center gap-6 text-gray-700 text-sm">
          <li><strong className="text-gray-900">{stats.posts}</strong> posts</li>
          <li><strong className="text-gray-900">{stats.followers}</strong> followers</li>
          <li><strong className="text-gray-900">{stats.following}</strong> following</li>
        </ul>

        <p className="text-gray-500 mt-3">{name} · {role}</p>
      </section>

      <section className="mt-4 text-center">
        <p className="text-gray-700">{bio}</p>
      </section>

      <section className="mt-4 flex flex-col items-center gap-2">
        <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
          {email}
        </a>
        <a href={github} target="_blank" rel="noopener" className="text-blue-600 hover:underline">
          {github.replace('https://', '')}
        </a>
      </section>

      <section className="mt-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-2 text-center">Skills</h2>
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

      <div className="mt-6 flex justify-center">
        <button
          className={liked ? 'like-btn liked' : 'like-btn'}
          onClick={handleLike}
        >
          {liked ? '❤️ Liked' : '🤍 Like'}
        </button>
      </div>
    </main>
  );
}

export default ProfileCard;
