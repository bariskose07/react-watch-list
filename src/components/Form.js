import React, { useState } from "react";

const Form = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState("");

  const inputChangeHandler = (e) => {
    setNewMovie(e.target.value);
  };

  const addMovie = () => {
    if (newMovie.trim().length === 0) {
      document.querySelector("#addInput").placeholder =
        "Please enter a valid movie...";
    } else {
      document.querySelector("#addInput").value = ""
      onAddMovie(newMovie);
    }
  };

  return (
    <div className="input-group">
      <input type="text" id="addInput" onChange={inputChangeHandler} />
      <span id="btnAdd" className="btn btn-add" onClick={addMovie}>
        Add to Watchlist
      </span>
    </div>
  );
};

export default Form;
