import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import Card from "../components/ui/Card";
import styles from "./LoginPage.module.scss";
import logo from "../Images/logo.jpg";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <h2 className={styles.logoText}>
            <span className={styles.blackText}>Chess</span>
            <span className={styles.redText}>TournaHub</span>
          </h2>
        </Link>
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.h1Login}>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
