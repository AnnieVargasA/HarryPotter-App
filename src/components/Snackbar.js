import { Alert, Snackbar } from "@mui/material";

const SnackBarComponent = ({ open, onClose, severity, message }) => {
  return (
    <Snackbar autoHideDuration={6000} open={open} onClose={onClose}>
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};
export default SnackBarComponent;
