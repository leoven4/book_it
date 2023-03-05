import SignUp from "../../components/signup/signup";
import SignIn from "../../components/signin/signin";
import './authentication.scss'
const Authentication = () => {
  // this allow to use redirect, without losing the state due to dismount
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await creareUserDocumentFromAuth(response.user);
  //   }
  // }, []);
  // 
  // 
  // <button onClick={logGoogleUser}>Sign In with Google Popup</button> 
  // <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>

  return (
    <div className="authentication_container">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default Authentication;
