import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Rides = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">Rides Page</Text>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Rides;
