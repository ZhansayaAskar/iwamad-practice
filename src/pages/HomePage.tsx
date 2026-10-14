import ProfileCard from '../components/ProfileCard';

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

function HomePage() {
  return (
    <ProfileCard
      name="Zhansaya Askar"
      username="Soulshadow_"
      role="IT Management Student at KBTU"
      bio="Hi! I'm Zhansaya from Kazakhstan. I'm an IT Management 3rd year student at KBTU, interested in data analytics and web development."
      avatarUrl={`${import.meta.env.BASE_URL}avatar.jpeg`}
      email="askarzhansaya7@gmail.com"
      github="https://github.com/ZhansayaAskar"
      stats={{ posts: 0, followers: 117, following: 122 }}
      skills={skills}
    />
  );
}

export default HomePage;