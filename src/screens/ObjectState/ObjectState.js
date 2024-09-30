import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";

const ObjectState = () => {
  const [user, setUser] = useState({ id: 1, name: "Jacob" });

  const handlePress = () => {
    setUser({ ...user, name: "Mete" });
  };
  // ...user ile userın o anki hali alınır ardından güncelleme yapılır
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>ID:{user.id} </Text>
      <Text style={styles.text}>Name:{user.name} </Text>
      <Button title="Click" onPress={handlePress} />
    </SafeAreaView>
  );
};

export default ObjectState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
