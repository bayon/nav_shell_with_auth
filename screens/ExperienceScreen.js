//we want to fetch the token when the page loads
import AsyncStorage from "@react-native-async-storage/async-storage";
//const jwtDecode = require("jwt-decode");
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import FormStyles from "./FormStyles";


const styles = FormStyles;

const ExperienceScreen = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const loadProfile = async () => {
    const token = await AsyncStorage.getItem("token");
     if(token){
      const decoded = jwt_decode(token);
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
      <View style ={styles.warning_wrapper}>
        <Text style={styles.warning_text}>Sorry, you need to register for an account to see this page.</Text>
        <Button
        onPress={() => props.navigation.navigate("Register")}
        title="Register"
        style={styles.redirect_button}
      />
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

export default ExperienceScreen;
 