import React from "react";

const InputBirthDate = ({setBirthDate}) => {
    const maxStartDate = new Date().toISOString().slice(0, 10);
    const minDate = new Date(
      new Date(maxStartDate).setFullYear(new Date(maxStartDate).getFullYear() - 70)
    );
    const maxDate = new Date(
      new Date(maxStartDate).setFullYear(new Date(maxStartDate).getFullYear() - 18)
    );
    const maxBirthDate = maxDate.toISOString().slice(0, 10);
    const minBirthDate = minDate.toISOString().slice(0, 10);

      return(
        <input type="date" max={maxBirthDate} min={minBirthDate} onChange={(e) => setBirthDate(e.target.value)} required />
      )
}

export default InputBirthDate