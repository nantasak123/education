// component
import NavBar from "./NavBar";
import HeaderContainer from "./HeaderContainer";
// css file 
import '../../../css/Home/Header/Header.css'

function Header(){
    return(
        <header>
            <NavBar/>
            <HeaderContainer/>
        </header>
    )
}

export default Header;