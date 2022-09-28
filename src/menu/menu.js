import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import { menu } from "./menuActions";
import { useDispatch } from "react-redux";
import { setAssignment } from "../assigner/assignerActions";

const buttonStyle = {
  backgroundColor: "white",
  borderColor: "black",
  borderRadius: "12px",
  color: "black",
  height: 150,
  width: 350,
  fontSize: "25px",
  margin: "10px",
};

const Menu = () => {

  const dispatch = useDispatch();

  function setCon(con) {
    console.log("Setting Assignment");
    dispatch(setAssignment(con));
    console.log(con);
  }

  return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div>
          <div>
            <label
              style={{
                color: "black",
                fontSize: "25px",
                borderRadius: "12px",
                transform: "translate(0%, -80%)",
              }}
            >
              Development Menu
            </label>
          </div>
        </div>
      </div>
  );
}

export default Menu;