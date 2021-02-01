import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from 'react-redux';
import * as authAction from "../redux/actions/authAction";


function LogoutScreen({navigation}) {
  const dispatch = useDispatch();
 
  //TODO: need to make auth action to set authorized to false...and remove token from storage.
  // Then offer direction back to login again.
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
       <Text>Are you sure you want to Logout?</Text>
      <Button 
      title="Logout"
      onPress={ () => {
        
        dispatch(authAction.logoutUser())
        .then(async (result) => {
          console.log(result);
          try {
            await AsyncStorage.removeItem("token");
            console.log("success ? ")
            navigation.navigate("Home");
          } catch (error) {
            console.log(error);
          }
        })
        .catch((err) => console.log(err));
      }
      
      }
      />
    </View>
  );
}
export default LogoutScreen;
