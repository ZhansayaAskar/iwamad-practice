import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <section className="profile-card bg-white p-6 border border-gray-200 rounded-xl shadow-md max-w-md w-full text-center">
      <h1 className="text-4xl font-bold mb-3">404</h1>
      <p className="text-gray-700 mb-6">Page not found.</p>

      <Link to="/" className="text-blue-600 hover:underline font-semibold">
        ← Back to Home
      </Link>
    </section>
  );
}

export default NotFoundPage;