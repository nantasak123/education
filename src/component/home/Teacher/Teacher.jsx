// css file
import "../../../css/Home/Teacher/Teacher.css"
// image file
import google from "../../../assets/teacher/google.svg"
import instargram from "../../../assets/teacher/instargram.svg"
import linkIn from "../../../assets/teacher/linkIn.svg"
import twitter from "../../../assets/teacher/twitter.svg"

// component
import {Button} from "../../../component/home/add-on/Button.jsx"


function teacherProfile(item){
    return(
        <div className="teacher-profile">
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>{item.role}</p>
            <div className="teacher-social">
                <img src={google} alt="" />
                <img src={twitter} alt="" />
                <img src={instargram} alt="" />
                <img src={linkIn} alt="" />
            </div>
        </div>
    )
}

function Teacher(){
    let teacherData = [
        {
            image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
            name:"Shaapir Prio",
            role:"Assistant Director"
        },
        {
            image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
            name:"Sellina",
            role:"Director"
        },
        {
            image:"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
            name:"John Smith",
            role:"Assistant Director"
        }
    ]


    return(
        <div className="teacher">
            <div className="teacher-topic">
                <h2>
                    Intriduce with Our Famous Teacher
                </h2>
                <Button text="View All Teachers" color="orang" />
            </div>
            <div className="teacher-container">
                {
                    teacherData.map(teacherProfile)
                }
            </div>
        </div>
    )
}

export default Teacher;