import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function adminmain() {
  const nav = useNavigate();
  return (
    <div className="row h-100 ">
      <div
        style={{ background: "black" }}
        className=" text-center w-25 col-12"
      >
        <h1 className="text-white">Admin</h1>
        <br />
        <br />

        <h3 className="text-white" onClick={() => nav("/admin/userlist")}>
          user
        </h3>
        <br />
        <br />
        <h3 className="text-white" onClick={() => nav("/admin/productlist")}>
          Product
        </h3>
      </div>
      <div className="col ">
        <div className="text-center pd-5" >
          <h1>Hello Admin</h1>

          <Button onClick={() => nav("/login")} className="float-end">
            logout
          </Button>
        </div>
        <div className="h-75">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default adminmain;
