import React, { createContext, useState } from "react";

export const QuantityContext = createContext();

export const ContextProvider = ({ children }) => {
  const order = [
    {
      id: 1,
      quantity: 5,
      totalPrice: 25000,
      orderDate: "03/03/2024",
      useID: "KH1021",
      productId: "MI-HH_2011_N",
    },
    {
      id: 2,
      quantity: 10,
      totalPrice: 150000,
      orderDate: "03/03/2024",
      useID: "KH1021",
      productId: "MI-LY_2011_N",
    },
    {
      id: 3,
      quantity: 5,
      totalPrice: 100000,
      orderDate: "01/03/2024",
      useID: "KH1021",
      productId: "BOT-GIAC_2011_N",
    },
  ];
  const [orders, setOrders] = useState(order);
  const [quantity, setQuantity] = useState(0);
  const [dateOrder, setdateOrder] = useState("");
  const [totalPrice, settotalPrice] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [editing, setEditing] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [orderFilterData, setOrderFilterData] = useState([]);
  const handleOnSearch = () => {
    setOnSearch(!onSearch);
  };
  const handleEditting = () => {
    setEditing(!editing);
  };
  const handleDelete = (orderId) => {
    const newOrders = [...orders];
    // newOrders.filter((newOrder) => newOrder.id !== orderId);
    newOrders.pop(orderId);
    setOrders(newOrders);
  };
  const handleCreateOrder = (order) => {
    const newOrder = [...orders];
    newOrder.push(order);
    setOrders(newOrder);
  };
  const handleUpdateOrder = (orderId, updateOrder) => {
    const newOrders = [...orders];
    const index = newOrders.findIndex((order) => order.id === orderId);
    if (index !== -1) {
      newOrders[index] = { ...newOrders[index], ...updateOrder };
      setOrders(newOrders);
    }
  };
  return (
    <QuantityContext.Provider
      value={{
        quantity,
        setQuantity,
        dateOrder,
        setdateOrder,
        totalPrice,
        settotalPrice,
        selectedUser,
        setSelectedUser,
        selectedProduct,
        setSelectedProduct,
        orders,
        editing,
        onSearch,
        setOnSearch,
        setEditing,
        setOrders,
        searchText,
        orderFilterData,
        setOrderFilterData,
        setSearchText,
        handleCreateOrder,
        handleDelete,
        handleUpdateOrder,
        handleEditting,
        handleOnSearch,
      }}
    >
      {children}
    </QuantityContext.Provider>
  );
};

export default ContextProvider;
