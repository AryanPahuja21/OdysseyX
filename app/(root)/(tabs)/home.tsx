import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">Home Page</Text>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Home;