import AddUser from "../img/AddUser.svg";
import BookMark from "../img/Bookmark.svg";
const Navbar = ({setOpenModal}) => {
  const hadleOpenModal = ()=>{
    setOpenModal(true)
  }
  return (
    <div className="navbar-container">
      <div className="navbar-container--menu">
        <p>Favoritos</p>
        <img src={BookMark} alt="Favoritos" />
      </div>
      <div className="navbar-container--menu" onClick={hadleOpenModal}>
        <p>Agregar</p>
        <img src={AddUser} alt="Agregar" />
      </div>
    </div>
  );
};
export default Navbar;
