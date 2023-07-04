import React from "react";
import "../style/main1.css";
function footer() {
  return (
    <div>
      <div className="footerwall mt-5">
        <div className="text-center pt-5">
          <h2 className="text-white" style={{ fontSize: "70px" }}>
            Better for People & the Planet
          </h2>
          <br />
          <p className="text-white">
            industry.s be 150 It has survived no, but also the leap 
           
          </p>
          <button style={{ width: "150px", height: "60px" }}>SHOP MEN</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button style={{ width: "160px", height: "60px" }}>SHOP WOMEN</button>
        </div>
      </div>
      <div style={{height:'150px'}} >

      </div>
      <div>
        <div className="container ">
            <div className="row  text-center gap-4 text-muted">
              <section className="col-lg-3 col-12  ">
                <h3>shoe</h3>
                <p>
                  Praesent eget tortor sit risus <br />
                   egestas nulla pharetra ornare <br />
                  quis bibendum est bibendum <br />
                   sapien proin nascetur
                </p>
              </section>

              <section className="col-lg-3 col-12">
                <h3>About</h3>
                <p>
                  Our Story <br />
                  Our Materials <br />
                  Our Value <br />
                  Sustainability <br />
                  Manufacture <br />
                </p>
              </section>
              <section className="col-lg-2 col-12">
                <h3>shop</h3>
                <p>
                  Shop Men <br />
                  Shop Women <br />
                  Lookbook <br />
                  Gift Card Sale
                </p>
              </section>
              <section className="col-lg-2 col-12">
                <h5>Need Help?</h5>
                <p>
                  FAQs    <br />
                  Shipping & Returns <br />
                   Shoe Care <br />
                    Size Chart  <br />
                    Contact Us
                </p>
              </section>
            </div>
          </div>
        </div>
    </div>
  );
}

export default footer;
