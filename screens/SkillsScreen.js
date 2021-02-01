//we want to fetch the token when the page loads
import AsyncStorage from "@react-native-async-storage/async-storage";
//const jwtDecode = require("jwt-decode");
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
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
  const skillsDescription = `My primary focus is now on react-native. I've had ten years of experience with a variety of technology. Javascript, PHP, MySQL, javascript, css, Docker, GoLang, Swift, various frameworks, but now I believe it is time to really focus on one area. `
  return (
    <ScrollView>
       <Card
        image=""
        title="Skills"
        description={skillsDescription}
        linkName=""
        linkURL=""
      ></Card>
      
      <Card
        image="http://www.forteworks.com/forteworks-16.9.19/games/images/spaceshooter.jpg"
        title="Games"
        description="A set of games created with Panda.js, which I customized to fit both the customer branding specifications and to hadnle gesture recognition."
        linkName="Games"
        linkURL="http://www.forteworks.com/forteworks-16.9.19/games/index-games.php"
      ></Card>

      <Card
        image="http://www.forteworks.com/forte_2017.5.14/img/rough_est.png"
        title="Estimation App"
        description="An app created with vanilla javascript that lets you calculate tasks and materials into an estimate of work."
        linkName="Estimation App"
        linkURL="http://www.forteworks.com/roughest/"
      ></Card>

      
    </ScrollView>
 
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
