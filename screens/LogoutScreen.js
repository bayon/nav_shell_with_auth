import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from 'react-redux';
import * as authAction from "../redux/actions/authAction";
import FormStyles from "./FormStyles";

const styles = FormStyles;

function LogoutScreen({navigation}) {
  const dispatch = useDispatch();
 
  //TODO: need to make auth action to set authorized to false...and remove token from storage.
  // Then offer direction back to login again.
  return (
    <View style={styles.container}>
      
       <Text style={styles.noticeText}>Are you sure you want to Logout?</Text>
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
      style={styles.noticeButton}
      />
    </View>
  );
}
export default LogoutScreen;
