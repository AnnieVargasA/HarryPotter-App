const Button = ({ titleBtn, type, onClick }) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {titleBtn}
    </button>
  );
};
export default Button;
