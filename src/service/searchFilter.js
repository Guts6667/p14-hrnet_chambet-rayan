const searchFilter = (datas, input) => {
  let filteredDatas = [];
  datas.forEach((data) => {
    // Is it possible to do something like that?
    // if (Object.values(data).includes(input.toLowerCase())) {
    //   filteredDatas.push(data);
    // }
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
