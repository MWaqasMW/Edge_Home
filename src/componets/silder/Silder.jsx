import Serach from "../search/Search"
import "./silder.css"
const Silder = () => {
    return (
        <div className="main">
            <div className="silder_main pt-5 ">
                <div className="container">
                    <h2>
                        A Life time discount? it's Genius
                    </h2>
                    <p>Get rewarded for you - unlock instant of 10% or more with a free EadgBooking account</p>
                    <button className="p-2 ">Sign In/Register</button>
                </div>
            </div>
            <Serach />
        </div>
    )
}

export default Silder