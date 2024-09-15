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
const getEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };
const Videos: React.FC<{ videos: Video[] }> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);

  const handleVideoClick = (video: Video) => {
      setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const toggleDescription = (videoId: string) => {
    
    setExpandedVideo(expandedVideo === videoId ? null : videoId);
  };
  const truncateText = (text: string, maxLines: number) => {
    const lineHeight = 1.5; // Approximate line height for truncation
    const maxHeight = lineHeight * maxLines;
    return (
      <div style={{ maxHeight: `${maxHeight}em`, overflow: "hidden" }}>
        {text}
      </div>
    );
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
              src={`/thumbnails/${video.id}.png`}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{video.title}</h3>
              <p className="text-sm text-gray-600">
              {expandedVideo === video.id
                  ? video.description
                  : truncateText(video.description, 2)}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleDescription(video.id)}}
                className="text-sm text-gray-400 hover:text-gray-500"
              >
                {expandedVideo === video.id ? "Less" : "More"}
              </button>
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
            <iframe
              className="w-full h-64"
              src={getEmbedUrl(selectedVideo.url)}
              allow="autoplay; fullscreen"
              allowFullScreen
              title={selectedVideo.title}
            ></iframe>
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
