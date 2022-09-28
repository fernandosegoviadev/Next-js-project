// import { useReducer } from "react";

// const initialState = {
//     onPlay: false,
//     muted: false,
//     fullscreen: false
// };

// function reducer(state, action) {
//     console.log(action.type);
//     switch (action.type) {
//         case 'play':
//             return { ...state, onPlay: true };
//         case 'pause':
//             return { ...state, onPlay: false };
//         case 'mute':
//             return { ...state, muted: true };
//         case 'sound':
//             return { ...state, muted: false };
//         case 'full':
//             return { ...state, fullscreen: true };
//         case 'exit':
//             return { ...state, fullscreen: false };
//         default:
//             throw new Error();
//     }
// }

// const Controls = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <>
//             {!state.onPlay &&
//                 <button type="button" style={{ zIndex: 1, position: "relative" }}
//                     className="btn btn-outline-primary"
//                     id="play-button"
//                     onClick={() => play(video._id)}
//                 >▶️</button>}

//             {state.onPlay &&
//                 <button type="button" style={{ zIndex: 1, position: "relative" }}
//                     className="btn btn-outline-primary"
//                     onClick={() => pause(video._id)}
//                 ><b>⏸️</b></button>}

//             {!state.fullscreen &&
//                 <button type="button" style={{ zIndex: 1, position: "relative" }}
//                     className="btn btn-outline-primary"
//                     onClick={fullScreen}
//                 ><b>⮔</b></button>}
//             {state.fullscreen &&
//                 <button type="button" style={{ zIndex: 1, position: "relative" }}
//                     className="btn btn-outline-primary"
//                     onClick={exitFullScreen}
//                 ><b>X</b></button>}

//             <button type="button" style={{ zIndex: 1, position: "relative" }}
//                 className="btn btn-outline-primary"
//                 onClick={() => changeMuted}
//             >{muted ? "🔇" : "🔊"}</button>
//         </>
//     )
// }

// export default Controls;