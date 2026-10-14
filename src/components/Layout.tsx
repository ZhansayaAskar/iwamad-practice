import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <Header />
      <Outlet />
      <Footer author="Zhansaya Askar" year={2026} />
    </div>
  );
}

export default Layout;