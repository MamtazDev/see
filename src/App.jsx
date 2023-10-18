import "./App.css";
import Accordion from "./components/Accordion";
import Assets from "./components/Assets";
import Banner from "./components/Banner";
import Brand from "./components/Brand";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import SomeWork from "./components/SomeWork";
import Technician from "./components/Technician";
import Telepromter from "./components/Telepromter";
import Together from "./components/Together";
import Video from "./components/Video";
import VideoAssist from "./components/VideoAssist";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Project />
      <Assets />
      <SomeWork />
      <Brand />
      <VideoAssist />
      <Telepromter />
      <Technician />
      <Video />
      <Accordion />
      <Together />
      <FollowUs />
      <Footer />
    </div>
  );
}

export default App;
