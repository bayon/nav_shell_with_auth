import React from 'react';
import { Button, Text, View } from 'react-native';


function RegisterScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Register Form</Text>
        <Text>Already Registered?</Text>
        <Button onPress={() => navigation.navigate("Home")} title="Login" />
      </View>
    );
  }

  export default RegisterScreen;