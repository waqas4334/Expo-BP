import { Button } from "@rneui/base"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { RootNavigation } from "./src/navigation/RootNavigation"
import { NativeBaseProvider, Text, Box } from "native-base"
import { colors } from "./src/styles/colors"

import screens from "./src/screens"

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <NativeBaseProvider>
        <StatusBar backgroundColor={colors.black} barStyle="light-content" />
        <RootNavigation />
        {/* <screens.Login /> */}
      </NativeBaseProvider>
      {/* </Provider> */}
    </>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
