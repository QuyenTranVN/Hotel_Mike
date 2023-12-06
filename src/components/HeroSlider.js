/** @format */

import React from 'react'

import { Autoplay, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import Img1 from '../assets/img/heroSlider/1.jpg'
import Img2 from '../assets/img/heroSlider/2.jpg'
import Img3 from '../assets/img/heroSlider/3.jpg'
const slides = [
  { title: 'Your Luxury Hotel For Vacation', bg: Img1, btnText: 'See our rooms' },
  { title: 'Your Luxury Hotel For Vacation', bg: Img2, btnText: 'See our rooms' },
  { title: 'Your Luxury Hotel For Vacation', bg: Img3, btnText: 'See our rooms' },
]

const HeroSlider = () => {
  return (
    <div className='heroSlider h-[600px] lg:h-[860px] bg-black'>
      <Swiper
        className='heroSlider h-[600px] lg:h-[860px]'
        modules={[EffectFade, Autoplay]}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => {
          const { title, bg, btnText } = slide

          return (
            <SwiperSlide className='h-full  relative flex justify-center items-center' key={index}>
              <div className='z-20 text-white text-center'>
                <div className='uppercase font-tertiary tracking-[6px] mb-5'>
                  Just Enjoy and relax
                </div>
                <h1
                  className='text-[32px] font-primary uppercase
                tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight
                mb-6
                '
                >
                  {title}
                </h1>
                <button className='btn btn-lg btn-primary mx-auto'>{btnText}</button>
              </div>
              <div className='absolute top-0 w-full h-full'>
                <img className='object-cover h-full w-full' src={slide.bg} />
              </div>
              {/* overlay */}
              <div className='absolute w-full h-full bg-black/50'></div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default HeroSlider
