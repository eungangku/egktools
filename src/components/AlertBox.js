import styles from "./AlertBox.module.css";
import ContainerDiv from "./ContainerDiv";

function AlertBox({ children, type = "text" }) {
  return (
    <ContainerDiv>
      <div className={type == "icon" ? styles.cardIcon : styles.card}>{children}</div>
    </ContainerDiv>
  );
}

export default AlertBox;
