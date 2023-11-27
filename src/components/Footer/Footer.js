import './Footer.css';
import logo from "../../assets/Logo.svg"
import Nav from "../Header/Nav"
import Social from "./Social"
import Contact from "./Contact"

function Footer() {
    return <footer>
        <img src={logo} alt="logo"></img>
        <Nav>Navigation</Nav>
        <Contact/>
        <Social/>
    </footer>
}

export default Footer