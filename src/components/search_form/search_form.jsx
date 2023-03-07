import React from "react";
import "./search_form.scss";
import FormInput from "../form_input/form_input";

const SearchForm = () => {
  var question_mark = ""
  
  const onInputChange = (event) => {
    question_mark =  event.target.value;
    console.log(event.target.value)
  }

  return (
    <div className="main_text_container">
      <div className="main_text">
        <p>{"Find the working place that best suits you today"}</p>
      </div>
      <div>
        <FormInput
          type="text"
          placeholder="?"
          name="search_form"
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default SearchForm;
