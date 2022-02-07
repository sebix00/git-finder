import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <h1 className={classes.title}>Contact</h1>
      <ul className={classes.list}>
        <li className={classes.item}>
          <p className={classes.dataName}>Address:</p>{" "}
          <p className={classes.dataContent}>Venus, New York 10001</p>
        </li>
        <li className={classes.item}>
          <p className={classes.dataName}>Email:</p>{" "}
          <p className={classes.dataContent}>email@address.com</p>
        </li>
        <li className={classes.item}>
          {" "}
          <p className={classes.dataName}>Phone:</p>{" "}
          <p className={classes.dataContent}>000-000-000</p>
        </li>
      </ul>
    </>
  );
};
export default Contact;
