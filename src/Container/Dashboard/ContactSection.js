import React, { useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import "./style.scss";

function ContactSection() {
  var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  const [formValues, setFormValues] = useState({ email: "", comment: "" });
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  function onChangeText(e) {
    let updatedValues = formValues;
    updatedValues[e.target.name] = e.target.value;
    console.log(updatedValues);
    setFormValues(updatedValues);
  }

  function onSubmit() {
    if (formValues.email === "") {
      setError(true);
      setErrorMsg("Please enter email");
    } else if (!regexEmail.test(formValues.email)) {
      setError(true);
      setErrorMsg("Please enter valid email");
    } else if (formValues.comment === "") {
      setError(true);
      setErrorMsg("Please enter comment");
    } else {
      setError(false);
      setErrorMsg("");
    }
  }

  function showData() {
    if (regexEmail.test(formValues.email) && formValues.email !== "") {
      return (
        <div className="contact-data ">
          <div>{formValues?.email}</div>
          <div>{formValues?.comment}</div>
        </div>
      );
    }
  }

  return (
    <section>
      <div className="sub-header"> Contact US</div>
      <div className="parent-container">
        <div className="child-container">
          <div className="contactUs-form">
            <Input
              label={"Email Id"}
              name={"email"}
              type={"email"}
              handleChange={onChangeText}
            />
            <Input
              label={"Comment"}
              name={"comment"}
              type={"textarea"}
              handleChange={onChangeText}
            />
            {error && <p className="error">{errorMsg}</p>}
            <Button btnName={"Submit"} handleSubmit={onSubmit} />
          </div>
        </div>
        {showData()}
      </div>
    </section>
  );
}

export default ContactSection;
