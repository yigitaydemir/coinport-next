import { View, Text, Image } from "react-native";

const ImageComp = () => {
  return (
    <View>
      <Text>ImageComp</Text>

      <Image 
        source={require("../assets/img.png")}
        style={{ width: 200, height: 200 }}
      ></Image>

      <Image
        source={{
          uri: "https://www.supersurvey.com/images/whatissamplingc.webp",
        }}
        style={{ width: 200, height: 200 }}
      ></Image>
    </View>
  );
};

export default ImageComp;
