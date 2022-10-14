import "../../css/about/About.css";
import { ReactComponent as Img } from "../../assets/svg/about-us.svg";

export const About = () => {
  return (
    <>
      <div className="h-fit">
        <div className="about_outer">
          <div className="about_svg_outer">
            <div className="about_svg_inner">
              <Img />
            </div>
          </div>
          <div className="about_content_outer">
            <div className="about_content_outer_box about_content_outer">
              <div className="about_content_inner">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                dicta voluptatum. Minus nemo voluptatibus ut obcaecati, tempora
                animi corrupti vel officiis, unde fuga sequi veniam facere!
                Corporis voluptates aspernatur similique numquam dolorum, autem
                dicta inventore debitis odio, fugit mollitia maxime tenetur
                neque laudantium libero quia. Fugiat reiciendis modi dicta
                laudantium.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
