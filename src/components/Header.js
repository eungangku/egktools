import styles from "./Header.module.css";

function Header({ children, type = "default" }) {
  let HeaderType = styles.container;
  if (type === "fill") {
    HeaderType = styles.containerFill;
  }
  return (
    <div id="header" className={HeaderType}>
      {children}
    </div>
  );
}

export default Header;
