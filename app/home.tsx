import { View, Text, Image } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Ionicons from "@expo/vector-icons/Ionicons"

export default function Home() {
    return (
        <SafeAreaView>
            <StatusBar style='dark' />
            {/* punchline and avatar */}
            <View className='flex-row justify-between items-center mx-5' >
                <View className='space-y-2' >
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className='font-bold tracking-wider text-neutral-700'
                    >
                        READY TO
                    </Text>
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className='font-bold tracking-wider text-rose-500'
                    >
                        WORKOUT
                    </Text>
                </View>
                <View className='flex justify-center items-center space-y-2'>
                    <Image
                        source={require("../assets/images/avatar.png")}
                        style={{ height: hp(6.5), width: wp(11) }}
                        className='rounded-full'
                    />
                    <View
                        className='bg-neutral-200 rounded-full flex justify-center items-center w-10 h-10 border-[3px] border-neutral-300' >
                        <Ionicons name='notifications' color={"gray"} size={30} />
                    </View>
                </View>
                {/* image slider */}
            </View>

        </SafeAreaView>
    )
}