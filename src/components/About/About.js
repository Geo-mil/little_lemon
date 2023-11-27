import MarioAndAdrian from "../../assets/Mario and Adrian A.jpg"
import AdrianAndMario from "../../assets/Mario and Adrian b.jpg"

const About = () => {
    return <>
    <p>{`Welcome to Little Lemon,
    where passion meets the plate in the heart of Chicago!
    Meet our culinary maestros, Mario and Adrian, the dynamic duo behind the magic.
    With a shared love for crafting culinary experiences,
    these two passionate cookers have embarked on a flavorful journey,
    bringing you the best of Mediterranean cuisine with a modern twist.`}</p>
    <p>{`At Little Lemon, we believe that a meal is not just a feast for the senses;
    it's a celebration of life's zest.
    Mario and Adrian infuse their creations with creativity and love,
    transforming traditional Mediterranean flavors into contemporary
    culinary masterpieces that dance on your palate.`}</p>
    <img src={MarioAndAdrian} alt="Mario and Adrian" />
    <img src={AdrianAndMario} alt="Adrian and Mario" />
    </>
}

export default About