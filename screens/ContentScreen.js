import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  PixelRatio,
  Animated,
} from "react-native";

import GoalItem from "../components/GoalItem";

function ContentScreen() {
  const scrollY = useState(new Animated.Value(0))[0];

  // Responsive font size
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  const dynamicFontSize = scrollY.interpolate({
    inputRange: [10, 50],
    outputRange: [getFontSize(32), getFontSize(22)],
    extrapolate: "clamp",
  });

  const DATA = [
    { key: "1", task: "단풍톤" },
    { key: "2", task: "아이디어 녹화" },
    { key: "3", task: "황교수님 면담" },
    { key: "4", task: "100일 챌린지" },
    { key: "5", task: "리액트 공부" },
    { key: "6", task: "리액트 스터디" },
    { key: "7", task: "질문 준비" },
    { key: "8", task: "초격자" },
    { key: "9", task: "신경끄기의 기술" },
    { key: "10", task: "HCI 3.0" },
    { key: "11", task: "종의 기원" },
    { key: "12", task: "피피티" },
    { key: "13", task: "리처드 도킨스" },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Animated.Text
          style={[
            {
              fontSize: dynamicFontSize,
              fontWeight: "bold",
            },
          ]}
        >
          할 일이 {DATA.length}개 밖에 안남잖아?
        </Animated.Text>
        <Animated.Text
          style={[
            {
              fontSize: dynamicFontSize,
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
        renderItem={({ item }) => <GoalItem id={item.key} text={item.task} />}
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
});

export default ContentScreen;
