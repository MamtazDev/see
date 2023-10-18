import "./App.css";
import Accordion from "./components/Accordion";
import Assets from "./components/Assets";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Brand from "./components/Brand";
import Client from "./components/Client";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Reviews from "./components/Reviews";
import SomeWork from "./components/SomeWork";
import StageWest from "./components/StageWest";
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
      <StageWest />
      <Client />
      <Video />
      <Reviews />
      <Blog />
      <Accordion />
      <Together />
      <FollowUs />
      <Footer />
    </div>
  );
}

export default App;
