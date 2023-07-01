import React from "react";

const Filter = (props) => {
    const changeFilter = (e) => {
        const filter = e.target.id;
        document.querySelector(".filter.active").className = "filter"
        e.target.className = 'filter active'
        props.onChangeFilter(filter)
    }
  return (
    <>
      <span id="all" className="filter active" onClick={changeFilter}>
        All
      </span>
      <span id="watchlist" className="filter" onClick={changeFilter}>
        Watch List
      </span>
      <span id="watched" className="filter" onClick={changeFilter}>
        Watched
      </span>
    </>
  );
};

export default Filter;
