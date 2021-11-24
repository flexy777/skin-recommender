import React, { useState } from "react";
import Camera from "./camera";
import Defects from "./Defects";
import { Form } from "./form";
import Products from "./products";

 const Body = () => {
  const [showForm, setShowForm] = useState(true)
  
  
    return (
      <>
      {showForm && <Form close={() => setShowForm(false)}/>}
        <div id="container">
          <div className="row m-0">
          <div className="col-6 col-xl-8 left">
            <Camera/>
  
                <div className="feature-box-icon ">
                  <div className="buttons">
                <button  className="shutter btn  btn-gradient-magenta-orange d-table d-lg-inline-block lg-margin-15px-bottom md-margin-auto-lr" > 
                <i className="line-icon-Camera-2 icon-medium " /></button>
                {/* <button  className="retake btn btn-gradient-magenta-orange d-table d-lg-inline-block lg-margin-15px-bottom md-margin-auto-lr" >
                  <i className="line-icon-Back icon-large " /></button> */}
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
