import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Community = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Community</Text>
    <Button
      title="go to detail"
      onPress={() => navigation.navigate("ItemDetail")}
    ></Button>
  </View>
);

export default Community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
