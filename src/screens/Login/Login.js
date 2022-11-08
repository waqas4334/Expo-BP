import { StyleSheet, Text, View } from "react-native"
import React from "react"

export const Login = ({ navigation }) => {
  return (
    <View
      style={[
        {
          marginTop: 100,
        },
      ]}>
      <Text onPress={() => navigation.navigate("Home")}>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
