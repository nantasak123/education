// package
import { Link } from "react-router-dom";
// component
import { BlackLogo } from "../add-on/Logos";
import { Button } from "../add-on/Button";
// css file
import "../../../css/Home/Header/NavBar.css"

function NavBar(){
    return(
        <div className="nav-bar">
            <div className="nav-bar-menu">
                <BlackLogo/>
                <Link className="no-underline nav-link">Home
                <hr /></Link>
                <Link className="no-underline nav-link">Admission</Link>
                <Link className="no-underline nav-link">Academic</Link>
            </div>
            <Button text="Contact Now" color="black"/>
        </div>
    )
}

export default NavBar;