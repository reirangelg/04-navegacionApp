import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Pagina1Screen } from "./src/screens/Pagina1Screen";
import { Pagina2Screen } from './src/screens/Pagina2Screen'
//import Pagina3Screen from "./src/screens/Pagina3Screen";
import { SettingsScreen } from "./src/screens/SettingsScreen";
//import {MenuLateralBasico} from "./src/navigator/MenuLateralBasico";
import { StackNavigator } from './src/navigator/StackNavigator'
//import { SettingsScreen } from "./src/screens/SettingsScreen";
//import { MenuLateralBasico } from "./src/navigator/MenuLateralBasico";
import { MenuLateral } from "./src/navigator/MenuLateral";
import { Tabs } from "./src/navigator/Tabs";
import { AuthProvider } from "./src/context/AuthContext";

const App = () => {
  return (

    <NavigationContainer>
      <AppState>
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  )

}
const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App