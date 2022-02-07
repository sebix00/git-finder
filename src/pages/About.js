import classes from "./About.module.css"
const About = () => {
  return (
    <div>
      <h1 className={classes.title}>About this project</h1>
      <div className={classes.content}>
      <p>In this project I use GitHub Api.</p>
      <p>
        This GitHub finder app helps you find github users. It allows you to
        view the user's repositories and provides direct links to them as well
        as a link to the user's profile.
      </p>
      </div>
     
      <h2 className={classes.title}>Technologies I used</h2>
      <ul>
        <li className={classes.item}>React</li>
        <li className={classes.item}>Redux</li>
        <li className={classes.item}>Redux Toolkit</li>
        <li className={classes.item}>React Router</li>
        <li className={classes.item}>React Hooks</li>
      </ul>
    </div>
  );
};

export default About;
