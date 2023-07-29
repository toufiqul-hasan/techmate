import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  processor: null,
  motherboard: null,
  ram: null,
  psu: null,
  storage: null,
  monitor: null,
};

const builderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPONENT":
      return {
        ...state,
        [action.category]: action.component,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: builderReducer,
});

export default store;
export const selectRAM = (state) => state.ram;
export const selectPSU = (state) => state.psu;
export const selectMonitor = (state) => state.monitor;
export const selectStorage = (state) => state.storage;
export const selectProcessor = (state) => state.processor;
export const selectMotherboard = (state) => state.motherboard;
