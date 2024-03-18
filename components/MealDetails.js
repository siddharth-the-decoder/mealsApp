import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, affordability, complexity }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detalItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detalItem}>{affordability.toUpperCase()}</Text>
      <Text style={styles.detalItem}>{duration}m</Text>
    </View>
  );
}
export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detalItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
