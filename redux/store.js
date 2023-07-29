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