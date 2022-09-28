import { useState } from "react";
import { useEffect } from "react";
import React from "react";


const VideoPlayer = ({ video }) => {
    // console.log(video, 'video por props')
    const [muted, setMuted] = useState(true); // para saltar la validación
    const [fullscreen, setFullscreen] = useState(false);
    const [onPlay, setOnPlay] = useState(false);

    useEffect(() => {
        function onFullscreenChange() {
            setFullscreen(Boolean(document.fullscreenElement));
        }
        document.addEventListener('fullscreenchange', onFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);

    const changeMuted = () => {
        if (muted) return setMuted(false);
        if (!muted) return setMuted(true);
    }

    const fullScreen = () => {
        var videoPlayer = document.getElementById("play-video");
        videoPlayer.requestFullscreen()
            .then(function () {
                setFullscreen(true)
            })
            .catch(function (error) { });
    }

    const exitFullScreen = () => {
        document.exitFullscreen()
            .then(function () {
                setFullscreen(false)
            })
            .catch(function (error) { });
    }

    const play = (id) => {
        console.log(id, 'el id que llega')
        var video = document.getElementById(id);      
        if (video) {
            video.play();
            setOnPlay(true);

        }
    }

    const pause = (id) => {
        var video = document.getElementById(id);
        if(video) {
            video.pause();
            setOnPlay(false);
        }
    }


    return (
        <>
            <div className="list-group-item list-group-item-action"
                style={{ padding: 0, margin: 0, background: "black", position: "relative" }}
                key={video._id}
            >
                <div className="play-video">
                    <div style={{
                        zIndex: 1, position: "absolute", top: "10%", minWidth: "100%"
                    }}
                        className="controls-video"
                    >
                        {!onPlay &&
                            <button type="button" style={{ zIndex: 1, position: "relative" }}
                                className="btn btn-outline-primary"
                                id="play-button"
                                onClick={()=>play(video._id)}
                            >▶️</button>}

                        {onPlay &&
                            <button type="button" style={{ zIndex: 1, position: "relative" }}
                                className="btn btn-outline-primary"
                                onClick={()=>pause(video._id)}
                            ><b>⏸️</b></button>}

                        {!fullscreen &&
                            <button type="button" style={{ zIndex: 1, position: "relative" }}
                                className="btn btn-outline-primary"
                                onClick={()=>fullScreen}
                            ><b>⮔</b></button>}
                        {fullscreen &&
                            <button type="button" style={{ zIndex: 1, position: "relative" }}
                                className="btn btn-outline-primary"
                                onClick={()=>exitFullScreen}
                            ><b>X</b></button>}

                        <button type="button" style={{ zIndex: 1, position: "relative" }}
                            className="btn btn-outline-primary"
                            onClick={()=>changeMuted}
                        >{muted ? "🔇" : "🔊"}</button>
                    </div>

                    { video && <video tabIndex="-1" className="video-stream html5-main-video"
                        id={video._id}
                        controlsList="nodownload"
                        style={{
                            maxWidth: "100%", height:"100%",
                            left: "0px", top: "0px"
                        }}
                        autoPlay={false}
                        controls={false}
                        loop={true}
                        muted={muted}
                        src={video.url}
                        onClick={()=> onPlay ? pause(video._id) : play(video._id)}
                    >
                    </video>}
                </div>
            </div>
        </>
    )
}
export default VideoPlayer;