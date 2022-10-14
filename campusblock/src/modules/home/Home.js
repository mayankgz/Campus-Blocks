import { Background_animation } from "./Background_Animation";
import Logo from "../../assets/images/logo.png";
import "../../css/home/Home.css";
import Typewriter from "typewriter-effect";
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import Zoom from 'react-reveal/Zoom'
import RubberBand from 'react-reveal/RubberBand';

const Home = () => {
  return (
    <div id='HOME'>
      <div className="w-screen">
        <div className="home_outer">
          <Background_animation />
          <div className="set home_inner">
            <div className="home_inner_logo">
            <Flip delay={700}>
              <img src={Logo} alt="logo..."></img></Flip>
            </div>
            <Fade delay={1500}>
            <RubberBand delay={1700} duration={1200}>
            <div className="home_inner_content font_society">
              CAMPUS BLOCKS BVP
            </div></RubberBand></Fade>
            <Zoom delay={1500}>
            <div className="home_inner_typewriter font">
              <span className="home_inner_typewriter_gap">CODE YOUR WAY TO </span>
              <span>
                <Typewriter
                  options={{
                    strings: ["SUCCESS", "SHINE", "REDEEM"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div></Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
