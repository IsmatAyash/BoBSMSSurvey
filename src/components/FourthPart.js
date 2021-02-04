import React from "react";
import { Form, Select, Radio, Segment, TextArea } from "semantic-ui-react";
import {
  employees as emps,
  empsnum,
  loans,
  appamt,
  repays,
  loanUsage as lns,
  problems as prbs,
  othdet,
} from "./FourthPartTexts";

const FourthPart = ({ togs, checks, onToggle, onInput, onChange, onCheck }) => {
  return (
    <Segment color="red">
      <Form.Field>
        <label>{emps[0].text}</label>
      </Form.Field>
      <Form.Field
        name={emps[1].name}
        control={Select}
        options={empsnum}
        placeholder={emps[1].text}
        onChange={onChange}
      />
      <Form.Field>
        <input
          type="text"
          placeholder={emps[2].text}
          name={emps[2].name}
          onChange={e => onInput(e.currentTarget)}
        />
      </Form.Field>
      <Form.Group>
        <Form.Field>
          <Radio
            toggle
            label={emps[3].text}
            checked={togs.empNeeded}
            onClick={() => onToggle("empNeeded", togs.empNeeded)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder={emps[4].text}
            name={emps[4].name}
            onChange={e => onInput(e.currentTarget)}
            disabled={!togs.empNeeded}
          />
        </Form.Field>
      </Form.Group>
      <Segment color="green">
        <Form.Field>
          <Radio
            toggle
            label={loans[0].text}
            checked={togs.appLoan}
            onClick={() => onToggle("appLoan", togs.appLoan)}
          />
        </Form.Field>

        <Form.Group widths="equal">
          <Form.Field
            name={loans[1].name}
            control={Select}
            options={appamt}
            placeholder={loans[1].text}
            onChange={onChange}
            disabled={!togs.appLoan}
          />
          <Form.Field
            name={loans[2].name}
            control={Select}
            options={repays}
            placeholder={loans[2].text}
            onChange={onChange}
            disabled={!togs.appLoan}
          />
        </Form.Group>
        <Form.Field>
          <label>{lns[0].text}</label>
        </Form.Field>

        <Form.Group widths="equal">
          {lns.map(
            ln =>
              ln.id !== 0 && (
                <Form.Field>
                  <input
                    key={ln.id}
                    type="text"
                    placeholder={ln.text}
                    name={ln.name}
                    onChange={e => onInput(e.currentTarget)}
                    disabled={!togs.appLoan}
                  />
                </Form.Field>
              )
          )}
        </Form.Group>
      </Segment>
      <Form.Group grouped>
        <Form.Field>
          <label>{prbs[0].text}</label>
        </Form.Field>
        {prbs.map(
          prb =>
            prb.id !== 0 && (
              <Form.Field
                key={prb.id}
                label={prb.text}
                name={prb.name}
                value={prb.text}
                control="input"
                type="checkbox"
                checked={checks[prb.name]}
                onChange={e => onCheck(e.target)}
              />
            )
        )}
        <Form.Field>
          <TextArea
            placeholder={othdet.text}
            name={othdet.name}
            onChange={e => onInput(e.currentTarget)}
          />
        </Form.Field>
      </Form.Group>
    </Segment>
  );
};

export default FourthPart;
