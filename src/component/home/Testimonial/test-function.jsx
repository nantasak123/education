// image file
import star from "../../../assets/testimonial/star.svg"

export function reviewScore(score){
    return (
    <div>
      {[...Array(score)].map(() => (
        <img  src={star} alt="star" />
      ))}
    </div>
    )
}

