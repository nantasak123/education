// image file
import ctaArrow from "../../../assets/CTA/cta-arrow.svg"
import downArrow from "../../../assets/CTA/down-arrow.svg"
// css file 
import "../../../css/Home/CTA/CTA.css"
//  component 
import {Button} from "../../home/add-on/Button.jsx"

function CTA(){
    return(
        <div className="cta">
            <div className="cta-1">
                <h2>
                    Create Free Account & Get Register
                    <img src={ctaArrow} alt="" />
                    <img src={downArrow} id="cta-mobile-image" alt="" />
                </h2>
                <Button status='show' text="Register Now" color="orang"/>
            </div>
            <div className="cta-2"></div>
        </div>
    )
}

export default CTA;