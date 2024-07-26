// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useTheme } from '../../components/ThemeProvider'; 
// import { ModeToggle } from '@/components/ModeToggle';
// import Avatar from '../../assets/img/avatar.png'

// const Dashboard = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className={`flex h-screen bg-gray-100 dark:bg-gray-900 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
//       <div className="bg-orange-500 text-white w-64 space-y-6 py-7 px-2 dark:bg-gray-800">
//         <div className="text-white flex items-center space-x-2 px-4">
//           {/* <Link to="/"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//           </svg></Link> */}
//           <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="200"
//       height="100"
//       viewBox="0 0 200 100"
//     >
//       <rect x="10" y="30" width="20" height="70" fill="#3498db" />
//       <rect x="40" y="20" width="20" height="80" fill="#2980b9" />
//       <rect x="70" y="10" width="20" height="90" fill="#2ecc71" />
//       <rect x="100" y="40" width="20" height="60" fill="#27ae60" />
//       <rect x="130" y="50" width="20" height="50" fill="#f39c12" />
//       <text
//         x="70"
//         y="95"
//         fontFamily="Arial, sans-serif"
//         fontSize="20"
//         fill="#333"
//       >
        
//       </text>
//     </svg>
//           <span className="text-2xl font-extrabold">SKYSCRAPER</span>
//         </div>
//         <nav>
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">
//             Dashboard
//           </a>
//           {/* <hr className='divider'/> */}
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">
//             Properties
//           </a>
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">
          
//             Agents
//           </a>
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">
//             Reports
//           </a>
//         </nav>
//       </div>
//       <div className="flex-1 p-10 text-2xl font-bold">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="mr-3 text-gray-700 dark:text-gray-300">YUVAN</span>
//             <img className="w-10 h-10 rounded-full" src={Avatar} alt="Avatar" />
//             {/* <button
//               onClick={toggleTheme}
//               className="ml-4 p-2 bg-gray-200 rounded dark:bg-gray-600"
//             >
//               {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//             </button> */}
//             < ModeToggle/>
//           </div>
//         </div>
//         <div className="mt-10">
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             Experience Like never Before.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useTheme } from '../../components/ThemeProvider'; 
// import { ModeToggle } from '@/components/ModeToggle';
// import Avatar from '../../assets/img/avatar.png';

// const Dashboard = () => {
//   const { theme } = useTheme();

//   return (
//     <div className={`flex h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
//       <div className="bg-orange-500 text-white w-64 space-y-6 py-7 px-2 dark:bg-gray-800">
//         <div className="text-white flex items-center space-x-2 px-4">
//           <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
//             <rect x="10" y="30" width="20" height="70" fill="#3498db" />
//             <rect x="40" y="20" width="20" height="80" fill="#2980b9" />
//             <rect x="70" y="10" width="20" height="90" fill="#2ecc71" />
//             <rect x="100" y="40" width="20" height="60" fill="#27ae60" />
//             <rect x="130" y="50" width="20" height="50" fill="#f39c12" />
//             <text x="70" y="95" fontFamily="Arial, sans-serif" fontSize="20" fill="#333">SKYSCRAPER</text>
//           </svg>
//         </div>
//         <nav>
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">
//             Dashboard
//           </a>
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">
//             Properties
//           </a>
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">
//             Agents
//           </a>
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">
//             Reports
//           </a>
//         </nav>
//       </div>
//       <div className="flex-1 p-10 text-2xl font-bold">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="mr-3 text-gray-700 dark:text-gray-300">YUVAN</span>
//             <img className="w-10 h-10 rounded-full" src={Avatar} alt="Avatar" />
//             <ModeToggle />
//           </div>
//         </div>
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Payments</h2>
//             <ul className="text-gray-700 dark:text-gray-300">
//               <li className="flex justify-between my-2">
//                 <span>Payment 1</span>
//                 <span>$2000</span>
//               </li>
//               <li className="flex justify-between my-2">
//                 <span>Payment 2</span>
//                 <span>$1500</span>
//               </li>
//               <li className="flex justify-between my-2">
//                 <span>Payment 3</span>
//                 <span>$1000</span>
//               </li>
//             </ul>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">User Accounts</h2>
//             <ul className="text-gray-700 dark:text-gray-300">
//               <li className="flex justify-between my-2">
//                 <span>User 1</span>
//                 <span>Active</span>
//               </li>
//               <li className="flex justify-between my-2">
//                 <span>User 2</span>
//                 <span>Inactive</span>
//               </li>
//               <li className="flex justify-between my-2">
//                 <span>User 3</span>
//                 <span>Active</span>
//               </li>
//             </ul>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
//             <ul className="text-gray-700 dark:text-gray-300">
//               <li className="my-2">Activity 1</li>
//               <li className="my-2">Activity 2</li>
//               <li className="my-2">Activity 3</li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Properties Overview</h2>
//             <p>Overview of the properties goes here.</p>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Agents Performance</h2>
//             <p>Performance metrics of agents go here.</p>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Reports</h2>
//             <p>Reports content goes here.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Line, Bar } from 'react-chartjs-2';
// import 'chart.js/auto';
// import { useTheme } from '../../components/ThemeProvider';
// import { ModeToggle } from '@/components/ModeToggle';
// import Avatar from '../../assets/img/avatar.png';

// const Dashboard = () => {
//   const { theme } = useTheme();

//   const lineChartData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Payments',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         backgroundColor: 'rgb(75, 192, 192)',
//         borderColor: 'rgba(75, 192, 192, 0.2)',
//       },
//     ],
//   };

//   const barChartData = {
//     labels: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
//     datasets: [
//       {
//         label: 'Properties Value',
//         data: [500000, 350000, 450000, 600000, 700000],
//         backgroundColor: 'rgba(54, 162, 235, 0.6)',
//       },
//     ],
//   };

//   const chartOptions = {
//     maintainAspectRatio: false,
//     responsive: true,
//   };

//   return (
//     <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
//       <div className="bg-black text-white w-64 space-y-6 py-7 px-2 dark:bg-gray-800">
//         <div className="text-white flex items-center space-x-2 px-4">
//           <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
//             <rect x="10" y="30" width="20" height="70" fill="#3498db" />
//             <rect x="40" y="20" width="20" height="80" fill="#2980b9" />
//             <rect x="70" y="10" width="20" height="90" fill="#2ecc71" />
//             <rect x="100" y="40" width="20" height="60" fill="#27ae60" />
//             <rect x="130" y="50" width="20" height="50" fill="#f39c12" />
//             <text x="70" y="95" fontFamily="Arial, sans-serif" fontSize="20" fill="#333">SKYSCRAPER</text>
//           </svg>
//         </div>
//         <nav>
//           <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">Dashboard</Link>
//           <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">Properties</Link>
//           <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">Agents</Link>
//           <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">Reports</Link>
//         </nav>
//       </div>
//       <div className="flex-1 p-10">
//         <div className="flex justify-between items-center mb-10">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="mr-3 text-gray-700 dark:text-gray-300">YUVAN</span>
//             <img className="w-10 h-10 rounded-full" src={Avatar} alt="Avatar" />
//             <ModeToggle />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Payments</h2>
//             <div className="relative h-64">
//               <Line data={lineChartData} options={chartOptions} />
//             </div>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Properties Overview</h2>
//             <div className="relative h-64">
//               <Bar data={barChartData} options={chartOptions} />
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">User Accounts</h2>
//             <table className="w-full text-gray-700 dark:text-gray-300">
//               <thead>
//                 <tr>
//                   <th className="py-2">User</th>
//                   <th className="py-2">Status</th>
//                   <th className="py-2">Role</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="py-2">User 1</td>
//                   <td className="py-2">Active</td>
//                   <td className="py-2">Admin</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2">User 2</td>
//                   <td className="py-2">Inactive</td>
//                   <td className="py-2">Agent</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2">User 3</td>
//                   <td className="py-2">Active</td>
//                   <td className="py-2">User</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
//             <ul className="text-gray-700 dark:text-gray-300">
//               <li className="my-2">User 1 added a new property</li>
//               <li className="my-2">User 2 updated property status</li>
//               <li className="my-2">User 3 made a payment</li>
//             </ul>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Agents Performance</h2>
//             <ul className="text-gray-700 dark:text-gray-300">
//               <li className="flex justify-between my-2">
//                 <span>Agent 1</span>
//                 <span>20 Sales</span>
//               </li>
//               <li className="flex justify-between my-2">
//                 <span>Agent 2</span>
//                 <span>15 Sales</span>
//               </li>
//               <li className="flex justify-between my-2">
//                 <span>Agent 3</span>
//                 <span>25 Sales</span>
//               </li>
//             </ul>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Reports</h2>
//             <p>Comprehensive reports content goes here.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import { Link } from 'react-router-dom';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { useTheme } from '../../components/ThemeProvider';
import { ModeToggle } from '@/components/ModeToggle';
import Avatar from '../../assets/img/avatar.png';

const Dashboard = () => {
  const { theme } = useTheme();

  // Dummy Data
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Payments',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(255, 159, 64, 0.6)', // Orange color
        borderColor: 'rgba(255, 159, 64, 1)', // Orange color
      },
    ],
  };

  const barChartData = {
    labels: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
    datasets: [
      {
        label: 'Properties Value',
        data: [500000, 350000, 450000, 600000, 700000],
        backgroundColor: 'rgba(255, 159, 64, 0.6)', // Orange color
      },
    ],
  };

  const pieChartData = {
    labels: ['Residential', 'Commercial', 'Industrial'],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} h-screen`}>
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 bg-black text-white w-64 h-full py-7 px-2 dark:bg-gray-800">
        <div className="text-white flex items-center space-x-2 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="80" viewBox="0 0 200 100">
            <rect x="10" y="30" width="20" height="70" fill="#3498db" />
            <rect x="40" y="20" width="20" height="80" fill="#2980b9" />
            <rect x="70" y="10" width="20" height="90" fill="#2ecc71" />
            <rect x="100" y="40" width="20" height="60" fill="#27ae60" />
            <rect x="130" y="50" width="20" height="50" fill="#f39c12" />
            <text x="70" y="95" fontFamily="Arial, sans-serif" fontSize="18" fill="#333">SKYSCRAPER</text>
          </svg>
        </div>
        <nav className="mt-6">
          <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">Dashboard</Link>
          <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">Properties</Link>
          <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">Agents</Link>
          <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">Reports</Link>
        </nav>
      </div>

      {/* Fixed Topbar */}
      <div className="fixed top-0 left-64 right-0 bg-white dark:bg-gray-900 p-4 shadow-md z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center">
            <span className="mr-3 text-gray-700 dark:text-gray-300">YUVAN</span>
            <img className="w-10 h-10 rounded-full" src={Avatar} alt="Avatar" />
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-64 mt-16 flex-1 p-10 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total Properties</h3>
            <p className="text-2xl">150</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Active Agents</h3>
            <p className="text-2xl">20</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Recent Sales</h3>
            <p className="text-2xl">5</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total Revenue</h3>
            <p className="text-2xl">$1,200,000</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Payments</h2>
            <div className="relative h-64">
              <Line data={lineChartData} options={chartOptions} />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Properties Overview</h2>
            <div className="relative h-64">
              <Bar data={barChartData} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">User Accounts</h2>
            <table className="w-full text-gray-700 dark:text-gray-300">
              <thead>
                <tr>
                  <th className="py-2">User</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">User 1</td>
                  <td className="py-2">Active</td>
                  <td className="py-2">Admin</td>
                </tr>
                <tr>
                  <td className="py-2">User 2</td>
                  <td className="py-2">Inactive</td>
                  <td className="py-2">Agent</td>
                </tr>
                <tr>
                  <td className="py-2">User 3</td>
                  <td className="py-2">Active</td>
                  <td className="py-2">User</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <ul className="text-gray-700 dark:text-gray-300">
              <li className="my-2">User 1 added a new property</li>
              <li className="my-2">User 2 updated property status</li>
              <li className="my-2">User 3 made a payment</li>
            </ul>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4">Property Types</h2>
          <div className="relative h-64">
            <Pie data={pieChartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
