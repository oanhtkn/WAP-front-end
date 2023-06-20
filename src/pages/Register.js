import { Link, NavLink } from "react-router-dom";
import Card from "../components/ui/Card";
import styles from "./RegisterPage.module.scss";
import logo from "../Images/logo.jpg";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.logoContainer}>
        <NavLink to="/" className={styles.logoLink}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <h2 className={styles.logoText}>
            <span className={styles.blackText}>Chess</span>
            <span className={styles.redText}>TournaHub</span>
          </h2>
        </NavLink>
      </div>
      <div className={styles.rformContainer}>
        <h1 className={styles.h1Register}>Create a new account</h1>
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterPage;
