import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import Item from "./component/Item";
import { QuantityContext } from "../context/ContextProvider";
// import { orders } from "../db/order";

function ReadScreen({ navigation }) {
  const { orders } = useContext(QuantityContext);
  const { quantity, setQuantity } = useContext(QuantityContext);
  const { dateOrder, setdateOrder } = useContext(QuantityContext);
  const { totalPrice, settotalPrice } = useContext(QuantityContext);
  const { handleDelete, handleOnSearch } = useContext(QuantityContext);
  const { onSearch, setOnSearch } = useContext(QuantityContext);
  const { searchText, setSearchText } = useContext(QuantityContext);
  const { orderFilterData, setOrderFilterData } = useContext(QuantityContext);
  //Phần này làm phaanf tìm kiếm
  let orderItem =
    searchText !== ""
      ? orders
          .filter(
            (orderFilter) =>
              orderFilter.productId
                .toLowerCase()
                .includes(searchText.toLowerCase()) === -1
          )
          .map((item) => {
            return <Item navigation={navigation} key={item.id} data={item} />;
          })
      : orders.map((item) => {
          return <Item navigation={navigation} key={item.id} data={item} />;
        });

  // let orderItem = orderFilterData.map((item) => {
  //   return <Item navigation={navigation} key={item.id} data={item} />;
  // });

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Danh Sách Hóa Đơn</Text>
        <ScrollView style={styles.list}>{orderItem}</ScrollView>
      </View>
      <View style={styles.button}>
        <Button
          title="Add"
          onPress={() => {
            navigation.navigate("Add", {});
          }}
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "600",
          }}
        />
        <TextInput
          style={{
            width: "60%",
            height: 40,
            margin: 10,
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
          }}
          placeholder="Enter a keyword to find?"
          onChangeText={setSearchText}
        />
        <Button
          title="Search"
          onPress={() => {
            // handleOnSearch();
            navigation.navigate("Read", {});
          }}
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "600",
          }}
        />
      </View>
    </View>
  );
}

export default ReadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    padding: 10,

    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
  },
  main: {
    flex: 10,
    height: "80%",
    width: "100%",
    backgroundColor: "#e9e9e9",
    padding: 10,
  },
  title: {
    // flex: 1,
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 10,
    height: "80%",
    width: "100%",
  },
  item: {
    width: "100%",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#fff",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
    padding: 3,

    borderWidth: 1,
  },
  button: {
    flex: 1,
    width: "100%",
    height: 80,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
