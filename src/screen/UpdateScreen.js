import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import products from "../db/product";
import users from "../db/user";
import { QuantityContext } from "../context/ContextProvider";

const UpdateScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const { quantity, setQuantity } = useContext(QuantityContext);
  const { dateOrder, setdateOrder } = useContext(QuantityContext);
  const { totalPrice, settotalPrice } = useContext(QuantityContext);
  const { handleUpdateOrder } = useContext(QuantityContext);

  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    let newProductData = products.map((item) => {
      return { key: item.id, value: item.value.productName };
    });
    setProduct(newProductData);
  }, []);
  useEffect(() => {
    let newUserData = users.map((item) => {
      return { key: item.id, value: item.fullName };
    });
    setUser(newUserData);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          flex: 2,
          backgroundColor: "#e9e9e9",
          padding: 10,
        }}
      >
        <View style={styles.main}>
          <Text style={styles.title}>Cập Nhật Hóa Đơn</Text>
          <View style={styles.list}>
            <View style={styles.label_input}>
              <Text style={styles.text}>ID</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder={route.params?.data?.id?.toString()}
                autoComplete="cc-number"
                value={route.params?.data?.id?.toString()}
              />
            </View>
            <View style={styles.label_input}>
              <Text style={styles.text}>Quantity</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder={route.params?.data?.quantity?.toString()}
                autoComplete="cc-number"
                onChangeText={setQuantity}
              />
            </View>
            <View style={styles.label_input}>
              <Text style={styles.text}>Date Of Order</Text>
              <TextInput
                style={styles.input}
                placeholder={route.params?.data?.orderDate?.toString()}
                onChangeText={setdateOrder}
              />
            </View>
            <View style={styles.label_input}>
              <Text style={styles.text}>Total Price</Text>
              <TextInput
                style={styles.input}
                placeholder={route.params?.data?.totalPrice?.toString()}
                onChangeText={settotalPrice}
              />
            </View>
            <View style={styles.label_input}>
              <Text style={styles.text}>ProductID</Text>
              <SelectList
                data={product}
                style={styles.input}
                setSelected={(val) => setSelectedProduct(val)}
                search={false}
                boxStyles={styles.selectListBoxStyle}
                dropdownStyles={styles.selectListDropStyle}
              />
            </View>
            <View style={styles.label_input}>
              <Text style={styles.text}>UserID</Text>
              <SelectList
                data={user}
                style={styles.input}
                setSelected={(val) => setSelectedUser(val)}
                search={false}
                boxStyles={styles.selectListBoxStyle}
                dropdownStyles={styles.selectListDropStyle}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button
          title="Save"
          onPress={() => {
            let updateOrder = {
              quantity: quantity,
              totalPrice: totalPrice,
              orderDate: dateOrder,
              useID: selectedUser,
              productId: selectedProduct,
            };
            handleUpdateOrder(route.params?.data?.id, updateOrder);
            navigation.navigate("Read", () => {
              console.log("Read");
            });
          }}
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "600",
          }}
        />
        <Button
          title="Cencel"
          onPress={() => {
            navigation.navigate("Read", () => {
              console.log("Read");
            });
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
};

export default UpdateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#f6f6f6",
    backgroundColor: "#e9e9e9",
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
    // padding: 10,
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
    width: "95%",
    alignItems: "center",
  },
  label_input: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  input: {
    width: "100%",
    height: 40,
    margin: 10,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    color: "#000",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  selectListBoxStyle: {
    width: "100%",
    margin: 10,
    // marginBottom: 0,
  },
  selectListDropStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  button: {
    // flex: 1,
    width: 140,
    height: 80,
    borderRadius: 20,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // padding: 10,
    marginLeft: 20,
  },
});
