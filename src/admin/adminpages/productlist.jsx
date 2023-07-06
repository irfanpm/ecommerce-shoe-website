import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import { Card, Button,Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Productlist() {
  const { product, setProduct } = useContext(Context);
  const [state, setstate] = useState([]);
  const nav = useNavigate();
  const click1 = () => {
    const value = product.filter((x) => {
      return x.type == "men";
    });

    setstate(value);
  };
  const click2 = () => {
    const value = product.filter((x) => {
      return x.type == "women";
    });
    setstate(value);
  };
  const click3 = () => {
    const value = product;

    setstate(value);
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
        <button onClick={click1} className="col-3">
          men
        </button>
        <button onClick={click2} className="col-3">
          women
        </button>
        <button onClick={click3} className="col-3">
          all
        </button>
          {state.map((x, i) => {
            return (
              <div  className="w-75 h-25" >
                <Card>
                  <Card.Body className="d-flex" onClick={() => nav(`/admin/productdetails/${x.id}`)}>
                  <Card.Img  className="w-25" src={x.Image} />

                    <Card.Title>  {x.name}</Card.Title>
                  </Card.Body>
                  <Button
                  onClick={() => {
                    setProduct(product.filter((y) => y.id != x.id));
                    setstate(state.filter((x, j) => j != i));
                  }}
                  className="w-25 "
                >
                  delete
                </Button>
                </Card>
              
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Productlist;
