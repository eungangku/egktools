import styles from "./VideoDurationCalculator.module.css";
import Header from "../components/Header";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";
import Title from "../components/Title";
import ContainerDiv from "../components/ContainerDiv";
import { FaInfoCircle } from "react-icons/fa";
import AlertBox from "../components/AlertBox";

function VideoDurationCalculator() {
  return (
    <div>
      <Header>
        <Title primaryColor="#ebeb63" textFillColor="transparent">
          영상 배속 계산기
        </Title>
        <HeaderBreadcrumb>EGK Tools</HeaderBreadcrumb>
      </Header>
      <AlertBox type={"icon"}>
        <h3>
          <FaInfoCircle />
        </h3>
        <p>영상을 배속할 때의 재생시간을 알려드려요</p>
      </AlertBox>
    </div>
  );
}

export default VideoDurationCalculator;
