import { FaBed } from "react-icons/fa"
import "./search.css"
import { DateRangePicker } from 'react-date-range';
import { useState } from "react";
const Serach = () => {

    const [open, setOpen] = useState(false)
    const handleOpenDate = () => {
        setOpen(!open)
    }
    const [state, setState] = useState([
        {
            startDate: new Date(),
            // endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    return (<>
        <div className="container d-flex justify-content-center align-items-center search_main">
            <div className="search_container container">
                <div className="col"><input type="text" placeholder="Where are you going?" onClick={handleOpenDate} /></div>
                <div className="col"><input type="text" placeholder="check in date" name="" id="" /></div>
                <div className="col"><input type="text" name="" id="" /></div>
                <div className="search-btn"><button className="search-btn">Serach</button></div>
            </div>
        </div >{open &&
            <DateRangePicker
                onChange={item => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                style={{ zIndex: 5, backgroundColor: "#fff" }}
                direction="horizontal"
            />
        }
    </>
    )
}

export default Serach