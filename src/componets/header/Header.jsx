import React from 'react'
import Navbar from '../navbar/Navbar'
import { MdFlight } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import "./header.css"
const Header = () => {
    return (
        <>
            <Navbar />
            <div className="h_main overflow-hidden">
            <div className='container header_main'>
                <div className="row m-0 p-0">
                    <span className='d-flex gap-1 col-2 align-items-center'>
                        <FaBed size={25}/>
                        <div>Stay</div>
                    </span>
                    <span className='d-flex gap-1 col-2 align-items-center'>
                        <MdFlight size={25}/>
                        <div>Filgts</div>
                    </span>
                    <span className='d-flex gap-1 col-2 align-items-center'>
                        <FaCar size={25}/>
                        <div>Car rentails</div>
                    </span>
                    <span className='d-flex gap-1 col-2 align-items-center'>
                        <FaBed/>
                        <div>Attraction</div>
                    </span>
                    <span className='d-flex gap-1 col-2'>
                        <FaTaxi size={25}/>
                        <div>Airport Taxi</div>
                    </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header