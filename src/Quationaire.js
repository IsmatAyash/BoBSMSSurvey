import React, { useState } from "react";
import firebase from "./firebase";
import uuid from "react-uuid";

const Quationaire = () => {
  const initValues = {
    uid: uuid(),
    smeName: "",
    answers: {
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: "",
      ans5: "",
    },
    isSubmitted: false,
  };
  const [qns, setQns] = useState(initValues);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {};

  const { smeName } = qns;

  return (
    <>
      {!qns.smeName && !qns.isSubmitted && (
        <div>
          <h2>Please enter your company name</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="sName"
              type="text"
              placeholder="Enter Company Name"
              value={smeName}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Quationaire;
