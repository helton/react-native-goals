import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Goal from "./models/Goal";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([] as Goal[]);
  const [isAddMode, setIsAddMode] = useState(false);

  const generateKey = () => (Math.random() * 10e16).toString();

  const addGoalHandler = (value: string) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: generateKey(), value } as Goal
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (key: string) =>
    setCourseGoals(currentGoals =>
      currentGoals.filter(currentGoal => currentGoal.key !== key)
    );

  const cancelGoalHandler = () => setIsAddMode(false);

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}></Button>
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancelGoal={cancelGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem onDelete={removeGoalHandler} goal={itemData.item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
