import "./Testimony.css"

const Testimony = ({ photo, name, rating, opinion }) => {

    // Function to generate stars based on the rating
  const renderStars = () => {
    const stars = Array.from({ length: rating }, (_, index) => (
      <span key={index}>&#9733;</span>
    ));
    return stars;
  };

    return (
      <div className="testimony">
        <img src={photo} alt={name} />
        <h3>{name}</h3>
        <div className="rating">{renderStars()}</div>
        <p>{opinion}</p>
      </div>
    );
  };

  export default Testimony;