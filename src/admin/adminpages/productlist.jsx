import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import { Card, Button,Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Productlist() {
  const { product, setProduct } = useContext(Context);
  const [catagory, setcatagory] = useState([]);
  const nav = useNavigate();
  const click1 = () => {
    const value = product.filter((x) => {
      return x.type == "men";
    });

    setcatagory(value);
  };
  const click2 = () => {
    const value = product.filter((x) => {
      return x.type == "women";
    });
    setcatagory(value);
  };
  const click3 = () => {
    const value = product;

    setcatagory(value);
  };

  return (
    <div>
     

      <div className="container mt-5">
        <div className="row  gap-4 ">
            <div>
        <Button
          onClick={() => {
            nav("/admin/addproduct");
          }}
          className="col-3 "
          style={{ width: "100px", height: "60px" }}
        >
          add product
        </Button>
        </div>
        <br />
        <br />
        <button onClick={click1} className="col-md-3 col-12">
          men
        </button>
        <button onClick={click2} className="col-md-3 col-12">
          women
        </button>
        <button onClick={click3} className="col-md-3 col-12">
          all
        </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {catagory.map((x, i) => {
            return (
               
              <div  className="w-75 h-25  " >
                <Card className="hovereffect ">
                  <Card.Body  onClick={() => nav(`/admin/productdetails/${x.id}`)}>
                  <Card.Img style={{height:'100px',maxWidth:'100px' }} src={x.Image} />

                    <Card.Title>  {x.name}</Card.Title>
                  </Card.Body>
                  <Button
                  onClick={() => {
                    setProduct(product.filter((y) => y.id != x.id));
                    setcatagory(catagory.filter((x, j) => j != i));
                  }}
                  className=" btn btn-danger col-12 "
                  style={{width:'80px'}} 
                >
                  delete
                </Button>
                </Card>
              
              </div>
            );
          })}
          </div></div>
       
    </div>
  );
}

export default Productlist;
