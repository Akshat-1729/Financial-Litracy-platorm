// /src/app/tutorials/VideoPage.tsx

"use client"; // Ensure this is marked as a client-side component

import { useState } from "react";

// Video type definition
interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
}

const Videos: React.FC<{ videos: Video[] }> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="p-8">
      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video-card bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
            onClick={() => handleVideoClick(video)}
          >
            <img
              src={`/thumbnails/${video.id}.jpg`}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Video Playback */}
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-lg overflow-hidden w-11/12 max-w-2xl">
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold">{selectedVideo.title}</h2>
              <button
                className="text-gray-700 text-2xl font-bold"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <video className="w-full" controls>
              <source src={selectedVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
