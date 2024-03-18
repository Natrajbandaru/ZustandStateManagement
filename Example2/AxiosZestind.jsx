import create from 'zustand'
import axios from 'axios'

const useUserStore = create(set => ({
  loading: false,
  users: [],
  error: '',
  fetchUsers: async () => {
    set({ loading: true })
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      const users = response.data.map(user => user.id)
      set({ users, loading: false, error: '' })
    } catch (error) {
      set({ loading: false, users: [], error: error.message })
    }
  }
}))

// import React, { useEffect } from 'react';
// import useUserStore from './userStore';

// const UserComponent = () => {
//   const { loading, users, error, fetchUsers } = useUserStore();

//   useEffect(() => {
//     fetchUsers(); // Fetch users when the component mounts
//   }, [fetchUsers]);

//   return (
//     <div>
//       <h1>Users</h1>
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>Error: {error}</div>
//       ) : (
//         <ul>
//           {users.map(userId => (
//             <li key={userId}>{userId}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UserComponent;

export default useUserStore
