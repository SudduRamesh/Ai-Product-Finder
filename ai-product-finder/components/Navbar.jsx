import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <Link to="/" className="text-xl font-bold dark:text-white">
        AI Product Finder
      </Link>

      <div className="flex items-center gap-4">
        <Link className="dark:text-white" to="/">Home</Link>
        <Link className="dark:text-white" to="/saved">Saved</Link>

        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {dark ? <FaSun className="text-yellow-300" /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}