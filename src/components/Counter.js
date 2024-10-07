import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmaount] = useState(1);

  useEffect(() => {
    console.log("Component mount edildi.");
  }, []);

  useEffect(() => {
    console.log("Count veya Amount değişti");
  }, [count, amount]);
  //backend endpointinizde bir veri vardır ve bunu alıp ekranda  göstermek istiyorsanız useEffecti kullanabilirsiniz

  // useEffect(() => {
  //   console.log("amount state değişti");
  // }, [amount]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count} </Text>
      <Button title="Arttır" onPress={() => setCount(count + amount)} />
      {/* <Button title="Eksilt" onPress={() => setCount(count - 1)} /> */}
      <Text style={styles.text}>Amount: {amount} </Text>
      <Button title="1" onPress={() => setAmaount(1)} />
      <Button title="5" onPress={() => setAmaount(5)} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    //camelCase
  },
});
