import React from 'react';

const Video = () => {
  return (
    <section className=" bg-white">
      <div className="bg-gray-300 p-4 sm:p-6 rounded-xl shadow-xl mx-4 sm:mx-auto max-w-[93rem]">

        {/* Responsive Video */}
        <div className="relative w-full overflow-hidden rounded-xl">
          <video
            className="w-full h-auto rounded-xl"
            src="/video.mp4" // Ensure video.mp4 is in your public folder
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

      </div>
    </section>
  );
};

export default Video;
