import { View, Text, FlatList } from "react-native";

const ListData = () => {
  const locations = [
    { id: 1, name: "London" },
    { id: 2, name: "Paris" },
    { id: 3, name: "Istanbul" },
    { id: 4, name: "Berlin" },
    { id: 5, name: "Barcelona" },
    { id: 6, name: "Amsterdam" },
  ];
  return (
    <View>
      <Text>ListData</Text>
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      ></FlatList>
    </View>
  );
};

export default ListData;
