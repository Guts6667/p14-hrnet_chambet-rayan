import React from "react";

const InputEntries = () => {

    return(
            <div className="container__employee-entries">
                <span>Show</span>
                <select name="" id="">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <span>entries</span>
            </div>
    )
}

export default InputEntries;