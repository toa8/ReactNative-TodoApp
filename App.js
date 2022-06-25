import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Modal,
  Image,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const goalsInputHandler = (newText) => {
    setEnteredGoalText(newText);
  };

  const addGoalsHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText("");
    setShowModal(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Show Modal"
          onPress={() => setShowModal(true)}
          color="#5e0acc"
        />
        <Modal visible={showModal} animationType="slide">
          <View style={styles.inputContainer}>
            <Image
              source={require("./assets/images/target.png")}
              style={styles.image}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Your course goal !"
              onChangeText={goalsInputHandler}
              value={enteredGoalText}
            />
            <View style={styles.btns}>
              <View style={styles.btn}>
                <Button
                  title="Cancel"
                  onPress={() => setShowModal(false)}
                  color="#f31282"
                />
              </View>
              <View style={styles.btn}>
                <Button
                  title="Add goal"
                  onPress={addGoalsHandler}
                  color="#5e0acc"
                />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <View>
                  <Pressable>
                    <View style={styles.goalItem}>
                      <Text style={styles.goalText}>{itemData.item}</Text>
                    </View>
                  </Pressable>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.deleteBtn}>
          <Button
            title="Delete All"
            color="red"
            onPress={() => setCourseGoals([])}
          />
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#311b6b",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
    borderRadius: 100 / 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 10,
    width: "85%",
    marginRight: 8,
    padding: 12,
  },
  goalsContainer: {
    flex: 5,
    marginVertical: 10,
  },
  goalItem: {
    margin: 8,
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },

  btns: {
    flexDirection: "row",
  },
  btn: {
    marginHorizontal: 10,
    marginVertical: 20,
    width: "35%",
  },
  deleteBtn: {
    marginVertical: 20,
  },
});
