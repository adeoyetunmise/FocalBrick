import React, { useRef, useEffect } from 'react';

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Video playback error:", err);
      });
    }
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls
      >
        <source
          src="https://player.vimeo.com/external/374873240.sd.mp4?s=1f458abc7ffde2cb16e622f879f54bb8422b382f&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
