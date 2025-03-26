import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

const VideoSection = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
    };

    const handleCloseVideo = () => {
        setIsVideoPlaying(false);
    };

    return (
        <div className='w-full min-h-screen flex items-center justify-center py-10'>
            {isVideoPlaying ? (
                <div className='w-full h-[80vh] md:h-[90vh] flex items-center justify-center bg-black'>
                    <div className='relative w-full h-full flex items-center justify-center'>
                        <iframe
                            className='w-full h-full'
                            src="https://u.pcloud.link/publink/show?code=XZsKLV5ZkTC8chxgebQd6gJhdkMuW7zzmfBy" // Vimeo embed URL with autoplay
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />
                        <div onClick={handleCloseVideo} className='bg-white absolute top-5 cursor-pointer right-5 p-3 rounded-full'>
                            <RxCross1 size={30} className='text-black' />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-full h-[80vh] sm:w-11/12 sm:h-11/12 md:w-5/6 md:h-5/6 bg-white shadow-sm flex flex-col items-center justify-center gap-5 px-3 md:px-0'>
                    <div className='w-full h-full relative'>
                        {/* Play Button Overlay on Image */}
                        <div 
                            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                            onClick={handlePlayVideo}
                        >
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <h1 className='text-5xl font-semibold'>Demo Video</h1>
                        <div className='flex items-center gap-4 text-sky-500 font-medium'>
                            {/* Play Button with Icon */}
                            <FaPlayCircle size={30} onClick={handlePlayVideo} />
                            <button onClick={handlePlayVideo} className='text-lg'>
                                Play Video
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoSection;
