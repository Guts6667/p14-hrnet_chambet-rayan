import React, { useEffect, useState } from "react";
import sortBy from "../../service/sortBy";
const TableEmployee = ({ datas }) => {
  const [tableDatas, setTableDatas] = useState([]);
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [birthDate, setBirthDate] = useState(false);
  const [startDate, setStartDate] = useState(false);
  const [street, setStreet] = useState(false);
  const [city, setCity] = useState(false);
  const [state, setState] = useState(false);
  const [zipCode, setZipCode] = useState(false);
  const [department, setDepartment] = useState(false);


/**
 * Gérer le problème des chevrons
 */
  useEffect(() => {
    if (datas) {
      setTableDatas(datas);
    }

    // city ? setTableDatas(sortBy(tableDatas, "city")) : setTableDatas(datas);
    // firstName ? setTableDatas(sortBy(tableDatas, "firstName")) : setTableDatas(datas);
    // lastName ? setTableDatas(sortBy(tableDatas, "lastName")) : setTableDatas(datas);
    // birthDate ? setTableDatas(sortBy(tableDatas, "birthDate")) : setTableDatas(datas);
    // startDate ? setTableDatas(sortBy(tableDatas, "startDate")) : setTableDatas(datas);
    // street ? setTableDatas(sortBy(tableDatas, "street")) : setTableDatas(datas);
    // city ? setTableDatas(sortBy(tableDatas, "city")) : setTableDatas(datas);
    // state ? setTableDatas(sortBy(tableDatas, "state")) : setTableDatas(datas);
    // zipcode ? setTableDatas(sortBy(tableDatas, "zipCode")) : setTableDatas(datas);
    // department ? setTableDatas(sortBy(tableDatas, "department")) : setTableDatas(datas);
  }, [datas]);
  const handleSort = (type) => {
    setTableDatas(sortBy(tableDatas, type));
  };

  return (
    tableDatas && (
      <table className="container__table">
        <thead>
          <tr>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={() => handleSort("firstName")}
            >
              <span>First Name</span>
              <img
                className="chevron"
                src={`/assets/chevron-${firstName ? "up" : "down"}-solid.svg`}
                alt="chevron up"
              />
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={() => handleSort("lastName")}
            >
              <span>Last Name</span>
              <img
                className="chevron"
                src={`/assets/chevron-${lastName ? "up" : "down"}-solid.svg`}
                alt="chevron up"
              />
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={() => handleSort("birthDate")}
            >
              <span>Date Of Birth</span>
              <img
                className="chevron"
                src={`/assets/chevron-${birthDate ? "up" : "down"}-solid.svg`}
                alt="chevron up"
              />
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={() => handleSort("startDate")}
            >
              <span>Start Date</span>
              <img
                className="chevron"
                src={`/assets/chevron-${startDate ? "up" : "down"}-solid.svg`}
                alt="chevron up"
              />
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={() => handleSort("street")}
            >
              <span>Street</span>
              <img
                className="chevron"
                src={`/assets/chevron-${street ? "up" : "down"}-solid.svg`}
                alt="chevron up"
              />
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={() => handleSort("city")}
            >
              <span>City</span>
              <img
                className="chevron"
                src={`/assets/chevron-${city ? "up" : "down"}-solid.svg`}
                alt="chevron up"
              />
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={() => handleSort("state")}
            >
              <span>State</span>
              <img
                className="chevron"
                src={`/assets/chevron-${state ? "up" : "down"}-solid.svg`}
                alt="chevron up"
              />
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={() => handleSort("zipCode")}
            >
              <span>Zip Code</span>
              <img
                className="chevron"
                src={`/assets/chevron-${zipCode ? "up" : "down"}-solid.svg`}
                alt="chevron up"
              />
            </th>
            <th
              colSpan={1}
              className="container__table-head"
              onClick={() => handleSort("department")}
            >
              <span>Department</span>
              <img
                className="chevron"
                src={`/assets/chevron-${department ? "up" : "down"}-solid.svg`}
                alt="chevron up"
              />
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
