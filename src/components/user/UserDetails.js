import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./UserDetails.module.css";
import UserRepositories from "./UserRepositories";
import Button from "../UI/Button";
const UserDetails = (props) => {
  const [user, setUser] = useState({});

  async function getUserInfo(name) {
    const res = await axios.get(
      `https://api.github.com/users/${name}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data);
  }
  useEffect(() => {
    getUserInfo(props.name);
  }, []);

  return (
    <>
      <Button classes={classes.btn}>
        <Link to="/" className={classes.link}> &larr; Back to home</Link>
      </Button>
      <div className={classes["user-info"]}>
        <div className={classes["info-left"]}>
          <img
            src={user.avatar_url}
            className={classes["user-photo"]}
            alt={user.login}
          />
          <p className={classes["user-name"]}>{user.name}</p>
          <p className={classes["user-location"]}>{user.location}</p>
        </div>
        <div className={classes["info-right"]}>
          <Button classes={classes["btn-profile"]}>
            <a href={user.html_url} target="_blank" className={classes.link}>
              Visit GitHub profile
            </a>
          </Button>

          <p className={classes["user-name"]}>User name : {user.login}</p>
        </div>
      </div>

      <UserRepositories html={user.repos_url} />
    </>
  );
};

export default UserDetails;
