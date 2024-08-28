import React, { useState } from 'react';
import UserForm from '../component/UserForm';
import UserList from '../component/UserList';

function Admin() {
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addUser = (user) => {
    if (editingIndex !== null) {
      const updatedUsers = users.map((u, index) =>
        index === editingIndex ? user : u
      );
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setUsers([...users, user]);
    }
  };

  const editUser = (index) => {
    setEditingIndex(index);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 shadow-xl mt-20 ">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">User Management</h1>
      <UserForm
        onSubmit={addUser}
        user={editingIndex !== null ? users[editingIndex] : null}
      />
      <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
    </div>
  );
}

export default Admin;
