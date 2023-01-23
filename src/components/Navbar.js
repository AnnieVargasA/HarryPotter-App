import AddUser from "../img/AddUser.svg";
import FavoritesList from "./FavoritesList";

const Navbar = ({ setOpenModal, favorites }) => {
  const hadleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <>
      <div className="navbar-container">
        <FavoritesList favorites={favorites} />
        <div className="navbar-container--menu" onClick={hadleOpenModal}>
          <p>Agregar</p>
          <img src={AddUser} alt="Agregar" />
        </div>
      </div>
    </>
  );
};
export default Navbar;
