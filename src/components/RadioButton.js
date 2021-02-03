import React from "react";
import { Radio, Form } from "semantic-ui-react";

const RadioButton = ({ opts, onChange, radio, name }) => {
  return (
    <>
      <Form.Field>{opts[0].text}</Form.Field>
      <Form.Group inline>
        {opts.map(
          opt =>
            opt.id !== 0 && (
              <Form.Field
                key={opt.id}
                name={name}
                control={Radio}
                label={opt.text}
                value={opt.value}
                checked={radio === opt.value}
                onChange={onChange}
              />
            )
        )}
      </Form.Group>
    </>
  );
};

export default RadioButton;
