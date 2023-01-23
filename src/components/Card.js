import BookMarkWhite from "../img/white-card-bookmark.svg";
import BookMarkFav from "../img/Bookmark-fav.svg";

const Card = ({
  photo,
  fullName,
  alive,
  user,
  birthday,
  gender,
  eyes,
  hair,
  house,
  addFavorite,
  bookMarked
}) => {
  return (
    <div className="card-container">
      <div
        className={`card-container--photoContainer--${house ? house : "empty"}`}
      >
        <img src={photo} alt={fullName} />
      </div>
      <div
        className={`card-container--dataContainer ${!alive ? "death" : ""} `}
      >
        <div className="headCard-container">
          <p>
            {alive ? "Vivo" : "Finado"} / {user}
          </p>
          <img src={bookMarked ? BookMarkFav : BookMarkWhite } alt="Add to Favorite" onClick={()=>addFavorite({name:fullName, imgProfile:photo})} />
        </div>
        <p className="name">{fullName}</p>
        <div className="data-container">
          <p>
            <span>Cumpleaños: </span>
            <span>{birthday}</span>
          </p>
          <p>
            <span>Género: </span>
            <span></span>
            {gender}
          </p>
          <p>
            <span>Color de ojos: </span>
            <span>{eyes}</span>
          </p>
          <p>
            <span>Color de Pelo: </span>
            <span>{hair}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
