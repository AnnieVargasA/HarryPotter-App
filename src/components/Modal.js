import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Button from "./Button";

const Modal = ({ title, onClose, addNewCharacter }) => {
  const [fullName, setFullName]=useState("");
  const [birthday, setBirthday]=useState("");
  const [eyes, setEyes]=useState("");
  const [hair, setHair]=useState("");
  const [gender, setGender]=useState("female");
  const [position, setPosition]=useState("student");

  const handleName = (event)=>{
    setFullName(event.target.value)
  }
  const handleBirthday = (event)=>{
    setBirthday(event.target.value)
  }
  const handleEyes= (event)=>{
    setEyes(event.target.value)
  }
  const handleHair = (event)=>{
    setHair(event.target.value)
  }
  const submitData = ()=>{
    const data = {
      id: Date.now(),
      name: fullName,
      species: "human",
      gender,
      house: "",
      dateOfBirth:birthday,
      yearOfBirth: "",
      ancestry: "",
      eyeColour: eyes,
      hairColour: hair,
      wand: { wood: "vine", core: "dragon heartstring", length: "" },
      patronus: "",
      hogwartsStudent: position==="student",
      hogwartsStaff: position==="staff",
      actor: "",
      alive: true,
      image: "https://media.istockphoto.com/id/1300845620/es/vector/icono-de-usuario-plano-aislado-sobre-fondo-blanco-s%C3%ADmbolo-de-usuario-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=grBa1KTwfoWBOqu1n0ewyRXQnx59bNHtHjvbsFc82gk=",
    };
    addNewCharacter(data);
  }
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
            value={fullName}
            className="textinput"
            label="Nombre"
            variant="filled"
            onChange={handleName}
          />
          <TextField value={birthday} label="Cumpleaños" variant="filled" onChange={handleBirthday}/>
          <TextField value={eyes} label="Color de Ojos" variant="filled" onChange={handleEyes}/>
          <TextField
            value={hair}
            label="Color de Pelo"
            variant="filled"
            onChange={handleHair}
          />
          <div>
            <FormLabel>Género</FormLabel>
            <RadioGroup value={gender} onChange={(event)=>setGender(event.target.value)} >
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
            <RadioGroup value={position} onChange={(event)=> setPosition(event.target.value)} >
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
            onClick={submitData}
          >
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
