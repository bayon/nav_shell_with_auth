//
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <MaterialIcons
      name="menu"
      size={24}
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  );
};

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <MaterialIcons
      name="login"
      size={24}
      onPress={() => {
        navigation.navigate("Home");
      }}
    />
  );
};

function RedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Red!</Text>
    </View>
  );
}

function GreenScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Green!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function tabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Red" component={redNavigator} />
      <Tab.Screen name="Green" component={greenNavigator} />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Splash Page</Text>
      <Text>Login Form Here</Text>
      <Text>Not Signed up yet?</Text>
      <Button
        onPress={() => navigation.navigate("Register")}
        title="Register"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Notification Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function LogoutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Logout Screen</Text>
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Register Form</Text>
      <Text>Already Registered?</Text>
      <Button onPress={() => navigation.navigate("Home")} title="Login" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
//sub navigators
const Stack = createStackNavigator();

function redNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Red" component={RedScreen} />
    </Stack.Navigator>
  );
}
function greenNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Green" component={GreenScreen} />
    </Stack.Navigator>
  );
}
function notificationsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}
function homeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen name="Home/Login" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function logoutNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: null,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen name="Logout" component={LogoutScreen} />
    </Stack.Navigator>
  );
}
function registerNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: null,
        headerRight: null,
      }}
    >
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
//

export default function App() {
  const isAuthorized = false;
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={homeNavigator} />
        {isAuthorized && (
          <Drawer.Screen
            name="Notifications"
            component={notificationsNavigator}
          />
        )}
        {isAuthorized && <Drawer.Screen name="Tabs" component={tabNavigator} />}
        {isAuthorized && (
          <Drawer.Screen name="Logout" component={logoutNavigator} />
        )}
        
          <Drawer.Screen name="Register" component={registerNavigator} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
