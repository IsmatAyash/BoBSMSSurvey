import React, { useState, useContext } from "react";
import {
  Header,
  Image,
  Button,
  Checkbox,
  Form,
  Radio,
  Select,
  Container,
  Segment,
  Dropdown,
} from "semantic-ui-react";
import FirstPart from "./components/FirstPart";
import { DataContext } from "./DataContext";

const Survey = () => {
  const [radio, setRadio] = useState("");
  const { data, setData } = useContext(DataContext);

  const handleChange = (e, { name, value }) => {
    console.log(name, value);
    setData({ ...data, [name]: value, radio: value });
    // setQns({ ...qns, [name]: value });
  };

  const handleInput = ({ name, value }) => {
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ data });
  };

  const friendOptions = [
    {
      key: "Jenny Hess",
      text: "Jenny Hess",
      value: "Jenny Hess",
      image: { avatar: true, src: "/images/avatar/small/jenny.jpg" },
    },
    {
      key: "Elliot Fu",
      text: "Elliot Fu",
      value: "Elliot Fu",
      image: { avatar: true, src: "/images/avatar/small/elliot.jpg" },
    },
    {
      key: "Stevie Feliciano",
      text: "Stevie Feliciano",
      value: "Stevie Feliciano",
      image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
    },
  ];

  const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
  ];
  return (
    <Container>
      <Segment color="teal">
        <Header as="h2" icon textAlign="center">
          <Image centered size="massive" src="/logot.png" />
          <Header.Content>SME Business Survey</Header.Content>
        </Header>{" "}
        <Form onSubmit={handleSubmit}>
          <FirstPart onChange={handleChange} onInput={handleInput} />
          <Form.Group inline>
            <Form.Field
              name="quantity"
              control={Radio}
              label="One"
              value="1"
              checked={radio === "1"}
              onChange={handleChange}
            />
            <Form.Field
              name="quantity"
              control={Radio}
              label="Two"
              value="2"
              checked={radio === "2"}
              onChange={handleChange}
            />
            <Form.Field
              name="gender"
              control={Select}
              options={options}
              placeholder="Gender"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Field
            name="gender"
            control={Select}
            label="Gender"
            options={options}
            placeholder="Gender"
            onChange={handleChange}
          />
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              name="lastName"
              onChange={e => handleInput(e.currentTarget)}
            />
          </Form.Field>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Choose this"
                name="radioGroup"
                value="this"
                checked={radio === "this"}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field
              name="gender"
              control={Select}
              options={options}
              placeholder="Gender"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Field>
            <Radio
              label="Or that"
              name="radioGroup"
              value="that"
              checked={radio === "that"}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              name="agree"
              label="I agree to the Terms and Conditions"
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default Survey;
