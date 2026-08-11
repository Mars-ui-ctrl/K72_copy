import React from 'react'
import Video from '../components/home/Video'
import Homeherotext from '../components/home/Homeherotext.jsx'
import Homebottomtext from '../components/home/Homebottomtext.jsx'



const Home = () => {
    return (
        <div className='overflow-hidden'>
            <div className='h-screen w-screen fixed'>
                <Video />
            </div>
            <div className='relative h-screen w-screen flex flex-col justify-between items-center'>
                <Homeherotext />
                <Homebottomtext />
            </div>
        </div>
    )
}

export default Home
