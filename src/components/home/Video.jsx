import React from 'react';
import bgVideo from '../../../public/background_video.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='object-cover h-full w-full' src={bgVideo} autoPlay muted loop></video>
    </div>
  )
}

export default Video
