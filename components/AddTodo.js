import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from "react-native";

export default AddTodo = ({ addHandler }) => {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter New Todo"
        onChangeText={changeHandler}
      />
      <Button onPress={() => addHandler(text)} title="Add Todo" color="coral" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
