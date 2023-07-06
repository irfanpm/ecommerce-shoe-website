import React from "react";
import "../style/main1.css";
import { CiDeliveryTruck  } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import { ImLoop2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { BsInstagram ,BsFacebook,BsPinterest, BsTwitter} from "react-icons/bs";

function footer() {
  const nav=useNavigate()
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
          <button style={{ width: "150px", height: "60px" }} onClick={()=>nav('/Men')} >SHOP MEN</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button style={{ width: "160px", height: "60px" }} onClick={()=>nav('/Women')} >SHOP WOMEN</button>
        </div>
      </div>
      <div style={{height:'150px'}} className="container mt-5"  >
        <div className="row">
          <div className="col-4" >
            < GrSecure   className="fs-3" /> <span className="fs-5"> Secure Payment </span>
          
          </div>
           <div className="col-4" >
            <CiDeliveryTruck className="fs-3" /> <span className="fs-5"> Express Shipping </span>
          
          </div>
           <div className="col-4" >
           <ImLoop2  className="fs-3"   /><span className="fs-5"> Free Return </span>
          
          </div>
        </div>

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
            <div className="d-flex gap-3">
              <BsInstagram/>
              <BsFacebook/>
              <BsPinterest/>
              <BsTwitter/>

              </div>
          </div>
        </div>
        <div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 ">
              <span>© 2023 Recycled Shoe Store. Powered by Recycled Shoe Store.</span>

             
              </div>
             

            <div className="col-md-6">

            <img src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png" alt="" />
            </div>
            </div>

          </div>
        </div>
    </div>
  );
}

export default footer;
