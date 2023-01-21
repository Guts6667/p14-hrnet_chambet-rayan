
import React, { useEffect, useState } from "react";
import sortBy from "../../service/sortBy";

/**
 * 
 * @param {Array} Array of Object datas 
 * @returns {JSX} React Component
 */

const TableEmployee = ({ datas }) => {
  /**
   * allDatas is used to set the table to its original state
   * tableDatas is used to display the altered/filtered datas
   */
  const [allDatas, setAllDatas] = useState([])
  const [tableDatas, setTableDatas] = useState([]);
 
  /** Add all datas to both states*/

  useEffect(() => {
    if (datas) {
      setAllDatas(datas)
      setTableDatas(datas);
    }
  }, [datas, allDatas]);

  /** Function called to sort and display the sorted the datas */

  const handleSort = (target, type) => {
    const filters = document.querySelectorAll("th")
    if(target.classList.contains("gold")){
      filters.forEach((filter) => filter.classList.remove("gold"))
      setTableDatas(allDatas)
      target.classList.remove("gold")
    } else if(!target.classList.contains("gold"))
    {filters.forEach((filter) => filter.classList.remove("gold"))
      setTableDatas(sortBy(tableDatas, type));
      target.classList.add("gold")
    }

  };

  return (
    tableDatas && (
      <table className="container__table">
        <thead>
          <tr>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={(e) => handleSort(e.currentTarget, "firstName")}
            >
              <span>First Name</span>
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={(e) => handleSort(e.currentTarget,"lastName")}
            >
              <span>Last Name</span>
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={(e) => handleSort(e.currentTarget,"birthDate")}
            >
              <span>Date Of Birth</span>
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={(e) => handleSort(e.currentTarget,"startDate")}
            >
              <span>Start Date</span>
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={(e) => handleSort(e.currentTarget,"street")}
            >
              <span>Street</span>
  
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={(e) => handleSort(e.currentTarget, "city")}
            >
              <span>City</span>
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={(e) => handleSort(e.currentTarget, "state")}
            >
              <span>State</span>
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={(e) => handleSort(e.currentTarget,"zipCode")}
            >
              <span>Zip Code</span>
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={(e) => handleSort(e.currentTarget,"department")}
            >
              <span>Department</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableDatas &&
            tableDatas.map((data) => {
              return (
                <tr key={`${data.birthDate}-${data.id}`}>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.birthDate}</td>
                  <td>{data.startDate}</td>
                  <td>{data.street}</td>
                  <td>{data.city}</td>
                  <td>{data.state}</td>
                  <td>{data.zipCode}</td>
                  <td>{data.department}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    )
  );
};

export default TableEmployee;
