import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Button from "./Button";

const data = {
  id: Date.now(),
  name: "Hermione Granger",
  species: "human",
  gender: "female",
  house: "Gryffindor",
  dateOfBirth: "19-09-1979",
  yearOfBirth: 1979,
  ancestry: "muggleborn",
  eyeColour: "brown",
  hairColour: "brown",
  wand: { wood: "vine", core: "dragon heartstring", length: "" },
  patronus: "otter",
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: "Emma Watson",
  alive: true,
  image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
};

const Modal = ({ title, onClose, addNewCharacter }) => {
  const {
    name,
    species,
    gender,
    house,
    dateOfBirth,
    yearOfBirth,
    ancestry,
    eyeColour,
    hairColour,
    wand,
    patronus,
    hogwartsStudent,
    hogwartsStaff,
    actor,
    alive,
    image,
  } = addNewCharacter();
  console.log(addNewCharacter());
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
          <TextField
            value={name}
            className="textinput"
            label="Nombre"
            variant="filled"
          />
          <TextField value={dateOfBirth} label="Cumpleaños" variant="filled" />
          <TextField value={eyeColour} label="Color de Ojos" variant="filled" />
          <TextField
            value={hairColour}
            label="Color de Pelo"
            variant="filled"
          />
          <div>
            <FormLabel>Género</FormLabel>
            <RadioGroup defaultValue="female" name="gender">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Mujer"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Hombre"
              />
            </RadioGroup>
          </div>
          <div>
            <FormLabel>Posición</FormLabel>
            <RadioGroup defaultValue="student" name="position">
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Estudiante"
              />
              <FormControlLabel
                value="staff"
                control={<Radio />}
                label="Staff"
              />
            </RadioGroup>
          </div>
          <Button
            type="submit"
            titleBtn="Enviar"
            onClick={() => addNewCharacter(data)}
          >
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
