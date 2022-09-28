import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import vCheck from '../local-json/validation_checks.json';

const FinalPage = () => {
  const dispatch = useDispatch();
  const [code, setcode] = useState(Math.floor(Math.random() * 40)+1);
  console.log(vCheck);

  return (
    <div>
      <div className="w3-content w3-container w3-padding-32" id="about">
        {/* <div style={{whiteSpace: "pre-line", textAlign: "left", fontSize: "18px"}}>{consentContent[0]}</div> */}
        <p>
            <b>Thanks for participating in our study !!</b>
            <br />
            {/* Use the following code to enter for completion check: { vCheck[code]['secret_code'] } */}
            Enter the following code on Prolific/ MTurk to log completion: C25L3CX7
            <br />
        </p>
      </div>
    </div>
  );
};

export default FinalPage;