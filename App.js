import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import GreenScreen from "./screens/GreenScreen";
import HomeScreen from "./screens/HomeScreen";
import LogoutScreen from './screens/LogoutScreen';
import NotificationsScreen from "./screens/NotificationsScreen";
import RedScreen from "./screens/RedScreen";
import RegisterScreen from "./screens/RegisterScreen";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
function logoutNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Logout" component={LogoutScreen} />
    </Stack.Navigator>
  );
}
 

function tabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Red" component={redNavigator} />
      <Tab.Screen name="Green" component={greenNavigator} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={homeNavigator} />
          <Drawer.Screen name="Notifications" component={notificationsNavigator}/>
          <Drawer.Screen name="Tabs" component={tabNavigator} />
          <Drawer.Screen name="Login" component={homeNavigator} />
          <Drawer.Screen name="Logout" component={logoutNavigator} />
          <Drawer.Screen name="Register" component={registerNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
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
