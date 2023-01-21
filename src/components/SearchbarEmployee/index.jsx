import React from "react";
/**
 * 
 * @param {Function} SetSearchInput() 
 * @returns {JSX} React Component
 * SetSearchInput() allows to retrieves the input in the searchbar
 * with an onChange listener
 */
const SearchbarEmployee = ({setSearchInput}) => {

    return(
            <div className="container__employee-search">
                <label htmlFor="">Search: </label>
                <input type="search" onChange={(e) => setSearchInput(e.target.value)}/>
            </div>

    )
}
export default SearchbarEmployee;