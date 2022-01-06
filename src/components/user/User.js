import classes from "./User.module.css";
import { useDispatch } from "react-redux";
import { inputAction } from "../../store/inputSlice";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const User = (props) => {
  const dispatch = useDispatch();

  const activeNameHandler = () => {
    dispatch(inputAction.nameHanler(props.login));
  };
  return (
    <div className={classes.user}>
      <img src={props.logo} className={classes.userPhoto} alt="user photo" />
      <p className={classes.userName}>{props.login}</p>

      <Button><Link to="/user" className={classes["btn-more"]} onClick={activeNameHandler}>More</Link></Button>
    </div>
  );
};

export default User;
