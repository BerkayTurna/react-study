import { USERS } from "../data/";

function UserList() {
  return (
    <>
      <ol>
        {USERS.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>
    </>
  );
}

export default UserList;
