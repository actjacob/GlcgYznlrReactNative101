import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  Button,
} from "react-native";

const ArrayState = () => {
  const [idCounter, setIdCounter] = useState(3);
  const [users, setUsers] = useState([
    { id: 1, name: "Ahmet" },
    { id: 2, name: "Mehmet" },
  ]);

  const cities = [
    "Amsterdam",
    "Berlin",
    "Brussels",
    "Vienna",
    "Budapest",
    "Prague",
    "Rome",
    "Paris",
    "Madrid",
    "Lisbon",
    "Athens",
    "Stockholm",
    "Copenhagen",
    "Helsinki",
    "Oslo",
    "Dublin",
    "Warsaw",
    "Belgrade",
    "Zagreb",
    "Sofia",
    "Bucharest",
    "Bratislava",
    "Ljubljana",
    "Sarajevo",
    "Skopje",
    "Tallinn",
    "Riga",
    "Vilnius",
    "Reykjavik",
    "Luxembourg",
    "Monaco",
    "San Marino",
    "Vaduz",
    "Valletta",
    "Moscow",
    "Saint Petersburg",
    "Kiev",
    "Minsk",
    "Zurich",
    "Geneva",
    "Barcelona",
    "Milan",
    "Munich",
    "Hamburg",
    "Frankfurt",
    "Dusseldorf",
    "Lyon",
    "Marseille",
    "Naples",
    "Turin",
  ];
  const handlePress = () => {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    setUsers((prev) => [
      {
        id: idCounter,
        // Math.floor(Math.random() * 1000),
        name: randomCity, // Math.floor(Math.random() * 1000),
      },
      ...prev,
    ]);
    setIdCounter(idCounter + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
      <Button title="Add" onPress={handlePress} />
    </SafeAreaView>
  );
};

export default ArrayState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    backgroundColor: "#eee",
    padding: 10,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 20,
  },
});
