import React, { useEffect } from 'react';


const Camera = () => {
    const video = React.useRef(null);
    // var constraints = {video: {width: video.current.offsetWidth, height: video.current.offsetHeight}};

    const initCamera = () =>{
        window.navigator.mediaDevices.getUserMedia({video:true})
        .then(stream => {
            video.current.srcObject = stream;
            video.current.onloadedmetadata = (e) => {
                video.current.play();
            };
        })
        .catch( () => {
            alert('You have give browser the permission to run Webcam and mic ;( ');
        });
    };


    useEffect(() => {
        initCamera();
    }, [])

    return <video muted autoplay ref={video} />
}

    
export default Camera;





// import React, { Component, useState } from 'react';
// // import './cameraStyles.css'
// import Webcam from "react-webcam";
// export const WebcamComponent = () => <Webcam />;
// const videoConstraints = {
//     width: 1280,
//     height: 720,
//     facingMode: "user"
//   };
  
//   const WebcamCapture = () => {const webcamRef = React.useRef(null);
  
//     const capture = React.useCallback(
//       () => {
//         const imageSrc = webcamRef.current.getScreenshot();
//       },
  
//       [webcamRef]
//     );
  
//     return (
//         <>
//         <Webcam
//           audio={false}
//           height={200}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={220}
//           videoConstraints={videoConstraints}
//         />
//         <button 
//         onClick={(e)=>{e.preventDefault();capture();}} >
//         Capture</button>
//      </>
//     );

//     }