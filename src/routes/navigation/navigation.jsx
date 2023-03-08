import { Outlet, Link } from "react-router-dom"; // must be nested in a BrowserRouter component
import { Fragment, useContext } from "react"; // allow to use a wrapping div without rendering an actual <div> in the DOM
import { ReactComponent as CrwLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user";
// using UserContext as a hook make the component re-render every time the context change
import { signOutUser } from "../../utils/firebase";
import "./navigation.scss";
import CartIcon from "../../components/cart_icon/cart_icon";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo_container" to="/">
          <CrwLogo className="logo" />
        </Link>
        <div className="nav_links_container">
          <Link className="nav_link" to="/shop">
            PLACES
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
