import {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {Banner} from '../components/Banner'

function Home() {

    const [isOpen,setIsOpen]=useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Banner/>
          <div>HOME</div>
        </>
    )
}

export default Home
 