import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  Processor: null,
  Motherboard: null,
  Ram: null,
  PowerSupplyUnit: null,
  StorageDevice: null,
  Monitor: null,
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
export const selectRAM = (state) => state.Ram;
export const selectPSU = (state) => state.PowerSupplyUnit;
export const selectMonitor = (state) => state.Monitor;
export const selectStorage = (state) => state.StorageDevice;
export const selectProcessor = (state) => state.Processor;
export const selectMotherboard = (state) => state.Motherboard;
