import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Booking = () => {

    const [isOpen,setIsOpen]=useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
            BOOKING
        </div>
    )
}

export default Booking


