import "../../css/upcoming events/Upcoming_events.css";
import upcoming_event_image from "../../assets/images/upcoming_event_photo.jpg";
import Web from '../../assets/latest events/webd.jpg'
import { Frame_top } from "../../shared/Frame_top";
import { Frame_bottom } from "../../shared/Frame_bottom";
const Upcoming_event = () => {
  return (
    <>
      <div className="h-fit">
        <div className="text-transparent">h</div>
        <div className="upcoming_event_top_outer">
          <div className="upcoming_event_corner"></div>
          <div className="upcoming_event_top_middle_outer">
            <div className="upcoming_event_top_middle_content upcoming_events_font">
              UPCOMING EVENT
            </div>
            <div className="upcoming_event_top_middle_content_design"></div>
          </div>
          <div className="upcoming_event_corner"></div>
        </div>
        <div className="upcoming_event_middle_outer">
          <div className="upcoming_event_middle_left">
            <div className="upcoming_event_middle_left_heading_outer">
              <div className="upcoming_event_middle_left_heading upcoming_events_font">
                event name
              </div>
              <div className="upcoming_event_middle_left_heading_design"></div>
            </div>
            <div className="upcoming_event_middle_left_content_outer">
              <div className="upcoming_event_middle_left_content content_font">“Being first in the search result organically in Google is the dream of all website owners.”✨

Want to indulge in web development but don't know where to begin with??

Don't worry!!🤩
Campus blocks BVP is here with the most awaited event " Roadmap to Web Dev "👨‍💻in association with Coding Blocks.🌟<br/>
Event Details:-<br/>
🗓 Date- 19 October(Wednesday)<br/>
⏱ Time-1:30 pm<br/>
📍 Platform-Offline, College Library<br/><br/>

🎤 Speaker :- Kartik Mathur

</div>
            </div>
          </div>
          <div className="upcoming_event_middle_right_outer">
            <div className="upcoming_event_middle_right_photo_outer">
              <div className="upcoming_event_frame_top">
                <Frame_top />
              </div>
              <div>
                <img
                  className="upcoming_event_middle_right_photo upcoming_event_photo"
                  src={Web}
                  alt="event..."
                ></img>
              </div>
              <div className="upcoming_event_frame_bottom">
                <Frame_bottom />
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming_event_middle_bottom_outer">
          <div className="upcoming_event_corner"></div>
          <div className="upcoming_event_bottom_button">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdtecp9VAeTQoZ60CumRDsKd2Iyqb-d1e0c_g_q1zjeNdsfWA/viewform" target="_blank"><button>Register Now</button></a>
          </div>
          <div className="upcoming_event_corner"></div>
        </div>
        <div className="text-transparent">b</div>
      </div>
    </>
  );
};
export default Upcoming_event;