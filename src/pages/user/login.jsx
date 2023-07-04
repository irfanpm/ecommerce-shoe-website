import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Context } from "../../context/context";
import { Link, useNavigate } from "react-router-dom";
import { Card, Form, Button, NavbarBrand } from "react-bootstrap";

function login() {
  const userDetails = useContext(Context);
  const nav = useNavigate();
  const { userState } = userDetails;
  const userid = useContext(Context);
  const { userId, setId } = userid;
  const login = (event) => {
    event.preventDefault();

    const mail = event.target.email.value;
    const pas = event.target.pwd.value;
    if (pas == "admin" || mail == "admin") {
      nav("/admin");
    } else {
      const value = userState.filter((x) => {
        return x.email === mail || x.user === mail;
      });
      setId((preva) => (preva = value[0].id));

      if (value[0].pwd == pas) {
        nav("/");
      } else {
        console.log("error");
      }
    }
  };

  return (
    <div className="mt-5">
      <div>
        <Card className="container   p-4  " style={{ width: "25rem" }}>
          <h1 className="text-center">Login Page</h1> <br />
          <form className="d-flex flex-column " onSubmit={login}>
            <Form.Label>Email or username</Form.Label>
            <Form.Control
              type="Text"
              className=" border border-secondary"
              placeholder=" email or username"
              id="email"
              style={{ height: "50px" }}
            />
            <br />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="pwd"
              className=" border border-secondary "
              style={{ height: "50px" }}
            />
            <br />
            <Button variant="primary" type="submit" className="w-25">
              Submit
            </Button>
          </form>
          <Link to="/register">create new account</Link>
          <br />
          <br />
          <div className="text-center">
            <Button onClick={() => nav("/")} variant="primary">
              Home page
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default login;
