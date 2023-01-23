import BookMark from "../img/white-card-bookmark.svg";

const Card = ({ photo, fullName, alive, user, birthday, gender, eyes, hair, house }) => {
  
  return (
    <div className="card-container">
      <div className={`card-container--photoContainer--${house}`}>
        <img src={photo} alt={fullName} />
      </div>
      <div className="card-container--dataContainer">
        <div className="headCard-container">
          <p>{alive} / {user}</p>
          <img src={BookMark} alt="Add to Favorite"/>
        </div>
        <p className="name">{fullName}</p>
        <div className="data-container">
          <p><span>Cumpleaños: </span><span>{birthday}</span></p>
          <p><span>Género: </span><span></span>{gender}</p>
          <p><span>Color de ojos: </span><span>{eyes}</span></p>
          <p><span>Color de Pelo: </span><span>{hair}</span></p>

        </div>
      </div>
    </div>
  );
};
export default Card;
