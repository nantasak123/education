// image file
import martoni from "../../../assets/band-logos/martoni.svg"
import realEstate from "../../../assets/band-logos/real-estate.svg"
import proMedia from "../../../assets/band-logos/pro-media.svg"
import studio from "../../../assets/band-logos/studio.svg"
import maxdino from "../../../assets/band-logos/maxdino.svg"
// css file
import "../../../css/Home/BandLogos/BandLogos.css"

function BandLogos(){
    let bands = [martoni,realEstate,proMedia,studio,maxdino]

    return(
        <div className="band-logos">
            <h1>Trusted Companies</h1>
            {
                bands.map((item) => {
                    return <img src={item} alt="" />
                })
            }
        </div>
    )
}

export default BandLogos;