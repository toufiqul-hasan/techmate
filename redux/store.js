import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  Ram: null,
  Monitor: null,
  Processor: null,
  Motherboard: null,
  StorageDevice: null,
  PowerSupplyUnit: null,
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
export const selectMonitor = (state) => state.Monitor;
export const selectPSU = (state) => state.PowerSupplyUnit;
export const selectProcessor = (state) => state.Processor;
export const selectStorage = (state) => state.StorageDevice;
export const selectMotherboard = (state) => state.Motherboard;