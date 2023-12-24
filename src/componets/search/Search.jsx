import { FaBed } from "react-icons/fa"
import "./search.css"
const Serach = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center search_main">
            <div className="search_container container">
                <div className="col"><input type="text" placeholder="Where are you going?"/></div>
                <div className="col"><input type="text" placeholder="check in date" name="" id="" /></div>
                <div className="col"><input type="text" name="" id="" /></div>
                <div className="search-btn"><button className="search-btn">Serach</button></div>
            </div>
        </div>
    )
}

export default Serach