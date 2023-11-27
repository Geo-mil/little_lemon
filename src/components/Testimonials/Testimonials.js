import Testimony from "./Testimony"

const Testimonials = () => {
    const opinions = [
        {
            rating: 5,
            photo: "",
            name: "",
            opinion: ""

        },
        {
            rating: 5,
            photo: "",
            name: "",
            opinion: ""

        },
        {
            rating: 5,
            photo: "",
            name: "",
            opinion: ""

        },
        {
            rating: 5,
            photo: "",
            name: "",
            opinion: ""

        },
    ]
    return <>
    <h1>Testimonials</h1>
    {opinions.map((item) => {
        return <Testimony></Testimony>
    })}
    </>
}

export default Testimonials