import React from "react";

const Movie = (props) => {
    const deleteMovie = () => {
        props.onMovieDelete(props.movie.id)
    }

    const changeCondition = (e) => {
        const newCondition = e.target.className === "1" ? "watched" : "watchlist";

        if(newCondition !== props.movie.condition) {
            props.onChangeCondition(newCondition, props.movie.id);
        }
    }
  return (
    <li className="movie">
      <span>{`${props.movie.id} - ${props.movie.name}`}</span>
      <div>
        <div className={`condition dropdown ${props.movie.condition}`}>
          {props.movie.condition.toUpperCase()} <i className="fa-solid fa-ellipsis"></i>
          <div className="dropdown-content">
            <div className="1" onClick={changeCondition}>
              Watched
            </div>
            <div className="2" onClick={changeCondition}>
              Watch List
            </div>
          </div>
        </div>
        <i className="fa-solid fa-xmark" style={{top: "5px"}} onClick={deleteMovie}></i>
      </div>
    </li>
  );
};

export default Movie;
