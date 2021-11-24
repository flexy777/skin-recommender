import React, { Component } from "react";

export default class Defects extends Component {
    render() {
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
          return(
            <>
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
       </div>
</div>
            </>




          );

          }
        }

         
  











