import styles from "./Title.module.css";

function Title({ children, primaryColor = "#000000", textFillColor = "black" }) {
  return (
    <h1
      className={styles.title}
      key={primaryColor}
      style={{
        background: primaryColor,
        background: `-webkit-linear-gradient(to right, ${primaryColor} 0%, #000000 100%)`,
        background: `-moz-linear-gradient(to right, ${primaryColor} 0%, #000000 100%)`,
        background: `linear-gradient(to right, ${primaryColor} 0%, #000000 100%)`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: textFillColor,
      }}
    >
      {children}
    </h1>
  );
}

export default Title;
