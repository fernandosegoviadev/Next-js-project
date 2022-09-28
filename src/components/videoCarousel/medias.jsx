import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPlayer from "./videoPlayer";

import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Medias = ({ videos }) => {
    // console.log(videos, 'props en videos')
    const [muted, setMuted] = useState(true);
    const [fullscreen, setFullscreen] = useState(false);
    const [onPlay, setOnPlay] = useState({ state: true, id: '' });


    const pause = (id) => {
        var video = document.getElementById(id);
        if (video) {
            video.pause();
            setOnPlay({ state: false, id: id });
        }
    }
    const play = (id) => {
        console.log(id, 'el id que llega')
        var video = document.getElementById(id);
        if (video) {
            video.play();
            setOnPlay({ state: true, id: id });

        }
    }

    const changeVideo = (index) => {

        if (onPlay.state) {
            console.log(index,' el index');
    
            if (onPlay.state && onPlay.id) {
                pause(onPlay.id);
            }        
    
            let id = videos[index]._id // el id
            play(id);
            setOnPlay({state: true, id: id})

        }

    }

    // Events para Swiper, muy interesante!
    // https://swiperjs.com/swiper-api#events
    return (
        <div className="container" >
            <Swiper
                id="play-video"
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
                onActiveIndexChange={(e) => changeVideo(e.realIndex)}
            >
                {videos && videos.length &&
                    videos.map((video) => {
                        return (
                            <SwiperSlide key={video._id}>
                                <VideoPlayer
                                    video={video}
                                    muted={muted}
                                    setMuted={setMuted}
                                    fullscreen={fullscreen}
                                    setFullscreen={setFullscreen}
                                    onPlay={onPlay}
                                    setOnPlay={setOnPlay}
                                 
                                />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}




export default Medias;