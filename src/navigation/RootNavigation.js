import { Button } from "@rneui/base"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import screens from "../screens"
const Stack = createNativeStackNavigator()
export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Home" component={screens.Home} />
        <Stack.Screen
          name={"login"}
          component={screens.Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
