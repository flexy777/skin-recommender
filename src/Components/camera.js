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