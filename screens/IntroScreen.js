import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  PixelRatio,
  Animated,
} from "react-native";

function IntroScreen() {
  const scrollY = useState(new Animated.Value(0))[0];

  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  const fontSize = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [getFontSize(32), getFontSize(22)],
    extrapolate: "clamp",
  });

  const DATA = [
    { key: "1", content: "단풍톤" },
    { key: "2", content: "아이디어 녹화" },
    { key: "3", content: "황교수님 면담" },
    { key: "4", content: "100일 챌린지" },
    { key: "5", content: "리액트 공부" },
    { key: "6", content: "리액트 스터디" },
    { key: "7", content: "질문 준비" },
    { key: "8", content: "초격자" },
    { key: "9", content: "신경끄기의 기술" },
    { key: "10", content: "HCI 3.0" },
    { key: "11", content: "종의 기원" },
    { key: "12", content: "피피티" },
    { key: "13", content: "리처드 도킨스" },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Animated.Text
          style={[
            {
              fontSize,
              fontWeight: "bold",
            },
          ]}
        >
          할 일이 {DATA.length}개 밖에 안남잖아?
        </Animated.Text>
        <Animated.Text
          style={[
            {
              fontSize,
              fontWeight: "bold",
            },
          ]}
        >
          완전 럭키비키잖앙🍀
        </Animated.Text>
      </View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        data={DATA}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TextInput style={styles.textInput} value={item.content} />
        )}
        scrollEventThrottle={16}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 2,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 20,
  },
  textInput: {
    fontSize: 18,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
  },
});

export default IntroScreen;
