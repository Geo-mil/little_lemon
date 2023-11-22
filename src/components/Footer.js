import logo from "../assets/Logo.svg"

function Footer({children}) {
    return <footer>
        <img src={logo} alt="logo"></img>
        {children}
    </footer>
}

export default Footer