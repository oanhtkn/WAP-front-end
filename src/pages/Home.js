import styles from "./Homepage.module.scss";
import homepageImage from "../Images/Homepage.jpg";

const Homepage = () => {
  const handleGetStarted = () => {
    window.location.href = "/tournaments";
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <h1 className={styles.h1}>
        Welcome to the Swiss Chess Tournament Planner!
      </h1>
      <p className={styles.p}>
        Plan and organize your chess tournaments with ease using our intuitive
        tournament management system.
      </p>
      <button className={styles.startButton} onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default Homepage;
