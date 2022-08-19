import React from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardReview from '../cards/CardReview';

function ReviweList() {
    return (
        <Swiper
            className='pb-5'
            modules={[Pagination]}
            spaceBetween={20}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                }
            }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><CardReview person="ahmed eldeep" /></SwiperSlide>
            <SwiperSlide><CardReview person="ahmed eldeep" /></SwiperSlide>
            <SwiperSlide><CardReview person="ahmed eldeep" /></SwiperSlide>
            <SwiperSlide><CardReview person="ahmed eldeep" /></SwiperSlide>
        </Swiper>
    )
}

export default ReviweList