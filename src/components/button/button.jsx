import './button.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google_sign_in',
  inverted: 'inverted',
}


const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button_container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;