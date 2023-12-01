import './Specials.css'
import greekSalad from "../../assets/greek salad.jpg"
import bruschetta from "../../assets/bruchetta.svg"
import lemonDessert from "../../assets/lemon dessert.jpg"
import Card from "./Card"

const Specials = () => {

    const plates = [
        {
            title: "Greek Salad",
            picture: greekSalad,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {
            title: "Bruschetta",
            picture: bruschetta,
            description: "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables."
        },
        {
            title: "Lemon Dessert",
            picture: lemonDessert,
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ]

    return<>
    <div className='specials_top'>
        <h1>Specials</h1>
        <button>Online Menu</button>
    </div>
    <div className='specials_cards'>
        {plates.map((item) => {
           return <Card title={item.title} picture={item.picture} description={item.description} />
        })}
    </div>
    </>
}

export default Specials