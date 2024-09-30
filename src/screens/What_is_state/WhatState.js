import React, { useState } from "react";
import { Button, Text, SafeAreaView, StyleSheet } from "react-native";

const WhatState = () => {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(29);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={isVisible ? "Gizle" : "Göster"}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && (
        <>
          <Text>{name}</Text>
          <Text>{age}</Text>
          <Button title="İsmi Değiştir" onPress={() => setName("Ahmet")} />
          <Button title="Yaşı Değiştir" onPress={() => setAge(30)} />
        </>
      )}
    </SafeAreaView>
  );
};

export default WhatState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
