import { useState, useMemo } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Carousel from "react-material-ui-carousel";
import Carousel from "react-mui-carousel-artemm";
import "./App.css";
import styles from "./App.module.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header";
import RandomArt from "./components/RandomArt";
import RandomUnsplash from "./components/RandomUnsplash";
import Title from "./components/Title";
import ContainerDiv from "./components/ContainerDiv";
import Quotes from "./components/Quotes";
import { Mobile, Tablet, Desktop } from "./components/Responsive";
import ClockTab from "./routes/ClockTab";
import ImgUpload from "./routes/ImgUpload";
import RandomArtDetail from "./routes/RandomArtDetail";
import VideoDurationCalculator from "./routes/VideoDurationCalculator";
import PomodoroTimer from "./routes/PomodoroTimer";
import { SiImgur } from "react-icons/si";
import { RiSpeedFill } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function ToolList({ style = {} }) {
  return (
    <div id="toolList" className={styles.toolList} style={style}>
      <Link to="/img-upload" style={{ background: "#a5d6a7" }}>
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
      <Link to="/pomodoro-timer">
        <FiClock />
        <p>뽀모도로 타이머</p>
      </Link>
    </div>
  );
}

function Home() {
  const [primaryColor, setprimaryColor] = useState("#000000");

  return (
    <div id="wrap">
      <Header>
        {/* <Title primaryColor={primaryColor} textFillColor={"transparent"}>
          EGK Tools
        </Title> */}
        <Title>EGK Tools</Title>
      </Header>
      <div>
        <ContainerDiv margin="15px 15px 30px 15px">
          <Carousel interval={8000} indicators={false}>
            <RandomUnsplash />
            <RandomArt func={(data) => setprimaryColor(data)} />
            <Quotes backgroundColor={primaryColor} />
          </Carousel>
        </ContainerDiv>
        <ContainerDiv>
          <Mobile>
            <ToolList />
          </Mobile>
          <Tablet>
            <ToolList style={{ gridTemplateColumns: "1fr 1fr 1fr" }} />
          </Tablet>
          <Desktop>
            <ToolList style={{ gridTemplateColumns: "1fr 1fr 1fr" }} />
          </Desktop>
        </ContainerDiv>
        <ContainerDiv></ContainerDiv>
      </div>
    </div>
  );
}

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="wrap">
        <Router>
          <Routes>
            <Route path="/random-art/:id" element={<RandomArtDetail />} />
            <Route path="/img-upload" element={<ImgUpload />} />
            <Route path="/video-duration-calculator" element={<VideoDurationCalculator />} />
            <Route path="/clock-tab" element={<ClockTab />} />
            <Route path="/pomodoro-timer/rest" element={<PomodoroTimer type={"rest"} time={60 * 6} />} />
            <Route path="/pomodoro-timer" element={<PomodoroTimer type={"focus"} time={60 * 30} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
