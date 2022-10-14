import "../../css/upcoming events/Upcoming_events.css";
import upcoming_event_image from "../../assets/images/upcoming_event_photo.jpg";
import { Frame_top } from "../../shared/Frame_top";
import { Frame_bottom } from "../../shared/Frame_bottom";

export const Upcoming_event = () => {
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
              <div className="upcoming_event_middle_left_content content_font">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor iste architecto sapiente recusandae eius quidem sint repellendus voluptatem ea consectetur inventore, itaque quo quia qui, fugit laboriosam beatae cum. Itaque voluptates officia provident, id nemo harum odio dolorem nihil vel in obcaecati sequi atque doloribus possimus odit excepturi.</div>
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
                  src={upcoming_event_image}
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
            <a href="/"><button>Register Now</button></a>
          </div>
          <div className="upcoming_event_corner"></div>
        </div>
        <div className="text-transparent">b</div>
      </div>
    </>
  );
};
