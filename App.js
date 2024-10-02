import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import WhatState from "./src/screens/What_is_state/WhatState";
import ArrayState from "./src/screens/ArrayState/ArrayState";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ArrayState />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
