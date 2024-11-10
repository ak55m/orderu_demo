import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';
import videoImg from '../../assets/couple-with-food.jpg';
import { RxCross1 } from 'react-icons/rx';

const VideoSection = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
    };

    const handleCloseVideo = () => {
        setIsVideoPlaying(false)
    };

    return (
        <div className='w-full min-h-screen flex items-center justify-center py-10'>
            {isVideoPlaying ? (
                <div className='w-full h-[80vh] md:h-full flex items-center justify-center bg-white'>
                    <div className='relative w-full h-4/5 sm:w-11/12 sm:h-11/12 md:w-5/6 md:h-5/6 flex items-center justify-center px-3 md:px-0'>
                        <video
                            className='w-full h-full'
                            controls
                            autoPlay
                        >
                            <source src='path_to_your_video.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                        <div onClick={handleCloseVideo} className='bg-white absolute top-5 cursor-pointer right-5 p-3 rounded-full'>
                            <RxCross1
                                size={30}
                                className=' text-black'

                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-full h-4/5 sm:w-11/12 sm:h-11/12 md:w-5/6 md:h-5/6 bg-white shadow-sm flex md:items-center flex-col gap-5 md:gap-0 md:flex-row shadow-black/20 px-3 md:px-0'>
                    {/* Left Side */}
                    <div className='w-full md:w-3/5 h-full flex items-center justify-center py-5 md:py-0'>
                        <div className='w-3/5 flex flex-col gap-5 md:gap-16'>
                            <h1 className='text-lg font-bold'>OrderU</h1>
                            <h1 className='text-5xl font-semibold'>Demo.</h1>
                            <p className='text-sm'>
                                Site's Name makes it incredibly easy for you to discover and get what you want. Delivered to you – quickly, reliably and affordably.
                            </p>
                            <div className='flex items-center gap-4 text-sky-500 font-medium'>
                                <FaPlayCircle size={60} />
                                <button onClick={handlePlayVideo}>Play Video</button>
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className='w-full md:w-2/5 h-full flex items-center justify-center'>
                        <img src={videoImg} alt="Couple Video" className='w-full h-full' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoSection;
