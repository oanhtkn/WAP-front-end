import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  return (
    <div className={styles.registerForm}>
      <div className={styles.formContainer}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" className={styles.input} />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" className={styles.input} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className={styles.input} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className={styles.input} />

        <button className={styles.button}>Register</button>
      </div>
    </div>
  );
};

export default RegisterForm;
