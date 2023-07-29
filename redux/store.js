import { createStore } from "redux";

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

const store = createStore(builderReducer);

export default store;
