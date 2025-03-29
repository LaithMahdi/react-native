import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text> PropertyProperty {id} </Text>
    </View>
  );
};

export default Property;
