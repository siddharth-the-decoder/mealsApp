import { View, Text, StyleSheet } from "react-native";

function MealDetails({
  duration,
  affordability,
  complexity,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detalItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detalItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
      <Text style={[styles.detalItem, textStyle]}>{duration}m</Text>
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
