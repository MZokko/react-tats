import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import React,{ useState} from 'react'

const Booking = () => {
    
    const [isOpen,setIsOpen]=useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
 

          <div>booking</div>
        </>
    )
}
export default Booking
