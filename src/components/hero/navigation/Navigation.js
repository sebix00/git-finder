import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
const Navigation = () => {
  return (
    <ul className={classes.navigation}>
      <li className={classes["nav-item"]}>
        <Link to="/" className={classes["nav-link"]}>
          Home
        </Link>
      </li>
      <li className={classes["nav-item"]}>
        <Link to="/about" className={classes["nav-link"]}>
          About
        </Link>
      </li>
      <li className={classes["nav-item"]}>
        <Link to="/contact" className={classes["nav-link"]}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
