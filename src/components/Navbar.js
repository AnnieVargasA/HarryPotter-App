import { useDispatch } from "react-redux";
import AddUser from "../img/AddUser.svg";
import BookMark from "../img/Bookmark.svg";
import { removeFavorite } from "../redux/reducers/favorites/favoritesSlice";
const Navbar = ({ setOpenModal, favorites }) => {
  const hadleOpenModal = () => {
    setOpenModal(true);
  };
  const dispatch = useDispatch();

  const test = (name) => {
    dispatch(removeFavorite({ name }));
  };
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-container--menu">
          <p>Favoritos</p>
          <img src={BookMark} alt="Favoritos" />
        </div>
        <div className="navbar-container--menu" onClick={hadleOpenModal}>
          <p>Agregar</p>
          <img src={AddUser} alt="Agregar" />
        </div>
        {favorites.map(({ name, imgProfile }) => {
          return (
            <p onClick={() => test(name)} key={name}>
              {name}            </p>
          );
        })}
      </div>
    </>
  );
};
export default Navbar;
