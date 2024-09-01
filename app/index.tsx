import Animated, { FadeInDown } from "react-native-reanimated";
import React from "react";
import {
  View,
  StatusBar,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center  ">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <ImageBackground
        style={{ width: wp(100), height: hp(100) }}
        className=" bg-blue-400"
        source={require("../assets/images/welcome.png")}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "#18181b"]}
          className="w-full h-full flex justify-end pb-12 space-y-8"
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        >
          <Animated.View
            entering={FadeInDown.delay(100).springify()}
            className=" flex items-center justify-center"
          >
            <Text
              className={`text-white capitalize font-bold tracking-wides`}
              style={{ fontSize: hp(5) }}
            >
              best <Text className="text-rose-500">workouts</Text>{" "}
            </Text>
            <Text
              className={`text-white capitalize tracking-wides font-bold`}
              style={{ fontSize: hp(5) }}
            >
              for you
            </Text>
          </Animated.View>

          <View>
            <TouchableOpacity
              style={{ height: hp(7), width: wp(80) }}
              className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
            >
              <Text
                style={{ fontSize: hp(3) }}
                className="text-white font-bold tracking-wide"
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}
