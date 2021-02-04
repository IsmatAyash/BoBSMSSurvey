import React, { useState, useContext } from "react";
import { Container, Form, Button, Segment } from "semantic-ui-react";
import FirstPart from "./components/FirstPart";
import { ToastContainer } from "react-toastify";
import { DataContext } from "./DataContext";
import SecondPart from "./components/SecondPart";
import uuid from "react-uuid";
import ThirdPart from "./components/ThirdPart";
import FourthPart from "./components/FourthPart";
import { toast } from "react-toastify";
import firebase from "./firebase";
import Headers from "./components/Headers";

const Survey = () => {
  const { data, setData } = useContext(DataContext);
  const [sme, setSme] = useState({
    isSubmitted: false,
    smeid: uuid(),
    timestamp: new Date(),
  });
  const [radio, setRadio] = useState("");
  const [togs, setTogs] = useState({
    delSrv: false,
    onlSrv: false,
    dealWithBob: false,
    loans: false,
    facil: false,
    facActive: false,
    avgDailyAmt: false,
    empNeeded: false,
    appLoan: false,
  });
  const [checks, setChecks] = useState({ finPrb: null });

  const handleInput = ({ name, value }) => {
    if (name === "busName") setData({ ...data, busName: value });
    setSme({ ...sme, [name]: value });
  };

  const handleChange = (e, { name, value }) => {
    setRadio({ ...radio, [name]: value });
    setSme({ ...sme, [name]: value });
  };

  const toggle = (name, value) => {
    setTogs({ ...togs, [name]: !value });
    setSme({ ...sme, [name]: !value });
  };

  const handleCheck = ({ name, value, checked }) => {
    const prbVal = checked ? value : null;
    setChecks({ ...checks, [name]: prbVal });
    setSme({ ...sme, [name]: prbVal });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!data.isSubmitted) {
      setData({
        ...data,
        isSubmitted: true,
        busName: sme.busName,
      });
      toast.info("Procees with the survey.");
    } else {
      const smesRef = firebase.database().ref("smes");
      smesRef.push(sme);
      toast.success(
        "Business name data and details posted successfully, please start the survey"
      );
      setData({
        ...data,
        isSubmitted: false,
        busName: "",
      });
      setSme({});
    }
  };

  return (
    <>
      <ToastContainer />
      <Container>
        <Segment color="teal">
          <Headers first={false} bus={data.busName} />
          <Form onSubmit={handleSubmit}>
            <FirstPart
              onInput={handleInput}
              onChange={handleChange}
              radio={radio}
            />
            <SecondPart
              togs={togs}
              onSubmit={handleSubmit}
              onToggle={toggle}
              onChange={handleChange}
              onInput={handleInput}
              radio={radio}
            />
            <ThirdPart
              togs={togs}
              onSubmit={handleSubmit}
              onToggle={toggle}
              onChange={handleChange}
              onInput={handleInput}
            />
            <FourthPart
              togs={togs}
              checks={checks}
              onSubmit={handleSubmit}
              onToggle={toggle}
              onChange={handleChange}
              onInput={handleInput}
              onCheck={handleCheck}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Segment>
      </Container>
    </>
  );
};

export default Survey;
