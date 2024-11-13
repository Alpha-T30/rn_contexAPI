import { SimpleProvider } from "@/contextproviders/simpleContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SimpleProvider>
      <Stack>
        <Stack.Screen name="index"></Stack.Screen>
        <Stack.Screen name="login"></Stack.Screen>
      </Stack>
    </SimpleProvider>
  );
}
