import React, { useEffect, useState } from "react";

const InputState = ({setState}) => {
    const [states, setStates] = useState([]);
    useEffect(() => {
        fetch("/data/states.json")
       .then((data) => data.json())
       .then((data) =>  setStates(data))
     }, []);

    return(
        <select name="" id=""  onChange={(e) => setState(e.target.value)}>
             {states.map((state)=> {
              return (
                <option key={`${state.name}-${state.abbreviation}`} value={state.name} >{state.name}</option>
              ) 
             })}   
              </select>
    )
}

export default InputState;