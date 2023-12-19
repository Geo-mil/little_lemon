import HomePage from "./HomePage"
import BookingPage from "./Booking/BookingPage"
import MenuPage from "./MenuPage"
import OrderOnlinePage from "./OrderOnlinePage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Main() {
    return <main>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/MenuPage" element={<MenuPage />}></Route>
                <Route path="/BookingPage" element={<BookingPage />}></Route>
                <Route path="/OrderOnlinePage" element={<OrderOnlinePage />}></Route>
            </Routes>
        </Router>
    </main>
}

export default Main