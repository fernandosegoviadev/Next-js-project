import { useState } from "react";
import { useEffect } from "react";
import React from "react";


const Videos = ({ videos }) => {
    console.log(videos, 'props en videos')

    const [select, setSelect] = useState(null);
    const [muted, setMuted] = useState(true); // para saltar la validación
    const [fullscreen, setFullscreen] = useState(false);
    // de auto reproducción con sonido activado

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
        var element = document.getElementById("container-video");
        // console.log(element)
        // make the element go to full-screen mode

        element.requestFullscreen()
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

    // Insertar vídeos en HTML5. La etiqueta ˂video˃ | | UPV - Elementos de la etiqueta video
    // https://www.youtube.com/watch?v=yHyj6o56AlM&ab_channel=UniversitatPolit%C3%A8cnicadeVal%C3%A8ncia-UPV

    return (
        <div className="list-group">
            <div id="container-video"
                style={{
                    width: "300px", height: "150px", left: "0px", top: "0px",
                    justifyContent: "center", textAlign: "center", position: "relative"
                }}>

                {
                    select && select.data && (
                        <div className="list-group-item list-group-item-action"
                            style={{ padding: 0, margin: 0, background: "black", position: "relative" }}
                            key={select.data._id}
                        >
                            <div>
                                <div style={{
                                    zIndex: 1, position: "absolute", minWidth: "100%"
                                }}>
                                    <h5
                                    >{select.data.title} {select.index}  </h5>

                                    <h6
                                    >Description: {select.data.description}</h6>
                                </div>

                                <div style={{
                                    zIndex: 1, position: "absolute", top: "90%", minWidth: "100%"
                                }}>
                                    <button type="button" style={{ zIndex: 1, position: "relative" }}
                                        className="btn btn-outline-primary"
                                        onClick={setPrev}
                                    >Prev</button>

                                    <button type="button" style={{ zIndex: 1, position: "relative" }}
                                        className="btn btn-outline-primary"
                                        onClick={changeMuted}
                                    >Mute</button>

                                    {fullscreen &&
                                        <button type="button" style={{ zIndex: 1, position: "relative" }}
                                            className="btn btn-outline-primary"
                                            onClick={exitFullScreen}
                                        >Exit</button>}

                                    {!fullscreen &&
                                        <button type="button" style={{ zIndex: 1, position: "relative" }}
                                            className="btn btn-outline-primary"
                                            onClick={fullScreen}
                                        >Fullscreen</button>}

                                    <button type="button" style={{ zIndex: 1, position: "relative" }}
                                        className="btn btn-outline-primary"
                                        onClick={setNext}
                                    >Next</button>
                                </div>

                                <video tabIndex="-1" className="video-stream html5-main-video"
                                    controlsList="nodownload"
                                    style={{
                                        maxWidth: "100%", MaxHeight: "100%",
                                        minHeight: "100%", left: "0px",
                                        top: "0px"
                                    }}
                                    autoPlay={true}
                                    controls={true}
                                    muted={muted}
                                    src={select.data.url}
                                >

                                </video>

                            </div>

                        </div>

                    )
                }

            </div>
            
            {/* <button style={{position: "absolute"}}
            Name="ytp-fullscreen-button ytp-button" 
            aria-keyshortcuts="f"
            data-title-no-tooltip="Salir del modo de pantalla completa" 
            aria-label="Salir del modo de pantalla completa keyboard shortcut f" 
            title="Salir del modo de pantalla completa&nbsp;(f)"><svg 
            height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <g className="ytp-fullscreen-button-corner-2">
                    <use className="ytp-svg-shadow" xlinkHref="#ytp-id-285">
                        </use><path className="ytp-svg-fill" d="m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z" 
                        id="ytp-id-285"></path></g>
                        <g className="ytp-fullscreen-button-corner-3">
                            <use className="ytp-svg-shadow" xlinkHref="#ytp-id-286">
                                </use><path className="ytp-svg-fill" d="m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z" 
                                id="ytp-id-286"></path></g><g className="ytp-fullscreen-button-corner-0">
                                    <use className="ytp-svg-shadow" xlinkHref="#ytp-id-287"></use>
                                    <path className="ytp-svg-fill" d="m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z" 
                                    id="ytp-id-287"></path></g><g className="ytp-fullscreen-button-corner-1">
                                        <use className="ytp-svg-shadow" xlinkHref="#ytp-id-288"></use><path 
                                        class="ytp-svg-fill" d="m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z" 
                                        id="ytp-id-288"></path></g></svg></button> */}

                      

        </div>
    )
}

export default Videos;