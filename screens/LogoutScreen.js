import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Button, View } from "react-native";
import { useDispatch } from 'react-redux';
import * as authAction from "../redux/actions/authAction";


function LogoutScreen({navigation}) {
  const dispatch = useDispatch();
 
  //TODO: need to make auth action to set authorized to false...and remove token from storage.
  // Then offer direction back to login again.
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       
      <Button 
      title="Logout"
      onPress={ () => {
        console.log("poo")
        dispatch(authAction.logoutUser())
        .then(async (result) => {
          console.log(result);
          try {
            await AsyncStorage.removeItem("token");
            console.log("success ? ")
            //navData.navigation.navigate("Tabs");
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
