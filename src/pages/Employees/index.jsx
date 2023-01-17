import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InputEntries from "../../components/InputEntries";
import SearchbarEmployee from "../../components/SearchbarEmployee";
import TableEmployee from "../../components/TableEmployee";
import searchFilter from "../../service/searchFilter";
import "./Employees.scss"

const Employees = () => {

const [searchInput, setSearchInput] = useState("");
const [datas, setDatas] = useState([]);
const [datasLimit, setDatasLimit] = useState(10);
const [currentPage, setCurrentPage] = useState(1);
const [employeeDatas, setEmployeeDatas] = useState(useSelector((state) => state.employee));

useEffect(() => {
    let tempArray = [];
    if(datasLimit === undefined){
        setEmployeeDatas(employeeDatas);
    }else{
        for (let i = (currentPage - 1) * datasLimit; i < currentPage * datasLimit; i++) {
            if(i < employeeDatas.length){
                tempArray.push(employeeDatas[i]);
            }
        }
    }
    if(searchInput.length >= 2){
        setDatas(searchFilter(tempArray, searchInput));
    } else{
        setDatas(tempArray);
    }
}, [searchInput, datasLimit, currentPage, employeeDatas]);

return(
    <div className="container__employee">
        <header>
            <h1>Current Employees</h1>
        </header>
        <InputEntries setDatasLimit={setDatasLimit} />
        <SearchbarEmployee setSearchInput={setSearchInput} />
        <TableEmployee datas={datas} />
        <div>
            <span>{`Showing ${(currentPage - 1) * datasLimit + 1} to ${currentPage * datasLimit} of ${employeeDatas.length} entries`}</span>
        </div>
        <div>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span>{`${currentPage}`}</span>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage * datasLimit >= employeeDatas.length}>Next</button>
        </div>
        <Link to={"/"} className="btn-link">Home</Link>
    </div>
)
}

export default Employees;
