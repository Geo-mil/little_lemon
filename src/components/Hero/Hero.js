import './Hero.css'
import restaurantFood from "../../assets/restauranfood.jpg"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate()

    return<div className="hero">
        <div className='grid_cell'>
        <div className="text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>{`We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.`}</p>
            <button onClick={() => navigate('/BookingPage')} aria-label="Reserve a Table">Reserve a Table</button>
        </div>
        </div>
        <div className='grid_cell'>
        <div className="hero_image">
            <img src={restaurantFood} alt="Restaurant food" />
        </div>
        </div>
    </div>
}

export default Hero