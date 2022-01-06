import githubIcon from "../../assets/iconmonstr-github-1.svg";
import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={classes.hero}>
      <h1>GitHub Finder</h1>
      <img src={githubIcon} className={classes.gitLogo} alt="github icon" />
    </div>
  );
};

export default Hero;
