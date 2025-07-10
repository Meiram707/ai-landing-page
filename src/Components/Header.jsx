import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/useTheme";

const Header = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <header className="p-6 flex justify-between items-center border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
        NeuroSpark
      </h1>
      <nav className="space-x-6 flex items-center">
        <a
          href="#features"
          className="hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          Pricing
        </a>
        <a
          href="#contact"
          className="hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          Contact
        </a>
        <button
          onClick={() => setIsDark(!isDark)}
          className="ml-4 p-2 rounded transition bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
