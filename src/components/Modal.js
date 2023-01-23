import {  FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";

const data =  {
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
wand: { "wood": "vine", "core": "dragon heartstring", "length": "" },
patronus: "otter",
hogwartsStudent: true,
hogwartsStaff: false,
actor: "Emma Watson",
alive: true,
image: "http://hp-api.herokuapp.com/images/hermione.jpeg"
}

const Modal = ({ title, onClose, addNewCharacter }) => {
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
          <TextField label="Nombre" variant="filled" />
          <TextField label="Cumpleaños" variant="filled" />
          <TextField label="Color de Ojos" variant="filled" />
          <TextField label="Color de Pelo" variant="filled" />
          <div>
            <FormLabel>Gender
            </FormLabel>
              <RadioGroup defaultValue="female" name="gender">
                <FormControlLabel value="female" control={<Radio />} label="Mujer" />
                <FormControlLabel value="male" control={<Radio />} label="Hombre" />
              </RadioGroup>
          <RadioGroup>

          </RadioGroup>
          </div>
            <button onClick={()=>addNewCharacter(data)}>Enviar</button>
          </div>
      </div>
    </div>
  );
};
export default Modal;
