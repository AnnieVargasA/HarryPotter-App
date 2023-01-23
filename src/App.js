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
    setActiveBtn("staff");
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };
  const addFavorites = ({ name, imgProfile }) => {
    dispatch(addFavorite({ name, imgProfile, id: name }));
  };

  const addNewCharacter = async(character)=>{
    if(character.hogwartsStudent){
      await axios.post(`${process.env.REACT_APP_FAKEAPI}/students`,character);
      setOpenAlert(true);
      return
    }
    await axios.post(`${process.env.REACT_APP_FAKEAPI}/staff`, character);
    setOpenAlert(true);
  }

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(`${process.env.REACT_APP_FAKEAPI}/characters`);
      setCharacters(response.data);
    };
    fetchCharacters();
  }, []);
  return (
    <div className="home-container">
      <Navbar favorites={favorites} setOpenModal={setOpenModal} />
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
          <Button
            active={activeBtn === "staff"}
            titleBtn="STAFF"
            type="button"
            onClick={handleStaffRequest}
          />
        </div>
      </div>
      <div className="home-container--cards">
        {characters.map(
          (
            {
              name,
              house,
              gender,
              alive,
              eyeColour,
              hairColour,
              dateOfBirth,
              image,
              hogwartsStudent,
            },
            idx
          ) => {
            const user = favorites.find(
              ({ name: favName }) => favName === name
            );
            return (
              <Card
                key={`card${idx}`}
                photo={image}
                fullName={name}
                alive={alive}
                user={hogwartsStudent ? "Estudiante" : "Staff"}
                birthday={dateOfBirth}
                gender={gender}
                eyes={eyeColour}
                hair={hairColour}
                house={house}
                addFavorite={addFavorites}
                bookMarked={!!user}
              />
            );
          }
        )}
      </div>
        <SnackBarComponent
          open={openAlert}
          onClose={handleCloseAlert}
          severity="success"
          message={`Nuevo personaje agregado`}
        />

      {openModal && (
        <Modal addNewCharacter={addNewCharacter} title="Agrega un personaje" onClose={onCloseModal} />
      )}
    </div>
  );
}

export default App;
