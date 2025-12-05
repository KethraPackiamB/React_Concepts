import { useUser } from "../utils/useUser";

export const UserTable = () => {
  const users = useUser();

  return (
    <div>
      <h1>User Details</h1>
      <table>
        <thead>
          <tr>
            <th>User_ID</th>
            <th>User_Name</th>
            <th>User_Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
