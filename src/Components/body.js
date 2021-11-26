import React, { useState, useRef } from "react";
// import Cam from "./cam";
import Webcam from "react-webcam";
import Defects from "./Defects";
import { Form } from "./form";
import Products from "./products";
import AllCameras from "./allCamera";
const Body = () => {

const videoConstraints = {
  width: 540,
  facingMode: "user"
};


  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(async () => {
  const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };


  const [showForm, setShowForm] = useState(true)
  


  
    return (
      <>
      <AllCameras/> 
      {showForm && <Form close={() => setShowForm(false)}/>}
        <div id="container">
          <div className="row m-0">
          <div className="col-6 col-xl-8 left">
            
          <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
      />
      {/* <button onClick={capturePhoto}>Capture</button>
      <button onClick={() => setUrl(null)}>Refresh</button> */}
      {url && (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}
  
                <div className="feature-box-icon ">
                  <div className="buttons">
                <button onClick={capturePhoto} className="shutter btn  btn-gradient-magenta-orange d-table d-lg-inline-block lg-margin-15px-bottom md-margin-auto-lr" > 
                <i className="line-icon-Camera-2 icon-medium " /></button>
                <button onClick={() => setUrl(null)} className="retake btn btn-gradient-magenta-orange d-table d-lg-inline-block lg-margin-15px-bottom md-margin-auto-lr" >
                  <i className="line-icon-Refresh icon-large " /></button>
                </div>
              </div>
              
              </div>
            

            <div className="col-6 col-xl-4 right">
              {/* start section */}
<section className="wow animate__fadeIn pt-3">
  
  <Defects/>
        {/* end section */}
      <Products/>
      
</section>



</div>

          </div>
         
      
        </div>


    

      </>
    );
  
}

export default Body;
