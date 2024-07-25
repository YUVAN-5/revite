import React from 'react';
import { useTheme } from '../../components/ThemeProvider'; 

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex h-screen bg-gray-100 dark:bg-gray-900 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="bg-orange-500 text-white w-64 space-y-6 py-7 px-2 dark:bg-gray-800">
        <div className="text-white flex items-center space-x-2 px-4">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span className="text-2xl font-extrabold">RealEstate</span>
        </div>
        <nav>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">
            Dashboard
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">
            Properties
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">
          {/* <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800"> */}
            Agents
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">
            Reports
          </a>
        </nav>
      </div>
      <div className="flex-1 p-10 text-2xl font-bold">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">Dashboard</h1>
          <div className="flex items-center">
            <span className="mr-3 text-gray-700 dark:text-gray-300">John Doe</span>
            <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="Avatar" />
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 bg-gray-200 rounded dark:bg-gray-600"
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            Welcome to your Real Estate Dashboard
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
