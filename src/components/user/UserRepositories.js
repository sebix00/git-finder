import axios from "axios";
import { useState, useEffect } from "react";
import UserLink from "./UserLink";
import classes from "./UserRepositories.module.css"

const UserRepositories = (props) => {
  const [repoInfo, setRepoInfo] = useState([]);
  async function getUserRepositorie(html) {
    if (!html) return;
    console.log(html);
    const resp = await axios(html);
    console.log(resp);
    const info = resp.data.map((resp) => {
      return { name: resp.name, link: resp.html_url };
    });
    setRepoInfo(info);
  }
  useEffect(() => {
    getUserRepositorie(props.html);
  }, [props.html]);

  const repoHandler = () => {
    getUserRepositorie(props.html);
  };
  const links = repoInfo.map((info, index) => (
    <UserLink link={info.link} name={info.name} key={index} />
  ));

  return (

      <div className={classes.repo}>
        <h1 className={classes.header}>Repositores:</h1>
        <ul className={classes.repo}>{links}</ul>
      </div>

  );
};
export default UserRepositories;
