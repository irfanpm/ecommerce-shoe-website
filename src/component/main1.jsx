import React, { useContext } from "react";
import "../../src/style/main1.css";
import { Context } from "../context/context";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";




function main1() {
  const {product} = useContext(Context)
  const saleshoe = product.filter((x) => x.top == 'sale')
  const nav=useNavigate()



  return (
    <div className=" ">
      <div className="wallpaper m-2  ">
        <div className=" container">
          <div className="home_des  pt-5 row">
            <div className="pt-5 col-12">
              <h1 className="maintext pt-5 col-12">
                Love the Planet we walk on
              </h1>
              <p className="te text-white ">
                Bibendum fermentum, aenean donec pretium aliquam blandit <br />
                tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
              </p>{" "}
              <br />
              <button style={{ width: "150px", height: "60px" }}>
                SHOP MEN
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button style={{ width: "150px", height: "60px" }}>
                SHOP WOMEN 
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container  ">
          <div className="  text-center opacity-5 gap-5 col-lg-12 col-md-6">
            <img
              width={100}
              src="https://e7.pngegg.com/pngimages/101/848/png-clipart-nike-sneakers-brand-shoe-logo-nike-logo-sneakers.png"
              alt=""
            />
            &nbsp;
            <img
              width={100}
              src="https://w7.pngwing.com/pngs/955/1018/png-transparent-old-puma-logo-brand-running-shoes-miscellaneous-text-fashion.png"
              alt=""
            />
            &nbsp;&nbsp; &nbsp;
            <img
              width={100}
              src="https://e7.pngegg.com/pngimages/519/252/png-clipart-logo-brand-adidas-sponsor-shoe-brands-angle-text.png"
              alt=""
            />{" "}
            &nbsp;&nbsp;
            <img
              width={100}
              src="https://cdn.imgbin.com/24/3/3/imgbin-vans-logo-vans-logo-Jn0AhJY7wVq9C1GCmdFPeyxvF.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
      <div className="container">
        <div className="row gap-2 " >
          <div className="col-md-6 col-12 " >
            <img   className="w-100"  src="https://ae01.alicdn.com/kf/S07cf326789e040359574b7488b09023dO.jpg_640x640Q90.jpg_.webp" alt="" />

          </div>
          <div className="col-md-5 col-12  pt-5">
            <h2 className="text-muted " >About us</h2>
            <h1 style={{fontSize:'45px',fontWeight:'500' }}  >Selected materials  designed for comfort  and sustainability</h1>
            <p className="fs-5">typesetting industry.
             but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
             <br /><button style={{width:'150px' ,height:'50px'}}>read more</button>
          </div >



        </div>


      </div>
      
     
      <div className='container gap-5 mt-5'>
      <div className=' row '>
      <h1 className="text-center text-secondary">Top sales</h1>

        {
          saleshoe.map((x) => {
            return (
              <div onClick={() => { nav(`/details/${x.id}`) }} className='col-lg-4 col-6'>
                <Card style={{ maxwidth: '48rem'  }} >
                  <Card.Img variant="top" src={x.Image} />
                  <Card.Body>
                    <Card.Title>{x.name}</Card.Title>
                    <Card.Text>
                     ${x.price}
                    </Card.Text>
                  </Card.Body>
                </Card> </div>)


          })



        }
        </div>
      </div>


      
    </div>
  );
}

export default main1;
