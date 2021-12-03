export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const incrementByAmount = multiply => {
  return {
    type: "INCREMENTBYAMOUNT",
    payload: multiply,
  };
};
