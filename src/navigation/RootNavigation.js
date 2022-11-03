import * as React from "react"
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Button,
} from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import navigationStrings from "./navigationStrings"
import { colors } from "../assets/colors/colors"
import { Bell } from "react-native-feather"

import {
  Login,
  Booking,
  ChooseAccount,
  ForgotPassword,
  Home,
  Profile,
  Register,
  SetPassword,
} from "../screens/index"
const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

// const App = () => {
//   return (
//     <Drawer.Navigator  >
//       <Drawer.Screen name="Home" component={Screens.Home} options={
//         {
//           headerTitle: 'Geysital Home',

//           headerTitleAlign: 'center',
//           headerTintColor: colors.plusButton,
//           headerStyle: {
//             backgroundColor: colors.headerBar
//           },
//           headerRight: () => (
//             <View style={{
//               marginRight: "10%",
//             }}>
//               <Bell
//                 // name={icon}
//                 size={25}
//                 color= {colors.plusButton}             />
//             </View>
//           )
//         }
//       } />
//       <Drawer.Screen name="example" component={Screens.Example} />
//       <Drawer.Screen name="Settings" component={Screens.SettingsPage} />
//       <Drawer.Screen name="log out" component={Screens.Login} options={
//         {
//           headerShown: false
//         }
//       } />
//     </Drawer.Navigator>
//   );
// }

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigationStrings.Login}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={navigationStrings.Login} component={Login} />
        <Stack.Screen name={navigationStrings.Register} component={Register} />
        <Stack.Screen
          name={navigationStrings.SetPassword}
          component={SetPassword}
        />
        <Stack.Screen
          name={navigationStrings.ForgotPassword}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={navigationStrings.ChooseAccount}
          component={ChooseAccount}
        />
        <Stack.Screen name={navigationStrings.Booking} component={Booking} />
        <Stack.Screen name={navigationStrings.Home} component={Home} />
        <Stack.Screen name={navigationStrings.Profile} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
