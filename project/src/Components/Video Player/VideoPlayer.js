import React, { useRef } from 'react'
import "./VideoPlayer.css"
import video_player from  "./7971025-uhd_3840_2160_24fps.mp4"

function VideoPlayer({playState , setPlayState}) {

const player=useRef(null)
console.log(player)

const closePlayer=(e)=>{
  if(e.target === player.current){
    setPlayState(false)
  }
}

  return (
    <div className={`video-player ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
      <video src={video_player} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
