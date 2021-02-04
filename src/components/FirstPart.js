import React, { useState, useContext } from "react";
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
import RadioButton from "./RadioButton";

const FirstPart = ({ onInput, onChange, radio }) => {
  return (
    <Segment color="blue">
      {/* Business Name */}
      <Form.Field>
        {/* <label>{textBoxes[1].text}</label> */}
        <input
          type="text"
          placeholder={textBoxes[1].text}
          name={textBoxes[1].name}
          onChange={e => onInput(e.currentTarget)}
        />
      </Form.Field>
      <RadioButton
        opts={blfs}
        radio={radio.blfs}
        name="blfs"
        onChange={onChange}
      />
      <Form.Field>
        {/* Business main owner and manager */}
        {/* <label>{textBoxes[2].title}</label> */}
        <input
          name={textBoxes[2].name}
          type="text"
          placeholder={textBoxes[2].text}
          name={textBoxes[2].name}
          onChange={e => onInput(e.currentTarget)}
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
        onChange={onChange}
      />
      {/* Business Type Details */}
      <Form.Field>
        <input
          type="text"
          placeholder={textBoxes[4].text}
          name={textBoxes[4].name}
          onChange={e => onInput(e.currentTarget)}
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
                onChange={e => onInput(e.currentTarget)}
              />
            )
        )}
      </Form.Group>
    </Segment>
  );
};

export default FirstPart;
