import restaurantFood from "../../assets/restauranfood.jpg"

const Hero = () => {
    return<>
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <p>{`We are a family owned Mediterranean restaurant,
    focused on traditional recipes served with a moderns twist`}</p>
    <button>Reserve a Table</button>
    <img src={restaurantFood} alt="Adrian and Mario" />
    </>
}

export default Hero