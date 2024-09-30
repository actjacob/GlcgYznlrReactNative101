import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [name, setName] = useState("Mehmet");
  //setName veriyi değiştirebilmek için kullanılan bir şey
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
          <Text>{name} </Text>
          <Text>{age} </Text>
          <Button title="İsmi Değiştir" onPress={() => setName("Ahmet")} />
          <Button title="Yaşı Değiştir" onPress={() => setAge(30)} />
        </>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
