//we want to fetch the token when the page loads
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import FormStyles from "./FormStyles";

const jwtDecode = require("jwt-decode");
const styles = FormStyles;

const GreenScreen = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const loadProfile = async () => {
    const token = await AsyncStorage.getItem("token");
     if(token){
      const decoded = jwtDecode(token);
      //make use of decoded data. useState
      setFullName(decoded.fullName);
      setEmail(decoded.email);
     }
  };
  
  useEffect(() => {
    loadProfile();
  });

  var auth = useSelector((state) => state.auth.authorized);
  if (!auth) {
    return (
      <View>
        <Text>Access Denied ! ! !</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
    <View>
      <Text style={styles.text}>
        Home Screen: Welcome {fullName ? fullName : ""}
      </Text>
    </View>
    <View>
      <Text style={styles.text}>Your email is {email ? email : ""}</Text>
    </View>
  </View>
  );
};

export default GreenScreen;

