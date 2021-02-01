import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ExperienceScreen from "./screens/ExperienceScreen";
import HomeScreen from "./screens/HomeScreen";
import LogoutScreen from './screens/LogoutScreen';
import RegisterScreen from "./screens/RegisterScreen";
import SkillsScreen from "./screens/SkillsScreen";
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
        navigation.navigate("Logout");
      }}
    />
  );
};

function homeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
        
      }}
    >
      <Stack.Screen name="Bayon Forte" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function registerNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerLeft: () => <HeaderLeft />,
    }}
    >
      <Stack.Screen name="Register" component={RegisterScreen} />
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
 
function skillsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Skills" component={SkillsScreen} />
    </Stack.Navigator>
  );
}

function experienceNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Experience" component={ExperienceScreen} />
    </Stack.Navigator>
  );
}
function tabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Skills"
      barStyle={{marginBottom:30,fontSize:40}}
      tabBarOptions={
        {
          labelStyle: {
            fontSize:30,
            padding:15
          }
        }
      }
    >
      <Tab.Screen name="Skills" component={skillsNavigator} />
      <Tab.Screen name="Experience" component={experienceNavigator} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          
          <Drawer.Screen name="Bayon" component={tabNavigator} />
          <Drawer.Screen name="Login" component={homeNavigator} />
          <Drawer.Screen name="Register" component={registerNavigator} />
          <Drawer.Screen name="Logout" component={logoutNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

 
