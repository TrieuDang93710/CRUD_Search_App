const initState = {
  orders: [],
  fielterOrders: [],
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
        fielterOrders: [...state.orders, action.payload],
      };
    case "SET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "UPDATE_ORDER":
      return {
        ...state,
        orders: state.orders.map((order) => {
          if (order.id == action.payload.id) {
            return action.payload;
          }
          return order;
        }),
        fielterOrders: state.fielterOrders.map((fielterOrder) => {
          if (fielterOrder.id == action.payload.id) {
            return action.payload;
          }
          return fielterOrder;
        }),
      };
    case "DELETE_ORDER":
      return {
        ...state,
        orders: state.orders.filter((order) => {
          order.id !== action.payload;
        }),
        fielterOrders: state.fielterOrders.filter((fielterOrder) => {
          fielterOrder.id !== action.payload;
        }),
      };
    case "FILTER_ORDERS":
      return {
        ...state,
        fielterOrders: state.orders.filter((order) => {
          order.name.useID.toLowerCase().includes(action.payload.toLowerCase());
        }),
      };
    default:
      state;
  }
};

export default orderReducer;
