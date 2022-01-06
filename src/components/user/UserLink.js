import classes from "./UserLink.module.css";
const UserLink = (props) => {
    console.log(props.link)
  return (
    <li className={classes["link-item"]}>
  
      <a href={props.link} className={classes.link} target={"_blank"}>{props.name} </a>
    </li>
  );
};

export default UserLink;
