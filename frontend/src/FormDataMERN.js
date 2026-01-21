import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FormDataMERN = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5005/users')
      .then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.map(u => (
        <div key={u._id}>
          <p>{u.firstName} - {u.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FormDataMERN;
