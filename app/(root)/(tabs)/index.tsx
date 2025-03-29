import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Link href="/sign-in">Sign in</Link>
      <Link href="/explore">explore</Link>
      <Link href="/profile">Profile</Link>
      {/* <Link href="/properties/2">Property</Link> */}
    </View>
  );
}
