/**
 *
 * @param {Array} datas
 * @param {String} input
 * @returns {Array} filteredDatas
 * This function is called whenever the use interact with the searchbar
 */
const searchFilter = (datas, input) => {
  let filteredDatas = [];
  datas.forEach((data) => {
    if (
      data.firstName.toLowerCase().includes(input.toLowerCase()) ||
      data.lastName.toLowerCase().includes(input.toLowerCase()) ||
      data.city.toLowerCase().includes(input.toLowerCase()) ||
      data.state.toLowerCase().includes(input.toLowerCase()) ||
      data.department.toLowerCase().includes(input.toLowerCase()) ||
      data.startDate.toLowerCase().includes(input.toLowerCase()) ||
      data.birthDate.toLowerCase().includes(input.toLowerCase()) ||
      data.zipCode.toLowerCase().includes(input.toLowerCase())
    ) {
      filteredDatas.push(data);
    }
  });

  return filteredDatas;
};

export default searchFilter;
