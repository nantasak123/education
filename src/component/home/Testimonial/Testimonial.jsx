//  package
import { useState } from "react";
// css file
import "../../../css/Home/Testimonial/Testimonial.css"


// component
import TestContain2 from "./TestContain2.jsx";
import { reviewScore } from "./test-function.jsx";


function Testimonial(){
    let reviewsData = [
        {
            image:"https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
            name:"Jaquon Hart",
            job:"Civil Engineer",
            review:"“With Edu, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”",
            score:4
        },
        {
            image:"https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Jaquon Hart",
            job:"Civil Engineer",
            review:"“With Edu, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”",
            score:5
        }
    ]
    let [btnLeft,setBtnLeft] = useState(false)
    let [btnRight,setBtnRight] = useState(true)


    let getClassNameLeft = () => {
        if(btnLeft == true ){
            return "button-on"
        }
        else{
            return "button-off"
        }
    }
    let getClassNameRight = () => {
        if(btnRight == true){
            return "button-on"
        }
        else{
            return "button-off"
        }
    }

    function checkStatus(status){
        if(status == true){
            return
        }else{
            setBtnLeft(!btnLeft),setBtnRight(!btnRight)
        }
    }



    function reviewBox(item,index){
        return(
            <div className={`review-box review-${index}`} id={getClassNameLeft()+"-"+index}>
                <div className="review-profile">
                    <h2>
                        <img src={item.image} alt="" />
                        <div className="review-profile-name">
                            <h4>{item.name}</h4>
                            <p>{item.job}</p>
                        </div>
                    </h2>
                    <div className="review-score">
                        {reviewScore(item.score)}
                    </div>
                </div>
                <p>
                    {item.review}
                </p>
            </div>
        )
    }


    return(
        <div className="testimonial">
            <div  className="testimonial-container-1">
                {
                    reviewsData.map(reviewBox)
                }
                <div className="review-button">
                    <button className={getClassNameLeft()} onClick={() => {checkStatus(btnLeft)}} >&#8592;</button>
                    <button className={getClassNameRight()} onClick={() => {checkStatus(btnRight)}}>&#8594;</button>
                </div>
            </div>
            <TestContain2/>
        </div>
    )
}

export default Testimonial;