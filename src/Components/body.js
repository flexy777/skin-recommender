import React, { Component, useState } from "react";
import { Form } from "./form";

 const Body = () => {
  const [showForm, setShowForm] = useState(true)
  const data =[
    {
      name:"Wrinkle", score:90
    },
    {
      name:"Dark Spots", score:80
    },
    {
      name:"Pimples", score:60
    },
    {
      name:"Scars", score:57
    }

  ]
  const products =[
    {
     name:"", image:""
    },
    {
     
    },
    {
     
    },
    {
     
    }

  ]
    return (
      <>
      {showForm && <Form close={() => setShowForm(false)}/>}
        <div id="container">
          <div className="row m-0">
          <div className="col-xl-8 left">
            something left
  
                <div className="feature-box-icon ">
                  <div className="buttons">
                <button  className="shutter btn  btn-gradient-magenta-orange d-table d-lg-inline-block lg-margin-15px-bottom md-margin-auto-lr" > 
                <i className="line-icon-Camera-2 icon-medium " /></button>
                {/* <button  className="retake btn btn-gradient-magenta-orange d-table d-lg-inline-block lg-margin-15px-bottom md-margin-auto-lr" >
                  <i className="line-icon-Back icon-large " /></button> */}
                </div>
              </div>
              
              </div>
            

            <div className="col-xl-4 right">
              {/* start section */}
<section className="wow animate__fadeIn pt-3">
  <div className="container p-4 pt-2">
    <div className="row align-items-center">
      <div className="col-12 mb-4">
      <h5 className="text-extra-dark-gray font-weight-500 alt-font d-block margin-25px-bottom">Welcome to e-Dermatologist</h5>
        <div className="margin-15px-bottom d-flex text-fast-blue alt-font"><span className="h-1px align-self-center margin-10px-right w-10 bg-fast-blue flex-shrink-0" /><div className="media-body flex-grow-1">Test Result</div></div>
        
        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="col-12 mb-0">
        {
          data.map((item, i)=>{
            return(
              <div className={`progress margin-${i < 2 ? "4":"3"}-rem-bottom sm-margin-4-rem-bottom`}>
              <span className="progress-title alt-font text-small text-extra-dark-gray font-weight-500">{item.name}</span>
              <div className="progress-bar bg-fast-blue appear" role="progressbar" aria-valuenow={item.score} aria-valuemin={0} aria-valuemax={100} style={{width: item.score+'%'}}><span className="alt-font text-small text-extra-dark-gray font-weight-500">{item.score}%</span></div>
            </div>
            )
          })
        }
      
 
 
      </div>
      {/* end section */}
      <div className="margin-15px-bottom d-flex text-fast-blue alt-font"><span className="h-1px align-self-center margin-10px-right w-10 bg-fast-blue flex-shrink-0" /><div className="media-body flex-grow-1">Recommended Products</div></div>
      <div className="col-12 mb-4">
      {
          products.map((item, i)=>{
            return(
              <div className="border-all mb-3 border-width-1px border-color-medium-gray border-radius-4px overflow-hidden margin-5px-right xs-no-margin-right">
  <div className="row g-0 row-cols-1 row-cols-sm-2">
    <div className="col cover-background xs-h-250px" style={{backgroundImage: 'url("images/our-story-img11.jpg")'}} />
    <div className="col">
      <div className="padding-1-rem-all lg-padding-1-rem-all">
        <span className="alt-font text-extra-dark-gray font-weight-500 d-inline-block margin-15px-bottom text-extra-medium">Brand identity</span>
        <p style={{margin: 0, lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>


            )
          })
        }



      </div>
    </div>
  </div>
</section>



</div>

          </div>
         
      
        </div>


    

      </>
    );
  
}

expor