import styles from "./HeaderBreadcrumb.module.css";

function HeaderBreadcrumb({ children }) {
  return <span className={styles.span}> {children}</span>;
}

export default HeaderBreadcrumb;
