import { useEffect, useState } from "react";
import { Table, Spinner, Button } from "react-bootstrap";
import userService from "../../services/userService";
import UsersInterface from "./UserInterface";

function Users() {
  const [users, setUsers] = useState<UsersInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = userService.getAllUsers();
    request
      .then(({ data }) => setUsers(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));

    return () => cancel();
  }, []);

  const handleClick = (id: number) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== id));

    userService.deleteUser(id).catch((err) => {
      setUsers(originalUsers);
      setError(err.message);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: 0,
      name: "Valentine",
      username: "valx",
      email: "something@gmail.com",
    };

    setUsers([newUser, ...users]);

    userService
      .createUser(newUser)
      .then(({ data }) => setUsers([...users, data]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (id: number) => {
    const newUser = { name: "Yung Leo", username: "something" };
    const originalUsers = [...users];

    setUsers(
      users.map((user) => (user.id === id ? { ...user, ...newUser } : user))
    );

    userService.updateUser(id, newUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      {loading && <Spinner animation="border" variant="success" />}
      {error && <p className="error">{error}</p>}

      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="danger" onClick={() => handleClick(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="primary" onClick={addUser}>
        Add User
      </Button>

      <Button variant="primary" onClick={() => updateUser(2)}>
        Update User
      </Button>
    </div>
  );
}

export default Users;
