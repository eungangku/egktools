import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import ClockTab from "./routes/ClockTab";
import ImgUpload from "./routes/ImgUpload";
import RandomArt from "./routes/RandomArt";
import Header from "./components/Header";
import VideoDurationCalculator from "./routes/VideoDurationCalculator";

function Home() {
  return (
    <div id="wrap">
      <div>
        <div>
          <RandomArt />
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
      <Header>EGK Tools</Header>

      <div id="content">
        <Router>
          <Routes>
            <Route path="/random-art/:id" element={<RandomArt />} />
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
