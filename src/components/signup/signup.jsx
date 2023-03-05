import { useState } from "react";
import FormInput from "../form_input/form_input";
import { createAuthUserWithEmailAndPassword, creareUserDocumentFromAuth } from "../../utils/firebase";
import './signup.scss'
import Button from "../button/button";

const defaulFormFields = {
  displayName: "",
  email: "",
  password: "",
  passwordConfirm: ""
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaulFormFields);
  const { displayName, email, password, passwordConfirm } = formFields;
  
  const resetFormField = () => {
    setFormFields(defaulFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await creareUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      console.log("User creation error", error);
      // if(error.code === 'auth/email-already-in-use') {
      //   alert('Email already in use')
      // }else{
      //   console.log('User creation error', error)
      // }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(value)
    console.log(event.target)

  };

  return (
    <div className="sign_up_container">
      <h2>Don't have an account?</h2>
      <spam>Sign up with your email and password</spam>
      <form onSubmit={handleSubmit}>
        <FormInput
          label = 'Display name'
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}   
        />

        <FormInput
          label = 'Email'
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}   
        />

        <FormInput
          label = 'Password'
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}   
        />

        <FormInput
          label = 'Confirm Pssword'
          type="password"
          required
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleChange}   
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
