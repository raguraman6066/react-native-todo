import { useState } from "react";
import { FlatList, StyleSheet, View, Alert, ToastAndroid } from "react-native";

import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "do exercise", key: "1" },
    { text: "go shopping", key: "2" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const addHandler = (text) => {
    if (text.length > 2) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      ToastAndroid.show(
        "Name must be longer than 3 characters",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      // Alert.alert("OOPS!", "Length must be greater than 2 characters", [
      //   { text: "Ok", onPress: () => console.log("Alert Closed") },
      //   { text: "Cancel", onPress: () => console.log("Alert Closed") },
      // ]);
    }
  };
  return (
    <View style={styles.container}>
      <Header title="My Todos" />
      <View style={styles.content}>
        <AddTodo addHandler={addHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  list: { marginTop: 20 },
});
