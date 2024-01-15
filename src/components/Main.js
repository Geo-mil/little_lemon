import HomePage from "./HomePage"
import BookingPage from "./Booking/BookingPage"
import MenuPage from "./MenuPage"
import OrderOnlinePage from "./OrderOnlinePage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useReducer } from "react";
import fakeAPI from "../utils/fakeAPI";
import ConfirmedBooking from "./Booking/ConfirmedBooking";

const reducer = (state, action) => {
    if (action.type === 'new times'){
        state.times = fakeAPI.fetchAPI(new Date(action.date))
    }
    return state.times
}

const initialState = fakeAPI.fetchAPI(new Date())

function Main() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const changeTimes = (newdate) => {
        dispatch({type: "new times", date: newdate})
    }

    const sendForm = () => fakeAPI.submitAPI()

    return <main>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/MenuPage" element={<MenuPage />}></Route>
                <Route path="/BookingPage" element={<BookingPage props={{state, changeTimes, sendForm}} />}></Route>
                <Route path="/OrderOnlinePage" element={<OrderOnlinePage />}></Route>
                <Route path="/ConfirmedBooking" element={<ConfirmedBooking />}></Route>
            </Routes>
        </Router>
    </main>
}

export default Main