import React from 'react';

const Video: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        
        
      >
        <source 
          src="/video.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
