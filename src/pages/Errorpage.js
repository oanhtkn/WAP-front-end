import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  const handleGoBack = () => {
    window.location.href = "/";
  };

  return (
    <div className={styles.errorPage}>
      <div className={styles.content}>
        <h1 className={styles.errorTitle}>Error Page</h1>
        <p className={styles.errorText}>Oops! Something went wrong.</p>
        <button className={styles.errorButton} onClick={handleGoBack}>
          Go Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
