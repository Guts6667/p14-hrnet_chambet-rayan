/**
 *
 * @param {Array} datas
 * @param {String} type
 * @returns {Array} sortedDatas
 */
const sortBy = (datas, type) => {
  let sortedDatas = [...datas];
  switch (type) {
    case "firstName":
      sortedDatas.sort((a, b) => a.firstName.localeCompare(b.firstName));
      break;
    case "lastName":
      sortedDatas.sort((a, b) => a.lastName.localeCompare(b.lastName));
      break;
    case "birthDate":
      sortedDatas.sort((a, b) => a.birthDate.localeCompare(b.birthDate));
      break;
    case "startDate":
      sortedDatas.sort((a, b) => a.startDate.localeCompare(b.startDate));
      break;
    case "street":
      sortedDatas.sort((a, b) => a.street.localeCompare(b.street));
      break;
    case "city":
      sortedDatas.sort((a, b) => a.city.localeCompare(b.city));
      break;
    case "state":
      sortedDatas.sort((a, b) => a.state.localeCompare(b.state));
      break;
    case "zipCode":
      sortedDatas.sort((a, b) => a.zipCode.localeCompare(b.zipCode));
      break;
    case "department":
      sortedDatas.sort((a, b) => a.department.localeCompare(b.department));
      break;
    default:
      sortedDatas = datas;
      break;
  }
  return sortedDatas;
};

export default sortBy;
