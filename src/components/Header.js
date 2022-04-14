import styles from "./Header.module.css";

function Header({ children, primaryColor }) {
  return (
    <div id="header" className={styles.container}>
      <div>
        <h1
          key={primaryColor}
          style={{
            background: primaryColor,
            background: `-webkit-linear-gradient(to right, ${primaryColor} 0%, #000000 100%)`,
            background: `-moz-linear-gradient(to right, ${primaryColor} 0%, #000000 100%)`,
            background: `linear-gradient(to right, ${primaryColor} 0%, #000000 100%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {children}
        </h1>
      </div>
    </div>
  );
}

export default Header;
