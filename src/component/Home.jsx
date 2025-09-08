// component
import Header from "./home/Header/Header";
import BandLogos from "./home/band-logos/BandLogos";
import WeHelp from "./home/WeHelp/WeHelp";
import Blog from "./home/Blog/Blog";
import Teacher from "./home/Teacher/Teacher";
import Testimonial from "./home/Testimonial/Testimonial";
import CTA from "./home/CTA/CTA";
import Footer from "./home/Footer/Footer";
// css file
import "../css/Home/root.css"

function Home(){
    return (
        <div className="home">
            <Header/>
            <BandLogos/>
            <WeHelp/>
            <Blog/>
            <Teacher/>
            <Testimonial/>
            <CTA/>
            <Footer/>
        </div>
    )
}

export default Home;