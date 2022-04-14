import styles from "./Header.module.css";

function Header({ children }) {
  return (
    <div id="header" className={styles.container}>
      <div>
        <h1>{children}</h1>
      </div>
    </div>
  );
}

export default Header;
