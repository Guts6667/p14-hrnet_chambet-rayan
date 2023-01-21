import React, { useEffect, useState } from "react";
/**
 * 
 * @param {Function} setState() 
 * @returns {JSX} React Component
 */
const InputState = ({setState}) => {
    const [states, setStates] = useState([]);
    /**Fetches a list of state to display in the select input */
    useEffect(() => {
        fetch("/data/states.json")
       .then((data) => data.json())
       .then((data) =>  setStates(data))
     }, []);

    return(
        <select onChange={(e) => setState(e.target.value)}>
             {states.map((state)=> {
              return (
                <option key={`${state.name}-${state.abbreviation}`} value={state.name} >{state.name}</option>
              ) 
             })}   
              </select>
    )
}

export default InputState;