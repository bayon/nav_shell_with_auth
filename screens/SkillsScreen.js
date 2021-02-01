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
  const skillsDescription = `My primary focus now is on react-native. My goal is to both get work primarily using it and to create my own applications. I've had ten years of experience with a variety of technology, including Javascript, PHP, MySQL, javascript, css, Docker, GoLang, Swift, various frameworks, but now I believe it is time to really focus on one area. I feel like react native gives me the best of both mobile and web development and it has great potential. `
  return (
    <ScrollView>
       <Card
        image=""
        resizeMode="contain"
        title="Skills"
        description={skillsDescription}
        linkName=""
        linkURL=""
      ></Card>
      
      <Card
        image="http://www.forteworks.com/forteworks-16.9.19/games/images/spaceshooter.jpg"
        resizeMode="contain"
        title="Games"
        description="A set of games created with Panda.js, which I customized while working at Codigo, to fit both the customer branding specifications and to handle gesture recognition."
        linkName="Games"
        linkURL="http://www.forteworks.com/forteworks-16.9.19/games/index-games.php"
      ></Card>

      <Card
        image="http://www.forteworks.com/forte_2017.5.14/img/rough_est.png"
        resizeMode="contain"
        title="Estimation App"
        description="An app I created to learn about web apps with offline capabilities, using vanilla javascript. It lets you calculate tasks and materials into an estimate of work. While it is not beautiful, it is definitely functional."
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
