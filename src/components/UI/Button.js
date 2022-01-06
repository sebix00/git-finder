import classes from "./Button.module.css"
const Button = (props) => {
  return <button onClick={props.onClick} className={`${classes.button} ${props.classes}`}>{props.children}</button>;
};

export default Button;