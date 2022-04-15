import styles from "./VideoDurationCalculator.module.css";
import Header from "../components/Header";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";
import Title from "../components/Title";
import ContainerDiv from "../components/ContainerDiv";

function VideoDurationCalculator() {
  return (
    <div>
      <Header>
        <Title>영상 배속 계산기</Title>
        <HeaderBreadcrumb>EGK Tools</HeaderBreadcrumb>
      </Header>
      <ContainerDiv>
        <div className={styles.card}>
          <h3>info</h3>
          <p>영상을 배속할 때의 재생시간을 계산합니다.</p>
        </div>
      </ContainerDiv>
    </div>
  );
}

export default VideoDurationCalculator;
