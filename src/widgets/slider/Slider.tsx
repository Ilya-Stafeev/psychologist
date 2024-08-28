import { FC, useState, useEffect, useRef } from 'react'
import { SwiperRef } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import "./Slider.scss"

import { imagesSlider } from '../../shared/images/slider';

interface SliderProps {
    swiperRef: React.RefObject<SwiperRef>;
    isPrevDisabled: boolean;
    isNextDisabled: boolean;
    isAutoplayEnabled: boolean;
    imagesSlider: string[];
    handlePrevClick: () => void;
    handleNextClick: () => void;
    toggleAutoplay: () => void;
    handleSlideChange: () => void;
}

export const Slider: FC<SliderProps> = ({
    swiperRef,
    isPrevDisabled,
    isNextDisabled,
    isAutoplayEnabled,
    imagesSlider,
    handlePrevClick,
    handleNextClick,
    toggleAutoplay,
    handleSlideChange
}) => {
  return (
    <section className='slider'>
        <div className='slider__hed'>
            <div className="slider__mob">
                <div className="slider__mob-block">
                    <button className="slider__mob-btn prev"  onClick={handlePrevClick}>
                        <svg className='slider__control-img' role="presentation"  viewBox="0 0 11.3 21" xmlns="http://www.w3.org/2000/svg">
                            <polyline fill="none" stroke="#ef959d" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 10.5,10.5 0.5,20.5"></polyline>
                        </svg>
                    </button>
                    <button className="slider__mob-btn next" onClick={handleNextClick}>
                        <svg className='slider__control-img' role="presentation"  viewBox="0 0 11.3 21" xmlns="http://www.w3.org/2000/svg">
                            <polyline fill="none" stroke="#ef959d" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 10.5,10.5 0.5,20.5"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

            <div className='slider__switch'>
                <button className='slider__switch-btn' onClick={toggleAutoplay}>
                    {!isAutoplayEnabled ? (
                        <svg className='slider__switch-img' role="presentation" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.28347 2.71653L23.3002 11.3002L9.28347 19.8839V11.3002L9.28347 2.71653Z" fill="#ef959d"></path>
                        </svg>
                    ) : (
                        <svg role="presentation" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.0507812" width="4.9" height="18.9" fill="#ef959d"></rect>
                            <rect x="9.09961" y="0.0507812" width="4.9" height="18.9" fill="#ef959d"></rect>
                        </svg>
                    )}
                </button>
            </div>
        </div>

        <Swiper
            ref={swiperRef}        
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            loop={false}
            className="slider__block"
            pagination={{
                clickable: true,
                el: '.slider__pagination',
                renderBullet: (index: number, className: string) => {
                    return `<span class="${className} slider__btn"></span>`;
                }        
            }}

            effect={'coverflow'}

            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
            }}

            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}

            
            modules={[ Pagination, EffectCoverflow, Autoplay]}
            
            breakpoints={{
                100: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                },
            }}
            onSlideChange={handleSlideChange}
        >
            <button 
                className={`slider__control prev ${isPrevDisabled ? 'disabled' : ''}`}
                onClick={handlePrevClick}
                disabled={isPrevDisabled}
            >
                <svg className='slider__control-img' role="presentation"viewBox="0 0 11.3 21" xmlns="http://www.w3.org/2000/svg">
                    <polyline fill="none" stroke="#ef959d" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 10.5,10.5 0.5,20.5"></polyline>
                </svg>
            </button>
            {imagesSlider.map((imageSrc, index) => (
                <SwiperSlide className='slider__item' key={index}>
                    <img src={imageSrc} alt={`Slide ${index + 1}`} className="slider__img" />
                </SwiperSlide>
            ))}
            <button 
                className={`slider__control next ${isNextDisabled ? 'disabled' : ''}`}
                onClick={handleNextClick}
                disabled={isNextDisabled}
            >
                <svg className='slider__control-img' role="presentation"  viewBox="0 0 11.3 21" xmlns="http://www.w3.org/2000/svg">
                    <polyline fill="none" stroke="#ef959d" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 10.5,10.5 0.5,20.5"></polyline>
                </svg>
            </button>
        </Swiper>

        <div className="slider__pagination"></div>
    </section>
  )
}