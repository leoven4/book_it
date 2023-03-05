import React from "react";
import "./search_form.scss";
import FormInput from "../form_input/form_input";

const SearchForm = () => {
  return (
    <div>
      <div className="main_text_container">
        <p>{"Find the working place that best suits you today"}</p>
      </div>
      <div>
        <FormInput
          // label = 'Password'
          type="text"
          // required
          name="search_form"
          value={"?"}
          // onChange=
        />
      </div>
    </div>
  );
};

export default SearchForm;
