import React from "react";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const photos = [
    "https://images8.alphacoders.com/541/541822.jpg",
    "https://images8.alphacoders.com/359/359681.jpg",
    "https://images.alphacoders.com/471/471270.jpg",
    "https://images5.alphacoders.com/101/1011818.jpg",
    "https://images4.alphacoders.com/829/829688.jpg",
    "https://images4.alphacoders.com/984/984566.jpg"
]


const Photos = () => {
    const size = useWindowSize();
    console.log(size, ' la resolución')

    return (
        <div className="container">
            {/* <div className="title_wapper"> Carousel </div> */}
            <Swiper
                navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={ size.width < 768 ? 1 : "auto"}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true
                }}
                className="mySwiper">

                <SwiperSlide>
                    <img src={photos[0]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photos[1]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photos[2]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photos[3]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photos[4]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photos[5]} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

// Hook
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
}


export default Photos;