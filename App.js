import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

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
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random }, ...prevTodos];
    });
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
