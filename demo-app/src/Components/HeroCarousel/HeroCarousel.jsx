import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Pic2 from '../../assets/pic2.jpg'
import Pic3 from '../../assets/pic3.jpg'
import Pic4 from '../../assets/pic4.jpg'

const HeroCarousel = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex items-center justify-center pt-10 md:pt-20 relative'>
                <div className='w-[90%] md:w-4/5 flex md:relative flex-col items-center px-5 md:px-16 gap-5 md:gap-0 md:flex-row'>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={60}
                        slidesPerView={2}
                        loop={true}
                        direction="horizontal"
                        breakpoints={{
                            // When window width is >= 0px
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            840: {
                                slidesPerView: 2,
                                spaceBetween: 60
                            }
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        className='w-full'
                    >
                        <SwiperSlide className="rounded-md h-72 md:h-80">
                            <div className='w-full h-full rounded-md'>
                                <img src={Pic2} alt="Pic 2" className='w-full h-full rounded-md' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-md h-72 md:h-80">
                            <div className='w-full h-full rounded-md'>
                                <img src={Pic3} alt="Pic 3" className='w-full h-full rounded-md' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-md h-72 md:h-80">
                            <div className='w-full h-full rounded-md'>
                                <img src={Pic4} alt="Pic 4" className='w-full h-full rounded-md' />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    {/* Navigation Buttons */}
                    <div className='hidden md:!block'>
                        <div className="swiper-button-next absolute top-1/2 right-0 cursor-pointer hover:scale-105 transform -translate-y-1/2 text-black border border-black rounded-full p-2 z-20">
                            <AiOutlineArrowRight />
                        </div>
                        <div className="swiper-button-prev absolute top-1/2 left-0 hover:scale-105 cursor-pointer transform -translate-y-1/2 text-black border border-black rounded-full p-2 z-20">
                            <AiOutlineArrowLeft />
                        </div>
                    </div>
                    <div className='flex items-center gap-5 md:hidden'>
                        <div className="swiper-button-prev p-2 rounded-full border border-black">
                            <AiOutlineArrowLeft />
                        </div>
                        <div className="swiper-button-next p-2 rounded-full border border-black">
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
