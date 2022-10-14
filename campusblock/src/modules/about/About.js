import "../../css/about/About.css";
import { ReactComponent as Img } from "../../assets/svg/about-us.svg";
import Fade from 'react-reveal/Fade'
const About = () => {
  return (
    <div id='ABOUT'>
      <div className="h-fit">
        <div className="about_outer">
          <div className="about_svg_outer">
            <div className="about_svg_inner">
            <Fade delay={1000} duration={1000}>
              <Img />
            </Fade>
            </div>
          </div>
          <div className="about_content_outer">
            <div className="about_content_outer_box about_content_outer"><Fade delay={1500} duration={1000}>
              <div className="about_content_inner">
              
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                dicta voluptatum. Minus nemo voluptatibus ut obcaecati, tempora
                animi corrupti vel officiis, unde fuga sequi veniam facere!
                Corporis voluptates aspernatur similique numquam dolorum, autem
                dicta inventore debitis odio, fugit mollitia maxime tenetur
                neque laudantium libero quia. Fugiat reiciendis modi dicta
                laudantium.
              </div></Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;