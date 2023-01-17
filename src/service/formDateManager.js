const maxStartDate = new Date().toISOString().slice(0, 10);
const minDate = new Date(
  new Date(maxStartDate).setFullYear(new Date(maxStartDate).getFullYear() - 70)
);
const maxDate = new Date(
  new Date(maxStartDate).setFullYear(new Date(maxStartDate).getFullYear() - 18)
);
const maxBirthDate = maxDate.toISOString().slice(0, 10);
const minBirthDate = minDate.toISOString().slice(0, 10);

// eslint-disable-next-line import/no-anonymous-default-export
export default { maxBirthDate, minBirthDate, maxStartDate };
