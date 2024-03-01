import Nav from "./nav"
import Hero from "./hero"
import Project from "./project"
import Testimonial from "./testimonial"
import Footer from "./footer"
const main = () => {
    return(
        <div className="bg-blue-400">
            <Nav/>
            <Hero/>
            <Project/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}

export default main