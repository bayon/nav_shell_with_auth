import AsyncStorage from "@react-native-async-storage/async-storage";
//npm install formik yup
import { Formik } from "formik";
import React from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import * as authAction from "../redux/actions/authAction";
import FormStyles from "./FormStyles";

const styles = FormStyles;

const formSchema = yup.object({
  fullName: yup.string().required().min(3),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});
const RegisterScreen = (navData) => {
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            dispatch(authAction.registerUser(values))
              .then(async (result) => {
                if (result.success) {
                  try {
                    await AsyncStorage.setItem("token", result.token);
                    navData.navigation.navigate("Bayon");
                  } catch (error) {
                    console.log(error);
                  }
                } else {
                  Alert.alert("Registration Failed try again.");
                }
              })
              .catch((err) => console.log(err));
          }}
          validationSchema={formSchema}
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
                  placeholder="Full Name"
                  placeholderTextColor="#fff"
                  onChangeText={props.handleChange("fullName")}
                  value={props.values.fullName}
                  onBlur={props.handleBlur("fullName")}
                />
                <Text style={styles.error}>
                  {props.touched.fullName && props.errors.fullName}
                </Text>

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
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <View style={styles.registerContainer}>
                  <Text style={styles.registerText}>Have an Account?</Text>
                  <TouchableOpacity
                    onPress={() => navData.navigation.navigate("Login")}
                  >
                    <Text style={styles.registerButton}>Login</Text>
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

export default RegisterScreen;

// import React from 'react';
// import { Button, Text, View } from 'react-native';

// function RegisterScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Register Form</Text>
//         <Text>Already Registered?</Text>
//         <Button onPress={() => navigation.navigate("Home")} title="Login" />
//       </View>
//     );
//   }

//   export default RegisterScreen;
