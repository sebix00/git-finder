import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
const Navigation = () => {
  return (
    <ul className={classes.navigation}>
      <li className={classes["nav-item"]}>
        <NavLink
          //   activeClassName={classes.active}
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${classes.active} ${classes["nav-link"]}`
              : ` ${classes["nav-link"]}`
          }
        >
          Home
        </NavLink>
      </li>
      <li className={classes["nav-item"]}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classes.active} ${classes["nav-link"]}`
              : ` ${classes["nav-link"]}`
          }
          to="/about"
          //   className={classes["nav-link"]}
        >
          About
        </NavLink>
      </li>
      <li className={classes["nav-item"]}>
        <NavLink
          //   activeClassName={classes.active}
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? `${classes.active} ${classes["nav-link"]}`
              : ` ${classes["nav-link"]}`
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
