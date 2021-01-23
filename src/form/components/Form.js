import React from "react";

import Field from './Field';

function Form({ handleSubmit, errors, register }) {
  const styles = {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    width: "100%",
    margin: "0px auto"
  }

  return (
    <form onSubmit={handleSubmit} style={styles}>
      <Field label="Name:" error={errors.name}>
        <input name="name" type="text" ref={register({ required: true })} />
      </Field>
      <Field label="Phone number: ">
        <input name="phone-number" type="number" ref={register} />
      </Field>
      <Field label="Message: ">
        <textarea name="message" ref={register} />
      </Field>
      <button type="submit">Send</button>
    </form>
  )
}

export default Form;