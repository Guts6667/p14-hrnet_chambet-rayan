// Create filter functions
const sortByFirstName = (datas) => {
  // The function is good, just need to call it at the right place in the component
  datas.sort((a, b) => a.firstName.localeCompare(b.firstName));
};

export default sortByFirstName;
