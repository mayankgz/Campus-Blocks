import '../css/Team2.css';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import Fade from 'react-reveal/Fade';
import Example from '../assets/examplepic.png'
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import { Flip } from 'react-reveal';

const Team2 = () => {
    return (
        <div className='TEAMSS'>
        <Fade top>
            <div id='ben'><h1 className='headings'>MEET THE TEAM</h1></div></Fade>
            <div id='CORE'>
                <div className='Core_tem_section'>
                    <Fade bottom big delay={500} duration={1500}><div className='CORE_TEAM_img'><Flip delay={1000}><img src={Example} /></Flip></div></Fade>
                    <div className='details_Core'>
                       <LightSpeed left delay={1000} duration={3000}> <div className='details_name_Core'>
                            Mayank Gagneja<br /> (Chairperson)
                        </div></LightSpeed>
                        <LightSpeed right delay={2000} duration={3000}><div className='details_links'>
                            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                        </div></LightSpeed>

                    </div></div>
                <div className='Core_tem_section'>
                    <Fade bottom big duration={2000}><div className='CORE_TEAM_img'><img src={Example} />
                    </div></Fade><div className='details_Core'>
                        {/* <div className='details_name_Core'>
                            NAME<br /> (Mentor)
                        </div>
                        <div className='details_links'>
                            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                        </div> */}<LightSpeed left delay={1000} duration={1500}> <div className='details_name_Core'>
                            NAME<br /> (Mentor)
                        </div></LightSpeed>
                        <LightSpeed right delay={2000} duration={1000}><div className='details_links'>
                            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                        </div></LightSpeed>

                    </div>
                </div>
              <div className='Core_tem_section'> <Fade bottom big delay={800} duration={2000}><div className='CORE_TEAM_img'><img src={Example} /></div> </Fade>
                    <div className='details_Core'>
                        {/* <div className='details_name_Core'>
                            NAME<br /> (Vice-Chairperson)
                        </div>
                        <div className='details_links'>
                            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                        </div> */}
                        <LightSpeed delay={1500} duration={2300}> <div className='details_name_Core'>
                            NAME<br /> (Vice-Chairperson)
                        </div></LightSpeed>
                        <LightSpeed right delay={2300} duration={3000}><div className='details_links'>
                            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                        </div></LightSpeed>

                    </div>
                </div>


            </div><Fade top delay={500}><h1 className='headings' id="Technical">TECHNICAL</h1></Fade>
            <div id="Tech_team">
                <div className='head'>

                    <div className='Core_tem_section'>
                       <Fade bottom delay={1000} duration={1000}> <div className='CORE_TEAM_img'><img src={Example} /></div></Fade>
                        <div className='details_Core'>
                            <LightSpeed delay={2000} duration={1000}><div className='details_name_Core'>
                                NAME<br /> (Tech Head)
                            </div></LightSpeed>
                            <LightSpeed right delay={2000} duration={1000}><div className='details_links'>
                                <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                                <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                            </div></LightSpeed>

                        </div></div>
                    {/* <div className='Core_tem_section'>
                        <div className='CORE_TEAM_img'><img src={Example} />
                        </div><div className='details_Core'>
                            <div className='details_name_Core'>
                                NAME<br /> (Tech Head)
                            </div>
                            <div className='details_links'>
                                <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                                <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                            </div>

                        </div>
                    </div> */}
                    <div className='Core_tem_section'>
                       <Fade bottom delay={1000} duration={1000}> <div className='CORE_TEAM_img'><img src={Example} /></div></Fade>
                        <div className='details_Core'>
                            <LightSpeed delay={2000} duration={1000}><div className='details_name_Core'>
                                NAME<br /> (Tech Head)
                            </div></LightSpeed>
                            <LightSpeed right delay={2000} duration={1000}><div className='details_links'>
                                <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                                <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                            </div></LightSpeed>

                        </div></div>
                </div>

            </div>
            <div className='execom'>
                <div className='Core_tem_section'>
                    <div className='CORE_TEAM_img'><img src={Example} />
                    </div><div className='details_Core'>
                        <div className='details_name_Core'>
                            NAME<br /> (Tech executive)
                        </div>
                        <div className='details_links'>
                            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                        </div>

                    </div>
                </div>
                <div className='Core_tem_section'>
                    <div className='CORE_TEAM_img'><img src={Example} />
                    </div><div className='details_Core'>
                        <div className='details_name_Core'>
                            NAME<br /> (Tech executive)
                        </div>
                        <div className='details_links'>
                            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                        </div>

                    </div>
                </div>
                <div className='Core_tem_section'>
                    <div className='CORE_TEAM_img'><img src={Example} />
                    </div><div className='details_Core'>
                        <div className='details_name_Core'>
                            NAME<br /> (Tech executive)
                        </div>
                        <div className='details_links'>
                            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                        </div>

                    </div>
                </div>
                <div className='Core_tem_section'>
                    <div className='CORE_TEAM_img'><img src={Example} />
                    </div><div className='details_Core'>
                        <div className='details_name_Core'>
                            NAME<br /> (Tech executive)
                        </div>
                        <div className='details_links'>
                            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                        </div>

                    </div>
                </div>



            </div>
            <Fade top delay={2000} duration={2000}><h1 className='headings' id="Technical">DESIGN</h1></Fade>
            <div id='Design_team'>
                <div className='head'>

                <div className='Core_tem_section'>
                       <Fade bottom delay={1000} duration={1000}> <div className='CORE_TEAM_img'><img src={Example} /></div></Fade>
                        <div className='details_Core'>
                            <LightSpeed delay={2000} duration={1000}><div className='details_name_Core'>
                                NAME<br /> (Design Head)
                            </div></LightSpeed>
                            <LightSpeed right delay={2000} duration={1000}><div className='details_links'>
                                <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                                <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                            </div></LightSpeed>

                        </div></div>
                        <div className='Core_tem_section'>
                       <Fade bottom delay={1000} duration={1000}> <div className='CORE_TEAM_img'><img src={Example} /></div></Fade>
                        <div className='details_Core'>
                            <LightSpeed delay={2000} duration={1000}><div className='details_name_Core'>
                                NAME<br /> (Design Head)
                            </div></LightSpeed>
                            <LightSpeed right delay={2000} duration={1000}><div className='details_links'>
                                <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                                <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                            </div></LightSpeed>

                        </div></div>
                </div>
                <div className='execom'>
                <div className='Core_tem_section'>
                    <div className='CORE_TEAM_img'><img src={Example} />
                    </div><div className='details_Core'>
                        <div className='details_name_Core'>
                            NAME<br /> (design executive)
                        </div>
                        <div className='details_links'>
                            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                        </div>

                    </div>
                </div>
                <div className='Core_tem_section'>
                    <div className='CORE_TEAM_img'><img src={Example} />
                    </div><div className='details_Core'>
                        <div className='details_name_Core'>
                            NAME<br /> (design executive)
                        </div>
                        <div className='details_links'>
                            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                        </div>

                    </div>
                </div>
                <div className='Core_tem_section'>
                    <div className='CORE_TEAM_img'><img src={Example} />
                    </div><div className='details_Core'>
                        <div className='details_name_Core'>
                            NAME<br /> (design executive)
                        </div>
                        <div className='details_links'>
                            <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                        </div>

                    </div>
                </div>



            </div>
            </div>
            <Fade top delay={2000} duration={2000}><h1 className='headings' id="Technical">Operations</h1></Fade>
            <div id='Operation_team'>
            <div className='Core_tem_section'>
                       <Fade bottom delay={1000} duration={1000}> <div className='CORE_TEAM_img'><img src={Example} /></div></Fade>
                        <div className='details_Core'>
                            <LightSpeed delay={2000} duration={1000}><div className='details_name_Core'>
                                NAME<br /> (Operations Head)
                            </div></LightSpeed>
                            <LightSpeed right delay={2000} duration={1000}><div className='details_links'>
                                <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                                <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                            </div></LightSpeed>

                        </div></div>
                        <div className='Core_tem_section'>
                       <Fade bottom delay={1000} duration={1000}> <div className='CORE_TEAM_img'><img src={Example} /></div></Fade>
                        <div className='details_Core'>
                            <LightSpeed delay={2000} duration={1000}><div className='details_name_Core'>
                                NAME<br /> (Operations Head)
                            </div></LightSpeed>
                            <LightSpeed right delay={2000} duration={1000}><div className='details_links'>
                                <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                                <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                            </div></LightSpeed>

                        </div>
                </div>
            </div>
            <Fade top delay={2000} duration={2000}><h1 className='headings' id="Technical">Event Management</h1></Fade>
            <div id='EM_team'>
            <div className='Core_tem_section'>
                       <Fade bottom delay={1000} duration={1000}> <div className='CORE_TEAM_img'><img src={Example} /></div></Fade>
                        <div className='details_Core'>
                            <LightSpeed delay={2000} duration={1000}><div className='details_name_Core'>
                                NAME<br /> (Event Management Head)
                            </div></LightSpeed>
                            <LightSpeed right delay={2000} duration={1000}><div className='details_links'>
                                <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                                <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                            </div></LightSpeed>

                        </div></div>
                        {/* <div className='Core_tem_section'>
                       <Fade bottom delay={1000} duration={1000}> <div className='CORE_TEAM_img'><img src={Example} /></div></Fade> */}
                        {/* <div className='details_Core'>
                            <LightSpeed delay={2000} duration={1000}><div className='details_name_Core'>
                                NAME<br /> (Event Management Head)
                            </div></LightSpeed>
                            <LightSpeed right delay={2000} duration={1000}><div className='details_links'>
                                <a href='https://www.google.com'><i class="fa-brands fa-linkedin"></i></a>
                                <a href='https://www.google.com'><i class="fa-brands fa-square-instagram"></i></a>
                            </div></LightSpeed>

                        </div> */}
                
            </div>

        </div>
    )

}
export default Team2;