import { useState, useEffect } from "react";
import { Constants } from "../Constants";

export const useUser = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(Constants.FETCH_USERS_API);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return users;
};
