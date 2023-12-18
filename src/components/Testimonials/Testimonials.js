import Testimony from "./Testimony"
import CarlosRamirez from "../../assets/Carlos Ramirez.jpg"
import LucaMoretti from "../../assets/Luca Moretti.jpg"
import OliviaHarper from "../../assets/Olivia Harper.jpg"
import SophiaRodriguez from "../../assets/Sophia Rodriguez.jpg"
import "./Testimony.css"

const Testimonials = () => {
    const opinions = [
        {
            rating: 4,
            photo: SophiaRodriguez,
            name: "Sophia Rodriguez",
            opinion: "The Greek Salad at Little Lemon is a flavor explosion! Fresh, vibrant, and a true taste of the Mediterranean—this dish is a must-try."

        },
        {
            rating: 5,
            photo: LucaMoretti,
            name: "Luca Moretti",
            opinion: "Mario and Adrian's passion for cooking shines through every dish at Little Lemon, making it my go-to spot for an unforgettable Mediterranean culinary experience in Chicago."

        },
        {
            rating: 5,
            photo: CarlosRamirez,
            name: "Carlos Ramirez",
            opinion: "Little Lemon is where innovation meets tradition, and the Lemon Cake is proof. A sweet symphony that transports you to the sun-soaked shores with every heavenly bite."

        },
        {
            rating: 5,
            photo: OliviaHarper,
            name: "Olivia Harper",
            opinion: "I've never experienced Mediterranean cuisine quite like this. Little Lemon's modern twist on classics is a culinary journey that keeps me coming back for more. Bravo!"

        },
    ]

    return (<div className="testimonySection">
        <h1>Testimonials</h1>
        <div className="testimonials">
            {opinions.map((item, index) => (
            <Testimony key={index} {...item} />
            ))}
        </div>
        </div>
    );
}

export default Testimonials