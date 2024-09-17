import { View, Text, FlatList, Image } from "react-native";

interface Product {
  url: string;
  name: string;
  price: number;
}

const HugeComp = () => {
  const products = [
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
      name: "Product 1",
      price: 10,
    },
    {
      id: 2,
      url: "https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123",
      name: "Product 2",
      price: 100,
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Product 3",
      price: 5,
    },
    {
      id: 4,
      url: "https://imageio.forbes.com/specials-images/imageserve/65df2e0562b5d061b718a4af/Skin-and-hair-care-beauty-product-mock-up--lotion-bottle--oil--cream--isolated-on/960x0.jpg?format=jpg&width=960",
      name: "Product 4",
      price: 50,
    },
    {
      id: 5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s",
      name: "Product 5",
      price: 250,
    },
  ];

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          margin: 15,
          padding: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
        }}
      >
        <Image
          source={{ uri: item.url }}
          style={{ width: 200, height: 200 }}
        ></Image>
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>test</Text>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
};

export default HugeComp;
