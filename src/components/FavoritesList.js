import { useDispatch } from "react-redux";
import BookMark from "../img/Bookmark.svg";
import Trash from "../img/Trash.svg";
import { removeFavorite } from "../redux/reducers/favorites/favoritesSlice";
const FavoritesList = ({ favorites }) => {
  const dispatch = useDispatch();

  const deleteFav = (name) => {
    dispatch(removeFavorite({ name }));
  };
  return (
    <ul className="favoritesList">
      <li className="favoritesList-item">
        <div className="favoritesList-item--button">
          <p>Favoritos</p>
          <img src={BookMark} alt="Favoritos" />
        </div>
        <ul className="favoritesList-item--listContainer">
          {favorites.map(({ name, imgProfile }) => {
            return (
              <li key={name}>
                <img src={imgProfile} alt={name} />
                <p>{name}</p>
                <img
                  src={Trash}
                  alt={`delete-${name}`}
                  onClick={() => deleteFav(name)}
                  key={name}
                />
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
};
export default FavoritesList;
