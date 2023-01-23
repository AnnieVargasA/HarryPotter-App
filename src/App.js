import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import SnackBarComponent from "./components/Snackbar";
import HP from "./img/HP-title.svg";
import { addFavorite } from "./redux/reducers/favorites/favoritesSlice";

function App() {
  const [openAlert, setOpenAlert] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [activeBtn, setActiveBtn] = useState("characters");

  const favorites = useSelector((state) => state.favorites.characters);
  const dispatch = useDispatch();
  console.log(favorites);

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };
  const handleStudentsRequest = async () => {
    const response = await axios.get("http://localhost:5000/students");
    setCharacters(response.data);
    setActiveBtn("students");
  };
  const handleStaffRequest = async () => {
    const response = await axios.get("http://localhost:5000/staff");
    setCharacters(response.data);
    setActiveBtn("staff")
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };
  const addCharacter = ({ name, imgProfile, id }) => {
    dispatch(addFavorite({ name, imgProfile, id }));
  };

  useEffect(()=>{
    const fetchCharacters= async()=>{
      const response = await axios.get("http://localhost:5000/characters");
    setCharacters(response.data);
    }
    fetchCharacters();
  },[])
  return (
    <div className="home-container">
      <Navbar setOpenModal={setOpenModal} />
      <div className="home-container--title">
        <img src={HP} alt="Harry Potter" />
        <h2>Selecciona tu filtro</h2>
        <div>
          <Button
          active={activeBtn === "students"}
            titleBtn="ESTUDIANTES"
            type="button"
            onClick={handleStudentsRequest}
          />
          <Button active={activeBtn === "staff"} titleBtn="STAFF" type="button" onClick={handleStaffRequest} />
        </div>
      </div>
      <div className="home-container--cards">
        {characters.map(
          ({
            name,
            house,
            gender,
            alive,
            eyeColour,
            hairColour,
            dateOfBirth,
            image,
            hogwartsStudent,
          }) => (
            <Card
              photo={image}
              fullName={name}
              alive={alive}
              user={hogwartsStudent ? "Estudiante": "Staff"}
              birthday={dateOfBirth}
              gender={gender}
              eyes={eyeColour}
              hair={hairColour}
              house={house}
            />
          )
        )}
      </div>
      <SnackBarComponent
        open={openAlert}
        onClose={handleCloseAlert}
        severity="success"
        message="Agregaste un nuevo personaje exitosamente"
      />
      {openModal && (
        <Modal title="Agrega un personaje" onClose={onCloseModal} />
      )}
    </div>
  );
}

export default App;
