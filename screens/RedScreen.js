import React from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

function RedScreen({ navigation }) {
  const dispatch = useDispatch();
  var auth = useSelector((state) => state.auth.authorized);
  if (!auth) {
    return (
      <View>
        <Text>Access Denied.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Red!</Text>
    </View>
  );
}

export default RedScreen;
