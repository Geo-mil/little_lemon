import logo from "../../assets/Logo.svg"
import Nav from "./Nav"

function Header() {
    return <header>
        <img style={{marginRight: "20px", maxWidth: "100%"}} src={logo} alt="logo"></img>
        <Nav/>
    </header>
}

export default Header