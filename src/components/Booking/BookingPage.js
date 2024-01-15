import BookingForm from "./BookingForm"
import './Booking.css'

const BookingPage = (props) => {
    return <div className="booking">
    <BookingForm props={props} />
    </div>
}

export default BookingPage