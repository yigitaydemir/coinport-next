import { View, Text, Pressable } from "react-native";
import ComponentA from "../components/ComponentA";
import ImageComp from "../components/ImageComp";
import ListData from "../components/ListData";
import HugeComp from "../components/HugeComp";

const Index = () => {
  return (
    <View>
      <HugeComp></HugeComp>
      {/* <Text>Index</Text>
      <ComponentA></ComponentA>
      
      <Pressable onPress={() => console.log("pressed")}>
        <Text style={{ color: "teal" }}>Press Me</Text>
      </Pressable>

      <Pressable onPressIn={() => console.log("onpress in")}>
        <Text style={{ color: "coral" }}>Press Me</Text>
      </Pressable>

      <Pressable onPressOut={() => console.log("onpress out")}>
        <Text style={{ color: "blue" }}>Press Me</Text>
      </Pressable>

      <Pressable onLongPress={() => console.log("presse")}>
        <Text style={{ color: "black" }}>Press Me</Text>
      </Pressable> */}
    </View>
  );
};

export default Index;
