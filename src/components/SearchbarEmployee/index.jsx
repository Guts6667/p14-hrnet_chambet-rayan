import React from "react";

const SearchbarEmployee = ({setSearchInput}) => {

    return(
            <div className="container__employee-search">
                <label htmlFor="">Search: </label>
                <input type="search" onChange={(e) => setSearchInput(e.target.value)}/>
            </div>

    )
}
export default SearchbarEmployee;