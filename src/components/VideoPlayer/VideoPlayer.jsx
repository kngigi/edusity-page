import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/7971025-hd_1920_1080_24fps.mp4';


const VideoPlayer = ({play, setPlay}) => {

  const player = useRef(null);

  const closePlayer = (e) => {
    if(e.target === player.current){
      setPlay(false);

    }
  }

  return (
    <div className={`video-player ${play ? "" : "hide"}`}
                    ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer