import React from "react";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPlayer from "./videoPlayer";

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


const Medias = ({ videos }) => {
    // console.log(videos, 'props en videos')

    const size = useWindowSize();
    // Events para Swiper, muy interesante!
    // https://swiperjs.com/swiper-api#events
    return (
        <div className="container" id="play-video">           
            <Swiper
                navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={1}
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
                className="mySwiper"
                onActiveIndexChange={(e)=> console.log(e)}
               
                >

                {videos && videos.length &&
                    videos.map((video) => {
                        return (
                            <SwiperSlide key={video._id}>
                                <VideoPlayer video={video} />
                            </SwiperSlide>
                        )
                    })
                }

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


export default Medias;