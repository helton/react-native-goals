import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Goal from "../models/Goal";

const GoalItem = (props: { goal: Goal, onDelete: (key: string) => void }) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.goal.key)}>
      <View style={styles.listItem}>
        <Text>{props.goal.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

export default GoalItem;
