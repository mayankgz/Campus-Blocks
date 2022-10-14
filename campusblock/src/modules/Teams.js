import '../css/Team.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Example from '../assets/examplepic.png';
// import Card from './card.js';
import TechTeam from '../assets/TheTechTeam.png'
import Bbox from './box';
const Team=()=>{
    return(
        <div id='TEAM'>
            <Box className='Team_heading'> 
            <h1 id='Team_text'>MEET the Team</h1>
            </Box>
            <Box  id='content'sx={{ flexGrow: 1}}>
      <Grid container spacing={2} sx={{border:'none'}}>
        <Grid Paper xs={12} md={12}>
          <Paper  elevation={0} className='circle'> <div className='circle_pic'> <img src={Example}/></div><br/>
          {/* <div className='details'>
            <div className='details_name'>
                NAME<br/> (MENTOR)
            </div>
            <div className='details_links'>
            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div> */}
          </Paper>
        </Grid>
        <Grid paper xs={5} md={5}>
          <Paper elevation={0} className='circle'><div  id='vice' className='circle_pic'> <img src={Example}/></div><br/>
          
          <div className='details'>
            <div className='details_name'>
                NAME<br/> (Chairperson)
            </div>
            <div className='details_links'>
            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
            </div>
          </div>
          </Paper>
        </Grid>
        <Grid Paper xs={2}>
            <paper>
            <div className='details'>
            <div className='details_name'>
                NAME<br/> (MENTOR)
            </div>
            <div className='details_links'>
            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
            </paper>

        </Grid>
        <Grid  paper xs={5} md={5}>
          <Paper elevation={0}><div id='vice' className='circle_pic'> <img src={Example}/></div><br/>
          <div className='details'>
            <div className='details_name'>
                NAME<br/> (Vice-Chairperson)
            </div>
            <div className='details_links'>
            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
            </div>
          </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    <Bbox/>
   
        </div>
    )

}
export default Team;