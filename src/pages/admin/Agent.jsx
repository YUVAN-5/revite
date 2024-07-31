import React from 'react';

const agents = [
  {
    id: 1,
    name: 'John Doe',
    profileImage: 'https://via.placeholder.com/150',
    contact: 'john@example.com',
    propertiesManaged: 35,
  },
  {
    id: 2,
    name: 'Jane Smith',
    profileImage: 'https://via.placeholder.com/150',
    contact: 'jane@example.com',
    propertiesManaged: 45,
  },
  {
    id: 3,
    name: 'Sam Johnson',
    profileImage: 'https://via.placeholder.com/150',
    contact: 'sam@example.com',
    propertiesManaged: 25,
  },
];

const Agent = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Agents</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div key={agent.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src={agent.profileImage} alt={`${agent.name}`} />
            <h3 className="text-xl font-semibold text-center">{agent.name}</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">{agent.contact}</p>
            <p className="text-center text-gray-600 dark:text-gray-400">Properties Managed: {agent.propertiesManaged}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agent;
