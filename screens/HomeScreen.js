import AsyncStorage from "@react-native-async-storage/async-storage";
//npm install formik yup
import { Formik } from "formik";
import React from "react";
import {
  Alert,
  Button, Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import * as authAction from "../redux/actions/authAction";
import FormStyles from "./FormStyles";

const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const styles = FormStyles;

const HomeScreen = (navData) => {
  const dispatch = useDispatch();

  // Check if already logged in.
  var auth = useSelector((state) => state.auth.authorized);
  if (auth) {
    return (
      <View style={styles.container}>
        <Text style={styles.noticeText}>You are already logged in.</Text>
        <Text style={styles.noticeText}>Do you want to log out?</Text>
        <Button
        onPress={() => navData.navigation.navigate("Logout")}
        title="Logout"
        style={styles.noticeButton}
      />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            console.log(values);
            dispatch(authAction.loginUser(values))
              .then(async (result) => {
                console.log(result);
                if (result.success) {
                  try {
                    await AsyncStorage.setItem("token", result.token);
                    navData.navigation.navigate("Bayon");
                  } catch (error) {
                    console.log(error);
                  }
                } else {
                  Alert.alert(result.message);
                }
              })
              .catch((err) => console.log(err));
          }}
        >
          {(props) => (
            <View style={styles.container}>
              <View style={styles.logo}>
                <Image
                  source={require("../assets/bayon_forte.jpg")}
                  style={styles.image}
                />
              </View>
              <View>
                <TextInput
                  style={styles.inputBox}
                  placeholder="Email"
                  placeholderTextColor="#fff"
                  keyboardType="email-address"
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                  onBlur={props.handleBlur("email")}
                />
                <Text style={styles.error}>
                  {props.touched.email && props.errors.email}
                </Text>
                <TextInput
                  style={styles.inputBox}
                  placeholder="Password"
                  placeholderTextColor="#fff"
                  secureTextEntry={true}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  onBlur={props.handleBlur("password")}
                  
                />
                <Text style={styles.error}>
                  {props.touched.password && props.errors.password}
                </Text>

                <TouchableOpacity
                  style={styles.button}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.registerContainer}>
                  <Text style={styles.registerText}>
                    Don't Have an Account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navData.navigation.navigate("Register")}
                  >
                    <Text style={styles.registerButton}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
 