import React from 'react';
import PropTypes from 'prop-types';

const getEmbedUrl = (url) => {
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}`;
};

const VideoPlayer = ({ url }) => {
  const embedUrl = getEmbedUrl(url);

  return (
    <div className="video-player">
      <iframe
        width="100%"
        height="480"
        src={embedUrl}
        title="Movie Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoPlayer;
