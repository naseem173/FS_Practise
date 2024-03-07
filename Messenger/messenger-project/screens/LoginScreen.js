import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { KeyboardAvoidingView } from "react-native";

const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 100 }}>
          <Text
            style={{
              color: "#4A55A2",
              fontSize: 17,
              fontWeight: "600",
            }}>
            Sign In
          </Text>

          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
            }}>
            Sign In to youraccount 
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
