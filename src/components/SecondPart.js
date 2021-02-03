import React from "react";
import { Form, Select, Radio, Segment } from "semantic-ui-react";
import { textBoxes, banks, acctype } from "./SecondPartTexts.js";
import RadioButton from "./RadioButton";

const SecondPart = ({ togs, onToggle, onInput, onChange, radio }) => {
  return (
    <Segment color="blue">
      <Form.Field>
        <Radio
          toggle
          label={textBoxes[0].text}
          checked={togs.delSrv}
          onClick={() => onToggle("delSrv", togs.delSrv)}
        />
      </Form.Field>
      <Form.Group inline>
        <Form.Field>
          <Radio
            toggle
            label={textBoxes[1].text}
            checked={togs.onlSrv}
            onClick={() => onToggle("onlSrv", togs.onlSrv)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder={textBoxes[2].text}
            name={textBoxes[2].name}
            onChange={e => onInput(e.currentTarget)}
            disabled={!togs.onlSrv}
          />
        </Form.Field>
      </Form.Group>
      <RadioButton
        opts={banks}
        radio={radio.banks}
        name="banks"
        onChange={onChange}
      />
      <Form.Field>
        <input
          type="text"
          placeholder={textBoxes[4].text}
          name={textBoxes[4].name}
          onChange={e => onInput(e.currentTarget)}
        />
      </Form.Field>
      <Form.Field>
        <input
          type="text"
          placeholder={textBoxes[5].text}
          name={textBoxes[5].name}
          onChange={e => onInput(e.currentTarget)}
        />
      </Form.Field>
      <Form.Group inline>
        <Form.Field>
          <Radio
            toggle
            label={textBoxes[6].text}
            checked={togs.dealWithBob}
            onClick={() => onToggle("dealWithBob", togs.dealWithBob)}
          />
        </Form.Field>
        <Form.Field
          name={textBoxes[7].name}
          control={Select}
          options={acctype}
          placeholder={textBoxes[7].text}
          onChange={onChange}
          disabled={!togs.dealWithBob}
        />
        <Form.Field>
          <input
            type="text"
            placeholder={textBoxes[8].text}
            name={textBoxes[8].name}
            onChange={e => onInput(e.currentTarget)}
            disabled={!togs.dealWithBob}
          />
        </Form.Field>
      </Form.Group>
      <Segment color="orange"></Segment>
    </Segment>
  );
};

export default SecondPart;
