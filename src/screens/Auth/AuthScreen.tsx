import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
    Dimensions,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import BackgroundImgConst from '../../constants/images/BackgroundImgConst';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const MANTRA_LINES = [
    'Hare Krishna Hare Krishna',
    'Krishna Krishna Hare Hare',
    'Hare Rama Hare Rama',
    'Rama Rama Hare Hare',
];
const FULL_MANTRA = MANTRA_LINES.join('\n');

const AuthScreen = () => {
    const insets = useSafeAreaInsets();
    const ringRotation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const loop = Animated.loop(
            Animated.timing(ringRotation, {
                toValue: 1,
                duration: 30000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        );
        loop.start();
        return () => loop.stop();
    }, [ringRotation]);

    const ringSpin = ringRotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const [displayedChars, setDisplayedChars] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setDisplayedChars(prev => {
                if (prev >= FULL_MANTRA.length) {
                    clearInterval(intervalRef.current!);
                    return prev;
                }
                return prev + 1;
            });
        }, 80); // speed of typing

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const displayedText = FULL_MANTRA.substring(0, displayedChars);

    return (
        <View
            className="flex-1 bg-black"
            style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
        >
            <Image
                source={BackgroundImgConst.authScreen}
                className="absolute top-0 left-0 w-full h-full"
                resizeMode="cover"
            />
            <View className="absolute top-0 left-0 w-full h-full bg-black/60" />

            <View className="flex-1 justify-center items-center z-10">
                <Animated.View
                    className="absolute"
                    style={{
                        width: width * 0.85,
                        height: width * 0.85,
                        borderRadius: width * 0.85,
                        borderWidth: 2,
                        borderColor: 'rgba(255,215,0,0.25)',
                        borderStyle: 'dashed',
                        transform: [{ rotate: ringSpin }],
                    }}
                />
                <Animated.View
                    className="absolute"
                    style={{
                        width: width * 0.7,
                        height: width * 0.7,
                        borderRadius: width * 0.7,
                        borderWidth: 1,
                        borderColor: 'rgba(255,180,0,0.15)',
                        transform: [{ rotate: ringSpin }],
                    }}
                />

                <View className="px-6">
                    <Text
                        className="text-4xl font-bold text-white text-center leading-snug"
                        style={{
                            fontFamily: 'serif',
                            textShadowColor: 'rgba(255,215,0,0.5)',
                            textShadowRadius: 10,
                        }}
                    >
                        {displayedText}
                    </Text>
                </View>
            </View>

            <View className="absolute bottom-0 w-full z-20">
                <View className="bg-[#1a1a1a]/80 backdrop-blur-lg rounded-t-[40px] p-8 border border-white/10 shadow-2xl">
                    <Text className="text-white text-2xl font-bold text-center mb-1">
                        Welcome, Seeker
                    </Text>
                    <Text className="text-gray-400 text-sm text-center mb-8">
                        Chant and be blessed
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        className="w-full h-14 bg-white rounded-full flex-row items-center justify-center space-x-3 shadow-lg shadow-orange-600/20"
                    >
                        <Text className="text-gray-800 font-semibold text-base">
                            Continue with Google
                        </Text>
                    </TouchableOpacity>

                    <Text className="text-gray-500 text-xs text-center mt-6">
                        By continuing, you agree to our{' '}
                        <Text className="text-orange-400 underline">Terms</Text> and{' '}
                        <Text className="text-orange-400 underline">Privacy Policy</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default AuthScreen;