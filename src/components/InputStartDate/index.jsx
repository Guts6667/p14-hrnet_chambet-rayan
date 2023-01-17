import React from "react";

const InputStartDate = ({setStartDate}) => {
    const maxStartDate = new Date().toISOString().slice(0, 10);
      return(
        <input type="date" max={maxStartDate} onChange={(e) => setStartDate(e.target.value)} required />
      )  
}

export default InputStartDate