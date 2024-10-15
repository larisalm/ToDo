import * as React from "react";
import { todosData } from "../data/todos";
import { FlatList } from "react-native-web";

export default function TodoList() {
  return (
      <FlatList
        data={todosData}
        keyExtractor={item => item.id.toString()}
      /> 
  )
}