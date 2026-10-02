import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

function Header() {
  const { likes } = useLikes();

  return (
    <header className="page-header text-center mb-6 w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">My Profile</h2>

      <p className="text-sm text-gray-600 mb-2">♥ {likes}</p>

      <nav className="flex justify-center gap-4 text-sm">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;