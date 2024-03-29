function Nav({children}) {
    return <nav>
        <ul>
            {children && <h5>{children}</h5>}
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/MenuPage">Menu</a></li>
            <li><a href="/BookingPage">Reservations</a></li>
            <li><a href="/OrderOnlinePage">Order Online</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </nav>
}

export default Nav