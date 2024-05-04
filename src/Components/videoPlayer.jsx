import React from 'react';

const VideoPlayer = ({ videoUrl, onClose }) => {
  return (
    <div className="video-player-container">
      <video controls autoPlay>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={onClose} className="close-button">Close</button>
    </div>
  );
};

export default VideoPlayer;
