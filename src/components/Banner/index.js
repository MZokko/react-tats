import { useState, useEffect } from 'react';
import axios from 'axios';

export const Banner = () => {

const [bannerVideo,setBannerVideo]=useState(null);
const [loading,setLoading]=useState(false);

const bannerfnc = async ()=> {
    try {
        const bannerVideo = await axios
        .get('gs://tattoo-project-a031d.appspot.com/inkBanner.mp4')
        .then(res=>{console.log(res)})
    } catch (e) {
        console.log(e)
    }
}

    useEffect(() => { 
        bannerfnc()
    }, [])

    return (
        <div>
            
        </div>
    )
}
