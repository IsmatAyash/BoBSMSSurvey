import React, { useState, useContext } from "react";
import { Form, Select, Radio, Segment } from "semantic-ui-react";
import { DataContext } from "./../DataContext";

const FirstPart = ({ onChange, onInput }) => {
  const { data } = useContext(DataContext);

  const blfs = [
    { id: 1, text: "Individuals", value: "Individual" },
    { id: 2, text: "Establishments", value: "Establishment" },
    { id: 3, text: "Companies (SARL, SAL)", value: "Company" },
  ];

  const textBoxes = [
    { id: 1, title: "Business Name", name: "busName" },
    { id: 2, title: "Business main owner and manager", name: "busMgr" },
    { id: 3, title: "Business Type - details ...", name: "busType" },
    { id: 4, title: "Mobile", name: "mobile" },
    { id: 5, title: "Land Line", name: "landLine" },
    { id: 6, title: "Email", name: "email" },
    { id: 7, title: "Address", name: "address" },
    { id: 8, title: "Web Site", name: "webSite" },
    { id: 9, title: "Mobile", name: "mobile" },
  ];

  const btypes = [
    { id: 1, text: "Services", value: "Services" },
    { id: 2, text: "Commercial", value: "Commercial" },
    { id: 3, text: "Industrial", value: "Industrial" },
    { id: 4, text: "Agriculture", value: "Agriculture" },
    { id: 5, text: "Handicraft", value: "Handicraft" },
  ];

  return (
    <Segment color="blue">
      {/* Business Name */}
      <Form.Field>
        {/* <label>{textBoxes[0].title}</label> */}
        <input
          type="text"
          placeholder={textBoxes[0].title}
          name={textBoxes[0].name}
          onChange={e => onInput(e.currentTarget)}
        />
      </Form.Field>
      <Form.Field>Business legal form</Form.Field>
      <Form.Group inline>
        {blfs.map(blf => (
          <Form.Field
            key={blf.id}
            name="blf"
            control={Radio}
            label={blf.text}
            value={blf.value}
            checked={data.radio === blf.value}
            onChange={onChange}
          />
        ))}
      </Form.Group>
      <Form.Field>
        {/* Business main owner and manager */}
        {/* <label>{textBoxes[1].title}</label> */}
        <input
          name={textBoxes[1].name}
          type="text"
          placeholder={textBoxes[1].title}
          name={textBoxes[1].name}
          onChange={e => onInput(e.currentTarget)}
        />
      </Form.Field>
      {/* Business Type */}
      <Form.Field>
        <label>{textBoxes[2].title}</label>
      </Form.Field>
      <Form.Field
        name="busType"
        control={Select}
        options={btypes}
        placeholder="Business Type"
        onChange={onChange}
      />
      {/* Business Type Details */}
      <Form.Field>
        <input
          type="text"
          placeholder={textBoxes[2].title}
          name={textBoxes[2].name}
          onChange={e => onInput(e.currentTarget)}
        />
      </Form.Field>
      <Form.Field>
        <label>Contact Info</label>
      </Form.Field>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          placeholder={textBoxes[3].title}
          name={textBoxes[3].name}
          onChange={e => onInput(e.currentTarget)}
        />
        <Form.Input
          fluid
          placeholder={textBoxes[4].title}
          name={textBoxes[4].name}
          onChange={e => onInput(e.currentTarget)}
        />
        <Form.Input
          fluid
          placeholder={textBoxes[5].title}
          name={textBoxes[5].name}
          onChange={e => onInput(e.currentTarget)}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          placeholder={textBoxes[6].title}
          name={textBoxes[6].name}
          onChange={e => onInput(e.currentTarget)}
        />
        <Form.Input
          fluid
          placeholder={textBoxes[7].title}
          name={textBoxes[7].name}
          onChange={e => onInput(e.currentTarget)}
        />
      </Form.Group>
    </Segment>
  );
};

export default FirstPart;
