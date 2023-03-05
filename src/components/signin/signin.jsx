import { useState } from "react";
import FormInput from "../form_input/form_input";
import { creareUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase";
import './signin.scss'
import Button from "../button/button";

const defaulFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaulFormFields);
  const { email, password } = formFields;

  // const {currentUser, setCurrentUser} = useContext(UserContext);
  // const { setCurrentUser } = useContext(UserContext);


  const resetFormField = () => {
    setFormFields(defaulFormFields)
  }    

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user);        
      resetFormField();

    }catch(error){

      switch(error.code){  
        case 'auth/wrong-password':
          alert('Incorrect password or email');
          break;
        
          case 'auth/user-not-found':
          alert('Userr not found');
          break;
        
          default:
          console.log(error)
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });

  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    // setCurrentUser(user);        
    await creareUserDocumentFromAuth(user);
  };


  return (
    <div className="sign_up_container">
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label = 'Email'
          type="email"
          // reqzsuired
          name="email"
          value={email}
          onChange={handleChange}   
        />
 
        <FormInput
          label = 'Password'
          type="password"
          // required
          name="password"
          value={password}
          onChange={handleChange}   
        />
        
        <div className="buttons_container">
          <Button type="submit">Sign in</Button>
          <Button onClick={signInWithGoogle} buttonType='google' type="submit">Google Sign in</Button>
        </div>
        
      </form>
    </div>
  );
};

export default SignIn;
