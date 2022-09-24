import { useState } from "react";
import { useEffect } from "react";
import React from "react";
// import Plyr from "plyr-react";
import "plyr/dist/plyr.css";

const Videos = ({ videos }) => {
    // console.log(props, 'props en videos')

    const [select, setSelect] = useState(null);
    const [muted, setMuted] = useState(true); // para saltar la validación
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




    const videoSource = {

        type: "video",
        sources: [{ src: "6FgF7hKwcao", provider: "youtube" }],
        muted: true,

        // https://github.com/sampotts/plyr#the-source-setter
    };

    const videoOptions = {
        autoplay: true,
        muted: false,
        fullscreen: {
            enabled: true,
            fallback: true,
            iosNative: false,
            container: null
        },

    };
    const ref = React.useRef(null);

    const changeMuted = () => {
        if (muted) return setMuted(false);
        if (!muted) return setMuted(true);
    }

    const changeFullScreen = () => {
        // element which needs to enter full-screen mode
        var element = document.getElementById("container-video");
        // console.log(element)
        // make the element go to full-screen mode
        element.requestFullscreen()
            .then(function () {
                // element has entered fullscreen mode successfully
            })
            .catch(function (error) {
                // element could not enter fullscreen mode
            });
    }


    return (
        <ul className="list-group">
            {
                select && (
                    <li className="list-group-item list-group-item-action"
                        key={select.data._id}
                    >
                        <h5>{select.data.title} {select.index}  </h5>

                        {/* <img src={select.data.url} alt={select.data.title}
                            style={{ width: "150px", height: "300px" }} /> */}

                        <video id="container-video" tabIndex="-1" className="video-stream html5-main-video"
                            controlsList="nodownload"
                            style={{ width: "600px", height: "300px", left: "0px", top: "0px" }}
                            autoPlay={true}
                            controls={true}
                            muted={muted}
                            // fullscreen={(e)=>console.log(e, 'de fullscreen')}

                            src={select.data.url}
                        ></video>

                        <p>Description: {select.data.description}</p>
                    </li>

                )
            }
            <button type="button"
                className="btn btn-outline-primary"
                onClick={setPrev}
            >Prev</button>

            <button type="button"
                className="btn btn-outline-primary"
                onClick={setNext}
            >Next</button>
            <button type="button"
                className="btn btn-outline-primary"
                onClick={changeMuted}
            >Mute</button>
            <button type="button"
                className="btn btn-outline-primary"
                onClick={changeFullScreen}
            >Fullscreen</button>

            {/* <Plyr
                // ref={ref}
                source={videoSource}
                options={videoOptions}                              
            /> */}

            {/* <video className="vjs-tech" 
            id="vjs_video_3_html5_api" 
            tabIndex="-1" role="application" 
            preload="metadata" 
            src="https://dms.licdn.com/playlist/C4D10AQGDOAEKlEtJjg/mp4-720p-30fp-crf28/0/1659122822530/RaghsaOficinas2mp4?e=1664632800&amp;v=beta&amp;t=BPaY77EEmAD5b-TPylFzJ5xwCX_iGp_HC9a5HvXu-JQ" 
            autoPlay="true"
            controls="true"
            muted="true">
            </video> */}

            {/* <video tabIndex="-1" className="video-stream html5-main-video"
                controlsList="nodownload"
                style={{ width: "427px", height: "240px", left: "0px", top: "0px" }}
                autoPlay={true}
                controls={true}
                muted={true}
                // fullscreen={value.toString()}
                // src="https://dms.licdn.com/playlist/C4D10AQGDOAEKlEtJjg/mp4-720p-30fp-crf28/0/1659122822530/RaghsaOficinas2mp4?e=1664632800&amp;v=beta&amp;t=BPaY77EEmAD5b-TPylFzJ5xwCX_iGp_HC9a5HvXu-JQ"
                // src="https://v16-webapp.tiktok.com/2173c51d4bb4477e860f6fad36894c6a/632f294e/video/tos/useast2a/tos-useast2a-ve-0068c003/f9e551fdc3324c21b127f4dc553f90dc/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok_m&amp;cd=0%7C0%7C0%7C0&amp;br=3536&amp;bt=1768&amp;cs=0&amp;ds=3&amp;ft=gKSYZ826o0PD13Pm~yg9wOp2O5LiaQ2D~7S&amp;mime_type=video_mp4&amp;qs=0&amp;rc=NDhpNWY5ODM4Njo8PDNnNUBpam1xOGk6Zjo7ZjMzNzczM0BhMTBjYDE2XzUxYjMuMzJhYSNkYWJgcjRvNmpgLS1kMTZzcw%3D%3D&amp;l=20220924145845010189073045246984FF&amp;btag=80000"
                src="https://v16-webapp.tiktok.com/2173c51d4bb4477e860f6fad36894c6a/632f294e/video/tos/useast2a/tos-useast2a-ve-0068c003/f9e551fdc3324c21b127f4dc553f90dc/"
            >

            </video> */}

        </ul>
    )
}

export default Videos;