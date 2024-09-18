import { View, Text, Pressable } from "react-native";
import { UserProvider } from "../context/UserContext";
import ComponentA from "../components/ComponentA";

const Index = () => {
  return (
    <View>
      <Text className="text-red-400">selam</Text>
      <UserProvider>
        <ComponentA></ComponentA>
      </UserProvider>
    </View>
  );
};

export default Index;
