const Button = ({ titleBtn, type, onClick, active }) => {
  
  return (
    <button className={`btn ${active? "btn-active": ""}`} type={type} onClick={onClick}>
      {titleBtn}
    </button>
  );
};
export default Button;
