import { useState } from "react";
import { useEffect } from "react";
import React from "react";


const Videos = ({ videos }) => {
    console.log(videos, 'props en videos')

    const [select, setSelect] = useState(null);
    const [muted, setMuted] = useState(true); // para saltar la validación
    const [fullscreen, setFullscreen] = useState(false);
    const [onPlay, setOnPlay] = useState(true);
    // de auto reproducción con sonido activado

    useEffect(() => {
        function onFullscreenChange() {
            setFullscreen(Boolean(document.fullscreenElement));
        }
        document.addEventListener('fullscreenchange', onFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);

    useEffect(() => {
        if (videos && videos.length) {
            setSelect({ index: 0, data: videos[0] });
        }
    }, []);

    const setNext = () => {
        if (select) {
            // console.log('entre next', select.index)
            if (select.index < videos.length - 1) {
                setSelect({ index: select.index + 1, data: videos[select.index + 1] });
            }
            if (select.index === videos.length - 1) {
                setSelect({ index: 0, data: videos[0] });
            }

        }

    }
    const setPrev = () => {
        if (select) {
            // console.log('entre prev', select.index)
            if (select.index > 0) {
                setSelect({ index: select.index - 1, data: videos[select.index - 1] });
            }
            if (select.index === 0) {
                setSelect({ index: videos.length - 1, data: videos[videos.length - 1] });
            }

        }
    }

    const changeMuted = () => {
        if (muted) return setMuted(false);
        if (!muted) return setMuted(true);
    }

    const fullScreen = () => {
        // element which needs to enter full-screen mode
        var videoPlayer = document.getElementById("container-video");
        // console.log(element)
        // make the element go to full-screen mode
        videoPlayer.requestFullscreen()
            .then(function () {
                // element has entered fullscreen mode successfully
                setFullscreen(true)
            })
            .catch(function (error) {
                // element could not enter fullscreen mode
            });
    }

    const exitFullScreen = () => {
        document.exitFullscreen()
            .then(function () {
                // element has entered fullscreen mode successfully
                setFullscreen(false)
            })
            .catch(function (error) {
                // element could not enter fullscreen mode
            });
    }
    const play = () => {
        var video = document.getElementById("videoBox");
        video.play();
        setOnPlay(true);
    }
    const pause = () => {
        var video = document.getElementById("videoBox");
        video.pause();
        setOnPlay(false);

    }
    // Insertar vídeos en HTML5. La etiqueta ˂video˃ | | UPV - Elementos de la etiqueta video
    // https://www.youtube.com/watch?v=yHyj6o56AlM&ab_channel=UniversitatPolit%C3%A8cnicadeVal%C3%A8ncia-UPV

     return (
        <div className="list-group">
            <div id="container-video"
                style={{
                    width: "auto", height: "500px", left: "0px", top: "0px",
                    justifyContent: "center", textAlign: "center", position: "relative"
                }}        
            >

                {
                    select && select.data && (
                        // <div className="list-group-item list-group-item-action"
                        //     style={{ padding: 0, margin: 0, background: "black", position: "relative" }}
                        //     key={select.data._id}
                        // >
                            <div className="play-videos" style={!fullscreen ? { height: "100%", background: "black" }
                            : { height: "100vh", background: "black" }}
                            >
                                <div style={{
                                    zIndex: 1, position: "absolute", minWidth: "100%", minHeight: "auto",
                                }}>
                                    <h5
                                    >{select.data.title} {select.index}  </h5>

                                    <h6
                                    >Description: {select.data.description}</h6>
                                </div>

                                <div style={{
                                    zIndex: 1, position: "absolute", top: "90%", minWidth: "100%"
                                }}
                                className="controls-video"
                                >
                                    <button type="button" style={{ zIndex: 1, position: "relative" }}
                                        className="btn btn-outline-primary"
                                        onClick={setPrev}
                                    >⏮️</button>
                                    {/* debe estar afuera del reproductor */}

                                    {!onPlay &&
                                        <button type="button" style={{ zIndex: 1, position: "relative" }}
                                            className="btn btn-outline-primary"
                                            id="play-button"
                                            onClick={play}
                                        >▶️</button>}

                                    {onPlay &&
                                        <button type="button" style={{ zIndex: 1, position: "relative" }}
                                            className="btn btn-outline-primary"
                                            onClick={pause}
                                        ><b>⏸️</b></button>}



                                    {!fullscreen &&
                                        <button type="button" style={{ zIndex: 1, position: "relative" }}
                                            className="btn btn-outline-primary"
                                            onClick={fullScreen}
                                        ><b>⮔</b></button>}
                                    {fullscreen &&
                                        <button type="button" style={{ zIndex: 1, position: "relative" }}
                                            className="btn btn-outline-primary"
                                            onClick={exitFullScreen}
                                        ><b>X</b></button>}

                                    <button type="button" style={{ zIndex: 1, position: "relative" }}
                                        className="btn btn-outline-primary"
                                        onClick={changeMuted}
                                    >{muted ? "🔇" : "🔊"}</button>

                                    <button type="button" style={{ zIndex: 1, position: "relative" }}
                                        className="btn btn-outline-primary"
                                        onClick={setNext}
                                    >⏭️</button>
                                     {/* debe estar afuera del reproductor */}
                                </div>

                                <video tabIndex="-1" className="video-stream html5-main-video"
                                    id="videoBox"
                                    controlsList="nodownload"
                                    style={{
                                        maxWidth: "100%", height:"100%", 
                                        left: "0px", top: "0px"
                                    }}
                                    autoPlay={true}
                                    controls={false}
                                    loop={true}
                                    muted={muted}
                                    src={select.data.url}
                                    onClick={onPlay ? pause : play}
                                >

                                </video>

                            </div>

                        // </div>

                    )
                }

            </div>         
        </div>
    )
}

export default Videos;