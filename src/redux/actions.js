export const addOrder = (order) => {
  return {
    type: "ADD_ORDER",
    payload: order,
  };
};

export const setOrder = (orders) => {
  return {
    type: "SET_ORDERS",
    payload: orders,
  };
};

export const updateOrder = (order) => {
  return {
    type: "UPDATE_ORDER",
    payload: order,
  };
};

export const deleteOrder = (order) => {
  return {
    type: "DELETE_ORDER",
    payload: order,
  };
};

export const fielterOrders = (fielterText) => {
  return {
    type: "FIELTER_ORDERS",
    payload: fielterText,
  };
};
