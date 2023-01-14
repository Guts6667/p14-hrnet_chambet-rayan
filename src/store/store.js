import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee";

// Store
const store = configureStore({
  reducer: { employee: employeeReducer },
});

export default store;
