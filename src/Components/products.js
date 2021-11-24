import React, { Component } from 'react';
export default class Products extends Component {
    render() { 
        const products =[
    
            { name: "Skin Expert Revitalift Bright ", image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1574444309-5dc1ccd2-0a3c-45f7-afab-2a36f6af674f-1-e73c43750a9a828f94092d2ee526bb99-1574444280.jpg"
            },
            { name:"Sisley Paris", image:"https://i.vimeocdn.com/video/1225705400-489b2b4929b5c12c28f5e6591f8fd9cc2113dd13921b4ba4781a705241490a1a-d_640"
             
            },
            {
              name:"Regenerist Micro-Sculpting Cream", image: "https://ae01.alicdn.com/kf/H7916ed7d122041dc91b272896c40ed07Z/Disaar-natural-Collagen-beauty-face-cream-Firming-Skin-Care-Whitening-Moisturizing-Anti-aging-Anti-Wrinkle-Facial.jpg_Q90.jpg_.webp"
         
             },
           
        
          ]
        return (
            <>
            <div className="margin-15px-bottom d-flex text-fast-blue alt-font"><span className="h-1px align-self-center margin-10px-right w-10 bg-fast-blue flex-shrink-0" /><div className="media-body flex-grow-1">Recommended Products</div></div>
      <div className="col-12 mb-4">
      {
          products.map((product, i)=>{
            return(
              <div className="border-all mb-3 border-width-1px border-color-medium-gray border-radius-4px overflow-hidden margin-5px-right xs-no-margin-right">
  <div className="row g-0 row-cols-1 row-cols-sm-2">
    <div className="col cover-background xs-h-250px" ><img alt="" src={product.image} /></div>
    <div className="col">
      <div className="padding-1-rem-all lg-padding-1-rem-all">
        <span className="alt-font text-extra-dark-gray font-weight-500 d-inline-block margin-15px-bottom text-extra-medium">{product.name}</span>
        <p style={{margin: 0, lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>


            )
          })
        }
</div>










            </>






        );
    }
}
 
