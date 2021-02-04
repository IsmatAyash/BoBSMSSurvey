import React from "react";
import { Form, Select, Radio, Segment } from "semantic-ui-react";
import {
  loans,
  facil,
  ccys,
  textBoxes,
  busales,
  receivables as recs,
  payables as pays,
  workcap as caps,
  stocks as stks,
} from "./ThirdPartTexts";

const ThirdPart = ({ togs, onToggle, onInput, onChange }) => {
  return (
    <Segment color="orange">
      <Form.Field>
        <Radio
          toggle
          label={loans[0].text}
          checked={togs.loans}
          onClick={() => onToggle("loans", togs.loans)}
        />
      </Form.Field>
      <Form.Group inline>
        <Form.Field
          name={textBoxes[0].name}
          control={Select}
          options={ccys}
          placeholder={textBoxes[0].text}
          onChange={onChange}
          disabled={!togs.loans}
        />
        {loans.map(
          loan =>
            loan.id !== 0 && (
              <Form.Field>
                <input
                  key={loan.id}
                  type="text"
                  placeholder={loan.text}
                  name={loan.name}
                  onChange={e => onInput(e.currentTarget)}
                  disabled={!togs.loans}
                />
              </Form.Field>
            )
        )}
      </Form.Group>
      {/* Facilities */}
      <Form.Field>
        <Radio
          toggle
          label={facil[0].text}
          checked={togs.facil}
          onClick={() => onToggle("facil", togs.facil)}
        />
      </Form.Field>
      <Form.Group inline>
        <Form.Field
          name={textBoxes[0].name}
          control={Select}
          options={ccys}
          placeholder={textBoxes[0].text}
          onChange={onChange}
          disabled={!togs.facil}
        />
        <Form.Field>
          <input
            type="text"
            placeholder={facil[1].text}
            name={facil[1].name}
            onChange={e => onInput(e.currentTarget)}
            disabled={!togs.facil}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder={facil[2].text}
            name={facil[2].name}
            onChange={e => onInput(e.currentTarget)}
            disabled={!togs.facil}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            toggle
            label={facil[3].text}
            checked={togs.facActive}
            onClick={() => onToggle("facActive", togs.facActive)}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group>
        <Form.Field>
          <Radio
            toggle
            label={textBoxes[2].text}
            checked={togs.avgDailyAmt}
            onClick={() => onToggle("avgDailyAmt", togs.avgDailyAmt)}
          />
        </Form.Field>
        <Form.Field
          name={textBoxes[2].name}
          control={Select}
          options={busales}
          placeholder={textBoxes[2].text}
          onChange={onChange}
          disabled={!togs.avgDailyAmt}
        />
      </Form.Group>
      <Form.Field>
        <input
          type="text"
          placeholder={textBoxes[3].text}
          name={textBoxes[3].name}
          onChange={e => onInput(e.currentTarget)}
          disabled={togs.avgDailyAmt}
        />
      </Form.Field>
      <Form.Field>
        <label>{recs[0].text}</label>
      </Form.Field>
      <Form.Group widths="equal">
        {recs.map(
          rec =>
            rec.id !== 0 && (
              <Form.Field>
                <input
                  key={rec.id}
                  type="text"
                  placeholder={rec.text}
                  name={rec.name}
                  onChange={e => onInput(e.currentTarget)}
                />
              </Form.Field>
            )
        )}
      </Form.Group>
      <Form.Field>
        <label>{pays[0].text}</label>
      </Form.Field>
      <Form.Group widths="equal">
        {pays.map(
          pay =>
            pay.id !== 0 && (
              <Form.Field>
                <input
                  key={pay.id}
                  type="text"
                  placeholder={pay.text}
                  name={pay.name}
                  onChange={e => onInput(e.currentTarget)}
                />
              </Form.Field>
            )
        )}
      </Form.Group>
      <Form.Field>
        <label>{caps[0].text}</label>
      </Form.Field>
      <Form.Group widths="equal">
        {caps.map(
          cap =>
            cap.id !== 0 && (
              <Form.Field>
                <input
                  key={cap.id}
                  type="text"
                  placeholder={cap.text}
                  name={cap.name}
                  onChange={e => onInput(e.currentTarget)}
                />
              </Form.Field>
            )
        )}
      </Form.Group>
      <Form.Field>
        <label>{stks[0].text}</label>
      </Form.Field>

      <Form.Group widths="equal">
        {stks.map(
          stk =>
            stk.id !== 0 && (
              <Form.Field>
                <input
                  key={stk.id}
                  type="text"
                  placeholder={stk.text}
                  name={stk.name}
                  onChange={e => onInput(e.currentTarget)}
                />
              </Form.Field>
            )
        )}
      </Form.Group>
    </Segment>
  );
};

export default ThirdPart;
