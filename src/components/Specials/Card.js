import './Specials.css'

const Card = (props) => {
    return <div className="card">
        <img src={props.picture} alt={props.title} />
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <h4><a href="/">Order Online</a></h4>

    </div>
}

export default Card