import React from "react";

function SearchBar({isAbcActive, isPriceActive, handleFilter, handleSortByABC, handleSortByPrice}) {

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value= {isAbcActive}
          name="sort"
          checked= {null}
          onChange={handleSortByABC}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value= {isPriceActive}
          name="sort"
          checked= {null}
          onChange={handleSortByPrice}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => handleFilter(e)}>
          <option value = 'Tech' >Tech</option>
          <option value = 'Sportswear' >Sportswear</option>
          <option value = 'Finance' >Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
