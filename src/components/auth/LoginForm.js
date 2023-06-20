import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const authHandler = () => {
    fetch();
  };

  return (
    <form className={styles.containerForm}>
      <label className={styles.formLabel} htmlFor="usernameInput">
        Username
      </label>
      <input className={styles.formInput} name="username" id="usernameInput" />
      <label className={styles.formLabel} htmlFor="passwordInput">
        Password
      </label>
      <input
        className={styles.formInput}
        type="password"
        name="password"
        id="passwordInput"
      />
      <button className={styles.formBtn} type="submit">
        Log in
      </button>
      <p className={styles.createAccountText}>
        Don't have an account yet?
        <br />
        <a href="register" className={styles.link}>
          Click here to create one!
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
