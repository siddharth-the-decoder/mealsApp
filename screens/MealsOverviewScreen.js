import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsOverViewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals OverView Sceen</Text>
    </View>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
