import Logo from "../assets/images/logo.png";
import "../css/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="w-screen bg-black text-white">
        <div className="navbar_outer">
          <div className="navbar_left">
            <img src={Logo} alt="logo..."></img>
          </div>
          <div className="navbar_right font view_mobile">
            <a href="/">
              <div className="navbar_right_content">Home</div>
            </a>
            <a href="/">
              <div className="navbar_right_content">About</div>
            </a>
            <a href="/">
              <div className="navbar_right_content">Team</div>
            </a>
            <a href="/">
              <div className="navbar_right_content">Events</div>
            </a>
            <a href="/">
              <div className="navbar_right_content">Contact Us</div>
            </a>
          </div>
          <div className="view">
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>

              <ul className="menu__box">
                <li>
                  <a className="menu__item" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/">
                    About
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/">
                    Team
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/">
                    Events
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
