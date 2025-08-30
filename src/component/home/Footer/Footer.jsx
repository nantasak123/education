// image file
import {WhiteLogo} from "../../home/add-on/Logos.jsx"
import google from "../../../assets/Footer/google.svg"
import instargram from "../../../assets/Footer/instagram.svg"
import linkIn from "../../../assets/Footer/linkIn.svg"
import twitter from "../../../assets/Footer/twitter.svg"
// css file
import "../../../css/Home/Footer/Footer.css"
// component
function footerDetail(item){
    return(
        <div className="footer-detail">
            <h3>{item.title}</h3>
            {item.data.map((data) => {
                return <a href="">{data}</a>
            })}
        </div>
    )
}
function SocialLogo(){
    return(
        <div className="footer-logo-social">
            <img src={google} alt="" />
            <img src={instargram} alt="" />
            <img src={linkIn} alt="" />
            <img src={twitter} alt="" />
        </div>
    )
}
function Contact(){
    return (
        <div className="footer-contact">
            <h3>Contact</h3>
            <p>
                <b>Call :</b>
                <span> 971 5546 963</span>
            </p>
            <p>
                <b>Email :</b>
                <span> example@gmail.com</span>
            </p>
            <p>
                <b>Address :</b>
                <span> Dhaka, Bangladesh</span>
            </p>
        </div>
    )
}


function Footer(){
    let footerArray = [
        {
            title:"Services",
            data:["Documentation","Design","Themes","Illustrations"]
        },
        {
            title:"Company",
            data:["About","Terms","Privacy Policy","Careers"]
        },
        {
            title:"Services",
            data:["Select","Services","Payment"]
        },
    ]


    return(
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <WhiteLogo/>
                    <p>
                        Professionally scale cross functional human capital and extensive technology. 
                    </p>
                    <SocialLogo/>
                </div>
                {
                    footerArray.map(footerDetail)
                }
                <Contact/>

            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright©chakri.All right reserved</p>
            </div>
        </footer>
    )
} 

export default Footer;