import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { QuantityContext } from "../../context/ContextProvider";

const Item = ({ navigation, data }) => {
  const { handleDelete, handleEditting } = useContext(QuantityContext);
  const { editing, setEditing } = useContext(QuantityContext);
  return (
    <View style={styles.item} onPress={() => {}}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>{data?.id}</Text>
      </View>
      <View
        style={{
          flex: 4,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>
          {data?.productId}
        </Text>
        <Text style={{ fontSize: 11, fontWeight: "bold" }}>{data?.useID}</Text>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          {data?.orderDate}
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "green" }}>
          {data?.totalPrice}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>
          {data?.quantity}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          style={{
            elevation: 2,
            borderRadius: 4,
            marginBottom: 3,
            height: 20,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            handleDelete(data?.id);
            // navigation.navigate("Read", () => {
            //   console.log("Read");
            // });
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: "bold",
              color: "#000",
              textAlign: "center",
            }}
          >
            Del
          </Text>
        </Pressable>
        <Pressable
          style={{
            elevation: 2,
            borderRadius: 4,
            height: 20,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            handleEditting();
            // setEditing(!editing);
            navigation.navigate("Update", {
              data: data,
            });
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: "bold",
              color: "#000",
              textAlign: "center",
            }}
          >
            Edit
          </Text>
        </Pressable>
        {/* <Button title="Edit"></Button> */}
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
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
});
