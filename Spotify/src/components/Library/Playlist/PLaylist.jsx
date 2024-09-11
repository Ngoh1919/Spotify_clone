import React from 'react'

const PLaylist = () => {
  return (
    <div className='element'>
        <button className='play_song'>
           <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className="Svg_music"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
        </button>
        <div className='playlist_text'>
            <h4>My Playlist #<span>2</span></h4>
            <h5>Playlist.Aghet Seh</h5>
        </div>
    </div>
  )
}

export default PLaylist