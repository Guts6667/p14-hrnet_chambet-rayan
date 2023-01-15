import { createSlice, current } from "@reduxjs/toolkit";

const initialEmployeeState = [];

const employeeSlice = createSlice({
  name: "employee",
  initialState: initialEmployeeState,
  reducers: {
    addEmployee(state, action) {
      state = state.push({
        id: state.length + 1,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthDate: action.payload.birthDate,
        startDate: action.payload.startDate,
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
        department: action.payload.department,
      });
    },
    getEmployee(state) {
      console.log(current(state));
    },
  },
});

export const employeeActions = employeeSlice.actions;

export default employeeSlice.reducer;
