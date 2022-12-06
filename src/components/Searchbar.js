import React, { useState } from "react";

const Searchbar = () => {

	const [search, setSearch] = useState('')

	const onChange = (e) => {
		setSearch(e.target.value)
	}

	const onClick = (e) => {
		console.log(search)
	}

	return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar producto..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
