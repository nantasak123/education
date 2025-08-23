// css file 
import "../../../css/Home/Header/HeaderContainer.css"
// image
import art from "../../../assets/header/art.svg"
import email from "../../../assets/header/email.svg"
import heart from "../../../assets/header/heart.svg"
import member1 from "../../../assets/header/member/angry-young-boy-screaming-with-closed-eyes-isolated-orange-wall.jpg"
import member2 from "../../../assets/header/member/everything-is-all-right.jpg"
import member3 from "../../../assets/header/member/male-dancer-posing-while-making-hip-hop-move.jpg"
import member4 from "../../../assets/header/member/unpleased-young-caucasian-boy.jpg"

// component
import {Button} from "../add-on/Button"

function MessageBox(){
    return(
        <div className="message-box">
                <img src={email} alt="" />
                <h6>
                    Congratulation!
                </h6>
                <p>You got a new email</p>   
        </div>
    )
}
function MemberBox(props){
    return(
        <div className="member-box">
            <img src={heart} alt="" />
            <h2>{props.member}</h2>
            <p>Happy Student</p>
            <div className="member-box-student">
                <img src={member1} className="member1" alt="#" />
                <img src={member2} className="member2" alt="#" />
                <img src={member3} className="member3" alt="#" />
                <img src={member4} className="member4" alt="#" />
            </div>
        </div>
    )
}


function HeaderContainer(){
    return(
        <div className="header-container">
            <div className="header-container-1">
                <h1>
                    Start Your
                    Future
                    Education               
                </h1>
                <p>
                    Credibly redefine distinctive total linkage vis-a-vis multifunc
                    data. Phosfluorescently impact goal-oriented strategic                   
                </p>
                <Button text="Discover More" color="orang" />
            </div>
            <div className="header-container-2">
                <div className="header-container-2-box">
                    <MessageBox/>
                    <MemberBox member="40k+"/>
                    <img src={art} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeaderContainer;