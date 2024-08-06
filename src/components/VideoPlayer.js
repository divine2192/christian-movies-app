import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer className='react-player' url={url} controls />
    </div>
  );
};

export default VideoPlayer;
