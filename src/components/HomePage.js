import About from "./About/About"
import Hero from "./Hero/Hero"
import Specials from "./Specials/Specials"
import Testimonials from "./Testimonials/Testimonials"

function HomePage() {
    return <>
        <div>{<Hero />}</div>
        <div className="specials">{<Specials />}</div>
        <div className="testimonials">{<Testimonials />}</div>
        <div className="about">{<About/>}</div>
    </>
}

export default HomePage