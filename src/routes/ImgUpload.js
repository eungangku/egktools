import Header from "../components/Header";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";
import Title from "../components/Title";
import AlertBox from "../components/AlertBox";
import { FaInfoCircle } from "react-icons/fa";

function ImgUpload() {
  return (
    <div>
      <Header>
        <Title primaryColor="#b6e2ff" textFillColor="transparent">
          사진 업로드
        </Title>
        <HeaderBreadcrumb>EGK Tools</HeaderBreadcrumb>
      </Header>
      <AlertBox type={"icon"}>
        <h3>
          <FaInfoCircle />
        </h3>
        <p>Imgur에 업로드하고 링크를 알려드릴게요</p>
      </AlertBox>
    </div>
  );
}

export default ImgUpload;
