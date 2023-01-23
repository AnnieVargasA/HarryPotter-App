import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./components/Button";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SnackBarComponent from "./components/Snackbar";
import HP from "./img/HP-title.svg";
import Photo from "./img/profilePic.svg";
import { addFavorite } from "./redux/reducers/favorites/favoritesSlice";


function App() {
  const [openAlert, setOpenAlert] = useState(false);

  const favorites = useSelector((state)=>state.favorites.characters)
  const dispatch = useDispatch();
  console.log(favorites);

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };
  const addCharacter = ({name, imgProfile, id})=>{
    dispatch(addFavorite({name, imgProfile, id}))
  }
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-container--title">
        <img src={HP} alt="Harry Potter" />
        <h2>Selecciona tu filtro</h2>
        <div>
          <Button
            titleBtn="ESTUDIANTES"
            type="button"
            onClick={handleOpenAlert}
          />
          <Button titleBtn="STAFF" type="button" onClick={()=>addCharacter({id: 89, name: "holis", imgProfile: "imgPRof"})} />
        </div>
      </div>
      <div className="home-container--cards">
        <Card
          photo={Photo}
          fullName="Harry Potter"
          alive="Vivo"
          user="Estudiante"
          birthday="31-07-1980"
          gender="male"
          eyes="green"
          hair="black"
          house="gryffindor"
        />
        <Card
          photo={Photo}
          fullName="Harry Potter"
          alive="Vivo"
          user="Estudiante"
          birthday="31-07-1980"
          gender="male"
          eyes="green"
          hair="black"
          house="slytherin"
        />
        <Card
          photo={Photo}
          fullName="Harry Potter"
          alive="Vivo"
          user="Estudiante"
          birthday="31-07-1980"
          gender="male"
          eyes="green"
          hair="black"
          house="hufflepuff"
        />
        <Card
          photo={Photo}
          fullName="Harry Potter"
          alive="Vivo"
          user="Estudiante"
          birthday="31-07-1980"
          gender="male"
          eyes="green"
          hair="black"
          house="ravenclaw"
        />
        <Card
          photo={Photo}
          fullName="Harry Potter"
          alive="Vivo"
          user="Estudiante"
          birthday="31-07-1980"
          gender="male"
          eyes="green"
          hair="black"
          house="ravenclaw"

        />
        <Card
          photo={Photo}
          fullName="Harry Potter"
          alive="Vivo"
          user="Estudiante"
          birthday="31-07-1980"
          gender="male"
          eyes="green"
          hair="black"
          house="ravenclaw"

        />
      </div>
      <SnackBarComponent
        open={openAlert}
        onClose={handleCloseAlert}
        severity="success"
        message="Agregaste un nuevo personaje exitosamente"
      />
    </div>
  );
}

export default App;
