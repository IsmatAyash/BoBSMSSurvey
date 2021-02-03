import React, { useState, useContext } from "react";
import {
  Container,
  Form,
  Button,
  Segment,
  Header,
  Image,
} from "semantic-ui-react";
import FirstPart from "./components/FirstPart";
import { ToastContainer } from "react-toastify";
import { DataContext } from "./DataContext";
import SecondPart from "./components/SecondPart";
import uuid from "react-uuid";

const Survey = () => {
  const { data, setData } = useContext(DataContext);
  const [sme, setSme] = useState({ smeid: uuid() });
  const [radio, setRadio] = useState("");
  const [togs, setTogs] = useState({
    delSrv: false,
    onlSrv: false,
    dealWithBob: false,
  });

  const handleInput = ({ name, value }) => {
    setSme({ ...sme, [name]: value });
  };

  const handleChange = (e, { name, value }) => {
    setRadio({ ...radio, [name]: value });
    setSme({ ...sme, [name]: value });
  };

  const toggle = (name, value) => {
    console.log(value);
    setTogs({ ...togs, [name]: !value });
    setSme({ ...sme, [name]: !value });
  };

  console.log("SMEs", sme);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("SME", sme);
    // const smesRef = firebase.database().ref("smes");
    // setData({
    //   ...data,
    //   isSubmitted: true,
    //   busName: sme.busName,
    //   smeid: sme.smeid,
    // });
    // smesRef.push(sme);
    // toast.success(
    //   "Business name data and details posted successfully, please start the survey"
    // );
  };

  console.log(data);
  return (
    <Container>
      <ToastContainer />
      <Segment color="teal">
        <Header as="h2" icon textAlign="center">
          <Image centered size="massive" src="/logot.png" />
          <Header.Content>SME Business Survey</Header.Content>
          <Header.Subheader style={{ color: "blue", fontSize: 20 }}>
            {`Welcome Messrs ${data.busName}`}
          </Header.Subheader>
        </Header>

        <Form onSubmit={handleSubmit}>
          <SecondPart
            togs={togs}
            onSubmit={handleSubmit}
            onToggle={toggle}
            onChange={handleChange}
            onInput={handleInput}
            radio={radio}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
      {/* {!data.isSubmitted && !data.busName && <FirstPart />}
      {data.isSubmitted && data.busName && <SecondPart />} */}
    </Container>
  );
};

export default Survey;
