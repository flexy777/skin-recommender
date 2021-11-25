export const Form = (props) =>{
    return(
        <div>
  <div className="mfp-bg mfp-ready" />
  <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex={-1} style={{overflow: 'hidden auto'}}><div className="mfp-container mfp-s-ready mfp-inline-holder"><div className="mfp-content"><div id="subscribe-popup" className="subscribe-popup">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8 col-md-10 bg-white modal-popup-main">
                <div className="row">
                  <div className="col-12 col-sm-7 order-2 order-sm-1 newsletter-popup padding-6-rem-all lg-padding-4-rem-all xs-padding-3-rem-all">
                    <span className="text-extra-large font-weight-500 text-extra-dark-gray d-block margin-10px-bottom">Fill the form to get started</span>
                    <form action="email-templates/subscribe-newsletter.php" method="post">
                      <div className="newsletter-style-03 position-relative margin-25px-bottom xs-margin-15px-bottom">
                        <input className="medium-input bg-white m-0 " name="email" placeholder="Enter your name" type="email" />
                        <input type="hidden" name="redirect" defaultValue />
                        <button className="btn no-border submit" type="submit"></button>
                        <div className="form-results d-none position-absolute" />
                      </div>
                      <div className="newsletter-style-03 position-relative margin-25px-bottom xs-margin-15px-bottom">
                        <input className="medium-input bg-white m-0 " name="email" placeholder="Enter your email address" type="email" />
                        <input type="hidden" name="redirect" defaultValue />
                        <button className="btn no-border submit" type="submit"></button>
                        <div className="form-results d-none position-absolute" />
                      </div>
                      <div className="newsletter-style-03 position-relative margin-25px-bottom xs-margin-15px-bottom">
                        <input className="medium-input bg-white m-0 " name="email" placeholder="Enter your age" type="email" />
                        <input type="hidden" name="redirect" defaultValue />
                        <button className="btn no-border submit" type="submit"></button>
                        <div className="form-results d-none position-absolute" />
                    
                      </div>
                       <p className="text-center">
                    <button type="button" className="btn btn-light btn-outline-secondary  ">SUBMIT</button></p>
                     
                    </form>
                
                    <input id="newsletter-off" className="d-none text-center" type="checkbox" name="newsletter-off" />
                    <label htmlFor="newsletter-off" className="text-small text-center"><span />Don't show this popup again</label>
                   
                  </div>
                  <div className="col-12 col-sm-5 cover-background order-1 order-sm-2 xs-h-150px" style={{backgroundImage: 'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/flawlessskin-1589384044.png")'}}>
                    <button title="Close (Esc)" type="button" className="mfp-close"
                      onClick={()=>props.close()}
                    >×</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div></div></div>
</div>
    )
}