import { useSelector } from "react-redux";
import User from "./User";
import UserWraper from "./UserWraper";


const Users = () => {
  const users = useSelector((state) => state.input.users);
  const userName = useSelector((state) => state.input.name);

  let items = "";
  if (users.length >= 1) {
    items = users.map((user) => (
      <User
        login={user.login}
        id={user.id}
        logo={user.avatar_url}
        key={user.id}
      />
    ));
  }

  return <UserWraper>{items}</UserWraper>;
};

export default Users;
