import logo from '../assets/logo.svg';
import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

function Header() {
  const { likes } = useLikes();

  return (
    <header className="page-header text-center mb-6 w-full max-w-md flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:items-center sm:gap-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" width={32} height={32} />
        <h2 className="text-xl font-semibold text-gray-800">My Profile</h2>
      </div>

      <p className="text-sm text-gray-600">♥ {likes}</p>

      <nav className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4 text-sm">
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
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/events">Events</NavLink>
      </nav>
    </header>
  );
}

export default Header;