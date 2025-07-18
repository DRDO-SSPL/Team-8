import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, BookOpen, Dumbbell, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/chat', label: 'Chat', icon: MessageCircle },
    { path: '/blogs', label: 'Blogs', icon: BookOpen },
    { path: '/exercises', label: 'Exercises', icon: Dumbbell },
  ];

  return (
    <nav className="bg-[#FDFCF9] dark:bg-[#1E1B2E] border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-[#A78BFA] to-[#D946EF] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-sm">Y</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-[#EDE9FE] group-hover:text-[#A78BFA] dark:group-hover:text-[#D8B4FE] transition-colors duration-200">
              YouMatter
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    location.pathname === path
                      ? 'text-[#A78BFA] dark:text-[#D8B4FE] bg-[#A78BFA]/10 dark:bg-[#D8B4FE]/10'
                      : 'text-gray-700 dark:text-[#EDE9FE] hover:text-[#A78BFA] dark:hover:text-[#D8B4FE] hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-[#EDE9FE] hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
