import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.module.css";
import Header from "./components/Header";
import RandomArt from "./components/RandomArt";
import ClockTab from "./routes/ClockTab";
import ImgUpload from "./routes/ImgUpload";
import RandomArtDetail from "./routes/RandomArtDetail";
import VideoDurationCalculator from "./routes/VideoDurationCalculator";

function Home() {
  const [primaryColor, setprimaryColor] = useState("#000000");
  return (
    <div id="wrap">
      <Header primaryColor={primaryColor} textFillColor={"transparent"}>
        EGK Tools
      </Header>
      <div>
        <div>
          <RandomArt func={(data) => setprimaryColor(data)} />
        </div>
        <div>
          <Link to="/img-upload">Img upload</Link>
        </div>
        <div>
          <Link to="/video-duration-calculator">video-duration-calculator</Link>
        </div>
        <div>
          <Link to="/clock-tab">clock-tab</Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div id="wrap">
      <div id="content">
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
    </div>
  );
}

export default App;
