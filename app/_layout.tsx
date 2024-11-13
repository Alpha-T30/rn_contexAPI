import { SimpleProvider } from "@/contextproviders/simpleContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // You have to wrap the main layout with the provider we created earlier i.e. SimpleProivder to get the preffered data anywhere in our app.  we can wrap with multiple providers
    <SimpleProvider>
      <Stack>
        <Stack.Screen name="index"></Stack.Screen>
        <Stack.Screen name="login"></Stack.Screen>
      </Stack>
    </SimpleProvider>
  );
}
