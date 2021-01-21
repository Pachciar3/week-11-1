import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addMessage } from "../../ui/redux";

function Form({ addMessage }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = data;

    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(body),
    }
    fetch(process.env.REACT_APP_FORM_URL, options)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Network response was not ok');
      })
      .then(data => {
        if (data.success) {
          return addMessage({ type: "success", text: "Message was sent" });
        }
        throw new Error('We don\'t have good news :-(');
      })
      .catch(err => {
        addMessage({ type: "error", text: "Message not send. Error ocured" });
        console.error("[error] " + err.message)
      })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Name:
        <input name="Name" type="text" ref={register({ required: true })} />
      </label>
      <label>
        Phone Number:
        <input name="phone-number" type="tel" ref={register} />
      </label>
      <label>
        Message:
        <textarea name="message" ref={register} />
      </label>
      <button type="submit">Send</button>
    </form>
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.users.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (data) => dispatch(addMessage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);