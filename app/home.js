import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <Text>Home</Text>
  </SafeAreaView>;
  const router = useRouter();
};

export default Home;
