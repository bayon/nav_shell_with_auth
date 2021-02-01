//we want to fetch the token when the page loads
import AsyncStorage from "@react-native-async-storage/async-storage";
//const jwtDecode = require("jwt-decode");
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import FormStyles from "./FormStyles";
import Card from "./ui_components/Card";

const styles = FormStyles;

const SkillsScreen = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const loadProfile = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
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
      <View style={styles.warning_wrapper}>
        <Text style={styles.warning_text}>
          Sorry, you need to register for an account to see this page.
        </Text>
        <Button
          onPress={() => props.navigation.navigate("Register")}
          title="Register"
          style={styles.redirect_button}
        />
      </View>
    );
  }

  return (

    <Card 
    image="http://www.forteworks.com/forteworks-16.9.19/games/images/spaceshooter.jpg"
    title="Games"
    description="A set of games created using some library, I'll have to look it up, customized to fit branding of customer.Also modified for gesture recognition."
    linkName="Estimation App"
    linkURL="http://www.forteworks.com/roughest/"
    
    ></Card>


    // <View style={styles.container}>
    //   <Text style={styles.text}>
    //     Skills Screen: Welcome {fullName ? fullName : ""}
    //   </Text>
    //   <Text>Skills</Text>
    //   <Text
    //     style={{ color: "blue" }}
    //     onPress={() => {
    //       const url =
    //         "http://www.forteworks.com/forteworks-16.9.19/games/index-games.php";
    //       if (Platform.OS == "web") {
    //         window.open(url, "_blank");
    //       } else {
    //         Linking.openURL(url, "_blank");
    //       }
    //     }}
    //   >
    //     Games
    //   </Text>

    //   <Text
    //     style={{ color: "blue" }}
    //     onPress={() => {
    //       const url = "http://www.forteworks.com/roughest/";
    //       if (Platform.OS == "web") {
    //         window.open(url, "_blank");
    //       } else {
    //         Linking.openURL(url, "_blank");
    //       }
    //     }}
    //   >
    //     Estimation App
    //   </Text>

    //   <Text
    //     style={{ color: "blue" }}
    //     onPress={() => {
    //       const url =
    //         "https://drive.google.com/file/d/0B6WIP-y6MAiEYm11b1hQN1Z0Sms/view";
    //       if (Platform.OS == "web") {
    //         window.open(url, "_blank");
    //       } else {
    //         Linking.openURL(url, "_blank");
    //       }
    //     }}
    //   >
    //     Screencast for Estimation App
    //   </Text>
    //   <View>
    //     <Text style={styles.text}>Your email is {email ? email : ""}</Text>
    //   </View>
     
    // </View>

    //http://www.forteworks.com/forteworks-16.9.19/games/images/spaceshooter.jpg
  );
};

export default SkillsScreen;

/*
Games:
http://www.forteworks.com/forteworks-16.9.19/games/index-games.php

Rough Est: 
https://drive.google.com/file/d/0B6WIP-y6MAiEYm11b1hQN1Z0Sms/view
http://www.forteworks.com/roughest/

*/
