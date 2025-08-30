// package
import { Link } from "react-router-dom";
import { useState } from "react";
// component
import { BlackLogo } from "../add-on/Logos";
import { Button } from "../add-on/Button";
// css file
import "../../../css/Home/Header/NavBar.css"
// image file
import menu from "../../../assets/header/menu.svg"

function showMenu(status){
    console.log(status)
    if(status == true){
        return "open"
    }else{
        return "close"
    }
}



function NavBar(){
    let [openMenu,setOpenMenu] = useState(false)
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
            {/* mobile menu bar */}
            <div className={`mobile-menu-box-${showMenu(openMenu)}`}>
                <Link className={`no-underline`}>Home</Link>
                <Link className={`no-underline`}>Admission</Link>
                <Link className={`no-underline`}>Academic</Link>
            </div>
            <button className={`mobile-bar menu-${showMenu(openMenu)}`} onClick={() => setOpenMenu(!openMenu)}>
                <img src={menu} alt="" />
            </button>
        </div>
    )
}

export default NavBar;