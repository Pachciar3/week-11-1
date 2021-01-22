import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import Form from '../components/Form';
import { addMessage } from "../../ui/redux";

function Contact({ addMessage }) {
  const { register, handleSubmit, errors } = useForm();

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
    <Form handleSubmit={handleSubmit(onSubmit)} errors={errors} register={register} />
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.users.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (data) => dispatch(addMessage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);