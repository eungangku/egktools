import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import styles from "./App.module.css";
import Header from "./components/Header";
import RandomArt from "./components/RandomArt";
import Title from "./components/Title";
import ContainerDiv from "./components/ContainerDiv";
import { Mobile, Tablet, Desktop } from "./components/Responsive";
import { SiImgur } from "react-icons/si";
import { RiSpeedFill } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import ClockTab from "./routes/ClockTab";
import ImgUpload from "./routes/ImgUpload";
import RandomArtDetail from "./routes/RandomArtDetail";
import VideoDurationCalculator from "./routes/VideoDurationCalculator";

function Home() {
  const [primaryColor, setprimaryColor] = useState("#000000");

  return (
    <div id="wrap">
      <Header>
        <Title primaryColor={primaryColor} textFillColor={"transparent"}>
          EGK Tools
        </Title>
      </Header>
      <div>
        <ContainerDiv margin="15px 15px 30px 15px">
          <RandomArt func={(data) => setprimaryColor(data)} />
        </ContainerDiv>
        <ContainerDiv>
          <Mobile>
            <div id="toolList" className={styles.toolList}>
              <Link to="/img-upload" style={{ background: "#b6e2ff" }}>
                <SiImgur />
                <p>사진 업로드</p>
              </Link>
              <Link to="/video-duration-calculator" style={{ background: "lightgoldenrodyellow" }}>
                <RiSpeedFill />
                <p>영상 배속 계산기</p>
              </Link>
              <Link to="/clock-tab">
                <FiClock />
                <p>시계</p>
              </Link>
            </div>
          </Mobile>
          <Tablet>
            <div id="toolList" className={styles.toolList} style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
              <Link to="/img-upload" style={{ background: "#b6e2ff" }}>
                <SiImgur />
                <p>사진 업로드</p>
              </Link>
              <Link to="/video-duration-calculator" style={{ background: "lightgoldenrodyellow" }}>
                <RiSpeedFill />
                <p>영상 배속 계산기</p>
              </Link>
              <Link to="/clock-tab">
                <FiClock />
                <p>시계</p>
              </Link>
            </div>
          </Tablet>
        </ContainerDiv>
      </div>
    </div>
  );
}

function App() {
  return (
    <div id="wrap">
      <Router>
        <Routes>
          <Route path="/random-art/:id" element={<RandomArtDetail />} />
          <Route path="/img-upload" element={<ImgUpload />} />
          <Route path="/video-duration-calculator" element={<VideoDurationCalculator />} />
          <Route path="/clock-tab" element={<ClockTab />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
