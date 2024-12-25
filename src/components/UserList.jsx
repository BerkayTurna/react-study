import USERS from "../data/users";

function UserList() {
  return (
    <>
      <ul>
        {USERS.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
