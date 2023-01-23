import { Input } from "@mui/material";

const Modal = ({ title, onClose }) => {
  const onClickBackdrop = (event) => {
    if (event.target.id === "backdrop") {
      onClose();
    }
  };
  return (
    <div className="modal-background" id="backdrop" onClick={onClickBackdrop}>
      <div className="modal-container">
        <h1 className="modal-container--title">{title}</h1>
          <div className="modal-container--form">
            <Input/>
          </div>
      </div>
    </div>
  );
};
export default Modal;
