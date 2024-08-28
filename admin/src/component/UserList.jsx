import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-900">Users</h2>
      <ul className="space-y-4 mt-4">
        {users.map((user, index) => (
          <li key={index} className="p-4 bg-white rounded-md shadow">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div>
                <button
                  onClick={() => onEdit(index)}
                  className="mr-4 text-indigo-600 hover:text-indigo-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
