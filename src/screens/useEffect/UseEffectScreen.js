import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

const UseEffectScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>useEffect</Text>
    </SafeAreaView>
  );
};

export default UseEffectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});
