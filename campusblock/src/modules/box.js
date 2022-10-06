import Cb from '../assets/cb.jpg'
import '../css/Team.css'
const Box=()=>{
    return(
        <div id="teams_box">
        <div id='tech_box'>
        <img src={Cb}/>
        <h1>TECH TEAM</h1>
        </div>
        <div id='tech_box'>
            <img src={Cb}/>
            <h1>Design Team</h1>
            </div>
            <div id='tech_box'>
            <img src={Cb}/>
            <h1>Operations Team</h1>
            </div>
            <div id='tech_box'>
            <img src={Cb}/>
            <h1>Event Management Team</h1>
            </div>

        </div>
    )
}
export default Box;