import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.scss";
import logo from "../../Images/logo.jpg";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
        <Link to="/" className={styles.logoLink}>
          <h2 className={styles.logoText}>
            <span className={styles.blackText}>Chess</span>
            <span className={styles.redText}>TournaHub</span>
          </h2>
        </Link>
      </div>
      <div className={styles.navBox}>
        <ul className={styles.navList}>
          <li>
            <NavLink
              exact
              to="/"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tournaments"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Tournaments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Login
            </NavLink>
          </li>
          <li>
            <span className={styles.navSeparator}>|</span>
          </li>
          <li>
            <NavLink
              to="/register"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
