export const addComponent = (category, component) => {
  return {
    type: "ADD_COMPONENT",
    category,
    component,
  };
};
