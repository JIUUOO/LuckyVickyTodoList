import { StatusBar } from "expo-status-bar";
import { Animated, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useEffect, useState, useRef } from "react";

import IntroScreen from "./screens/IntroScreen";
import ContentScreen from "./screens/ContentScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
          <IntroScreen />
        </Animated.View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
