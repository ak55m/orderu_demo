import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import videoFile from '../../assets/orderu.mp4';  // Import the video file

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
                        <video
                            className='w-full h-full object-cover'
                            controls
                            autoPlay
                        >
                            {/* Use the imported video file */}
                            <source src={videoFile} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
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
                        <p className='text-sm text-center'>
                            Site's Name makes it incredibly easy for you to discover and get what you want. Delivered to you – quickly, reliably and affordably.
                        </p>
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
