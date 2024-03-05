import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

function Button(props) {
  const { title = "Del", colorTitle = "#fff", bgColor = "red" } = props;
  return (
    <Pressable
      style={{
        backgroundColor: { bgColor },
        elevation: 3,
        borderRadius: 4,
        marginBottom: 3,
      }}
    >
      <Text style={{ fontSize: 10, fontWeight: "bold", color: { colorTitle } }}>
        {title}
      </Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({});
