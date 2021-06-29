import {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Home() {

    const [isOpen,setIsOpen]=useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <div>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
 

          <div>HOME</div>
        </div>
    )
}

export default Home
