import { useContext, useState } from "react";
import { Dropdown, Image} from "react-bootstrap";
import { Context } from "../context/context";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function searchbar() {
  const productData = useContext(Context);
  const nav=useNavigate()

  const { product } = productData;
  const [searchstate, searchsetstate] = useState([]);
 
  const search = (event) => {
    const typingvalue = event.target.value.toLowerCase();

    var value = product.filter(
      (prd) => prd.name.toLowerCase().slice(0, typingvalue.length) == typingvalue
    );
   searchsetstate(value);
  };

  return (
    <div>
       <Dropdown>
      <Dropdown.Toggle className="border-0" style={{background:'transparent'}} >
      <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={search}
          />
         
        </Form>
        
      </Dropdown.Toggle>

   
        
     
              <Dropdown.Menu>
        {searchstate.map((x) => {
          return (
                <Dropdown.Item href="#/action-1" onClick={()=>nav(`/details/${x.id}`)} > <Image src={x.Image} rounded  className="w-25"/>{x.name}</Dropdown.Item>
               
                );
              })}
              </Dropdown.Menu>

            
        </Dropdown>
      </div>

  );
}

export default searchbar;
