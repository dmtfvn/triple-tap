import { Link } from 'react-router';

export default function Navigation() {
  return (
    <div className="flex justify-center w-full mb-5">
      <nav className="flex justify-between max-w-60 w-full rounded-2xl bg-black/10 p-2">
        <Link
          to="/"
          className="nav-link-style"
        >
          Game
        </Link>

        <Link
          to="/score"
          className="nav-link-style"
        >
          Score
        </Link>
      </nav>
    </div>
  );
}
