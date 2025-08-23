// css file
import "../../../css/Home/add-on/Button.css"

export function Button(props){
    return(
        <button className={`add-on-button ${props.color}`}>
            {props.text}
        </button>
    )
}