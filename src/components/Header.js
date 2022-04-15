import styles from "./Header.module.css";

function Header({ children }) {
  return (
    <div id="header" className={styles.container}>
      <div>{children}</div>
    </div>
  );
}

export default Header;
