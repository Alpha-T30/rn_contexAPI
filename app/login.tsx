import { View, Text } from "react-native";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import SimpleContext from "@/contextproviders/simpleContext";
import getData from "@/contextproviders/simpleContext";

export default function Login() {
  const { userName, age, education } = getData();
  console.log(age);

  return (
    <View>
      <Text>UserData: {userName}</Text>
    </View>
  );
}
