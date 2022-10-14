import React from 'react';
import "../../css/Contact/contact.css";
import MediaImg from '../../assets/socialmediacontact.jpg';
import home from '../../assets/contacthomeicon.png';
import facebook from '../../assets/contactfbicon.png';
import instagram from '../../assets/contactinstagramicon.png';
import email from '../../assets/contactemailicon.png';

const Contact = () => {
    return(
        <div className='ContactUs' id='CONTACT'>
            <div className="contactHeading">
                <span>Contact Us</span>
            </div>
            <div className="mainContent">
                <div className="detail">
                    <div className="chairperson">
                        <span className="head">Paarth Bassin</span>
                        <span className="position">(Chairperson)</span>
                        <span className="email">email@xyz</span>
                        <span className="phone">1234567890</span>
                    </div>
                    <div className="vicechairperson">
                        <span className="head">Akriti</span>
                        <span className="position">(Vice Chairperosn)</span>
                        <span className="email">wmail@xyz</span>
                        <span className="phone">1236547890</span>
                    </div>
                </div>
                <div className="mediaImg">
                    <img src={MediaImg} alt="" />
                </div>
            </div>
            <div className="footer">
                <div className="card" >
                    <div className="contactIcon emailIcon">
                    <img src={email} alt="" />

                    </div>
                    <div className="cardContent">
                        <span className="contactCardHead">Email:</span>
                        <span className="contactCardDetail">campusblocksbvp@gmail.com</span>
                    </div>
                </div>
                <div className="card">
                    <div className="contactIcon">
                    <img src={home} alt="" />

                    </div>
                    <div className="cardContent">
                        <span className="contactCardHead">Mailing Address:</span>
                        <span className="contactCardDetail">BVCOE Paschim Vihar New delhi</span>
                    </div>
                </div> <div className="card">
                    <div className="contactIcon">
                    <img src={facebook} alt="" />

                    </div>
                    <div className="cardContent">
                        <span className="contactCardHead">Facebook:</span>
                        <span className="contactCardDetail">Campus Block BVP</span>
                    </div>
                </div> <div className="card">
                    <div className="contactIcon">
                    <img src={instagram} alt="" />

                    </div>
                    <div className="cardContent">
                        <span className="contactCardHead">Instagram:</span>
                        <span className="contactCardDetail">Campus Block BVP @campusblockbvp</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;