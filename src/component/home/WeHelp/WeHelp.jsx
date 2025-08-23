// image file 
import cicleBox from "../../../assets/we-help/cicle-box.svg"
import play from "../../../assets/we-help/play.svg"
// css file
import "../../../css/Home/WeHelp/WeHelp.css"
// component
import {Button} from "../add-on/Button.jsx"

function WeHelp(){
    return(
        <div className="we-help">
            <div className="we-help-1">
                <div className="we-help-cicle-1">
                    <div className="we-help-cicle-2"></div>
                    <h1>
                        <img src={play} alt="" />
                    </h1>
                </div>
            </div>
            <div className="we-help-2">
                <h2>
                    We Help to Create
                    Possibility & Success
                    in Your Career!                    
                </h2>
                <p>
                    Continually administrate process-centric human capital rather than bleeding-edge methodologies. Distinctively supply accurate methods of empowerment before.
                </p>
                <Button text="Get Started Today" color="orang"/>
            </div>

        </div>
    )
}

export default WeHelp;