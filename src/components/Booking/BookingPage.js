import BookingForm from "./BookingForm"
import './Booking.css'

const BookingPage = (props) => {
    return<>
        <h1 style={{background: "#495e49", margin:"0px", padding:"20px", color:"#EDEFEE"}}>Reservations</h1>
        <div className="booking">
            <BookingForm props={props} />
        </div>
        </>
}

export default BookingPage