import React, { useState, useContext } from "react";
import uuid from "react-uuid";
import {
  Form,
  Select,
  Segment,
  Container,
  Header,
  Image,
  Button,
} from "semantic-ui-react";
import { DataContext } from "./../DataContext";
import { blfs, textBoxes, btypes, contactInfo as cnts } from "./FirstPartTexts";
import { toast } from "react-toastify";
import firebase from "./../firebase";
import RadioButton from "./RadioButton";

const FirstPart = () => {
  const { data, setData } = useContext(DataContext);
  const [sme, setSme] = useState({ smeid: uuid(), timestamp: new Date() });
  const [radio, setRadio] = useState("");

  const handleInput = ({ name, value }) => {
    setSme({ ...sme, [name]: value });
  };

  const handleChange = (e, { name, value }) => {
    setRadio({ ...radio, [name]: value });
    setSme({ ...sme, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const smesRef = firebase.database().ref("smes");
    setData({
      ...data,
      isSubmitted: true,
      busName: sme.busName,
      smeid: sme.smeid,
    });
    smesRef.push(sme);
    toast.success(
      "Business name data and details posted successfully, please start the survey"
    );
  };

  return (
    <Container>
      <Segment color="teal">
        <Header as="h2" icon textAlign="center">
          <Image centered size="massive" src="/logot.png" />
          <Header.Content>SME Business Survey</Header.Content>
        </Header>{" "}
        <Form onSubmit={handleSubmit}>
          <Segment color="blue">
            {/* Business Name */}
            <Form.Field>
              {/* <label>{textBoxes[1].text}</label> */}
              <input
                type="text"
                placeholder={textBoxes[1].text}
                name={textBoxes[1].name}
                onChange={e => handleInput(e.currentTarget)}
              />
            </Form.Field>
            <RadioButton
              opts={blfs}
              onChange={handleChange}
              radio={radio.blf}
              name="blf"
            />
            <Form.Field>
              {/* Business main owner and manager */}
              {/* <label>{textBoxes[2].title}</label> */}
              <input
                name={textBoxes[2].name}
                type="text"
                placeholder={textBoxes[2].text}
                name={textBoxes[2].name}
                onChange={e => handleInput(e.currentTarget)}
              />
            </Form.Field>
            {/* Business Type */}
            <Form.Field>
              <label>{textBoxes[3].text}</label>
            </Form.Field>
            <Form.Field
              name={textBoxes[3].name}
              control={Select}
              options={btypes}
              placeholder={textBoxes[3].text}
              onChange={handleChange}
            />
            {/* Business Type Details */}
            <Form.Field>
              <input
                type="text"
                placeholder={textBoxes[4].text}
                name={textBoxes[4].name}
                onChange={e => handleInput(e.currentTarget)}
              />
            </Form.Field>
            <Form.Field>
              <label>{cnts[0].text}</label>
            </Form.Field>
            <Form.Group widths="equal">
              {cnts.map(
                cnt =>
                  cnt.id !== 0 && (
                    <Form.Input
                      key={cnt.id}
                      fluid
                      placeholder={cnt.text}
                      name={cnt.name}
                      onChange={e => handleInput(e.currentTarget)}
                    />
                  )
              )}
              ;
            </Form.Group>
          </Segment>
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default FirstPart;
