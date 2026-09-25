import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import './App.css';

type Skill = {
  id: number;
  label: string;
};

function App() {
  const skills: Skill[] = [
    { id: 1, label: 'AWS' },
    { id: 2, label: 'SQL' },
    { id: 3, label: 'Power BI' },
    { id: 4, label: 'C++' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <Header title="My Profile" />

      <ProfileCard
        name="Zhansaya Askar"
        username="Soulshadow_"
        role="IT Management Student at KBTU"
        bio="Hi! I'm Zhansaya from Kazakhstan. I'm an IT Management 3rd year student at KBTU, interested in data analytics and web development. I love learning new technologies and building things for the web."
        avatarUrl={`${import.meta.env.BASE_URL}avatar.jpeg`}
        email="askarzhansaya7@gmail.com"
        github="https://github.com/ZhansayaAskar"
        stats={{ posts: 0, followers: 117, following: 122 }}
        skills={skills}
      />

      <Footer author="Zhansaya Askar" year={2026} />
    </div>
  );
}

export default App;