// css file
import "../../../css/Home/Blog/Blog.css"
// component
import {Button} from "../../../component/home/add-on/Button.jsx"

function blogCard(item){
    return(
        <div className="blog-card-contain">
            <h1>
                <img src="" alt="" />
            </h1>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <a href="#" className="no-underline">Learn More &#8594;
</a>
        </div>
    )
}

function Blog(){
    let deoartment = [
        {
            title:"Artificial Intelligence",
            description:"Assertively parallel task synergistic deliverables after high-quality."
        },
        {
            title:"Civil Engineering",
            description:"Assertively parallel task synergistic deliverables after high-quality."
        },
        {
            title:"Business Studies",
            description:"Assertively parallel task synergistic deliverables after high-quality."
        },
    ]


    return(
        <div className="blog">
            <div className="blog-container">
                <h2>We Have Most of Popular Departments</h2>
                <div className="blog-card">
                    {
                        deoartment.map(blogCard)
                    }
                </div>
                <Button status='show' text="View All Department" color="orang" />
            </div>
            
        </div>
    )
}

export default Blog;