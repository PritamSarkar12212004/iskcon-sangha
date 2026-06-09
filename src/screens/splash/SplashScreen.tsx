import { View } from 'react-native';
import { useEffect, useState } from 'react';
import AppWraper from '../../layouts/wrapers/AppWraper';
import LootiAnimation from '../../components/Common/animations/LootiAnimation';
import animationsConst from '../../constants/animations/animationsConst';
import { MotiView } from 'moti';
import { ActivityIndicator } from 'react-native-paper';

const SplashScreen = ({ setIsLoading }: { setIsLoading: any }) => {
    const [lottieComplete, setLottieComplete] = useState(false);
    const [sLoader, setSLoader] = useState(false);
    const [startExit, setStartExit] = useState(false);
    useEffect(() => {
        if (lottieComplete) {
            const timer = setTimeout(() => {
                setStartExit(true);
            }, 600);

            return () => clearTimeout(timer);
        }
    }, [lottieComplete]);
    useEffect(() => {
        if (startExit) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 700);
            return () => clearTimeout(timer);
        }
    }, [startExit, setIsLoading]);
    const DelayFunc = () => {
        setSLoader(true);
        setTimeout(() => {
            setLottieComplete(true);
            setSLoader(false);
        }, 3000);
    }
    return (
        <View className="flex-1 bg-[#000000]">
            <MotiView
                from={{
                    opacity: 1,
                    transform: [{ scale: 1 }]
                }}
                animate={{
                    opacity: startExit ? 0 : 1,
                    transform: [{ scale: startExit ? 0.6 : 1 }]
                }}
                transition={{
                    type: 'timing',
                    duration: 650,
                }}
                style={{ flex: 1 }}
            >
                <AppWraper>
                    <View className="flex-1 flex items-center justify-center">
                        <LootiAnimation
                            height={500}
                            width={500}
                            path={animationsConst.SplashScreenAnimation}
                            onAnimationFinish={() => DelayFunc()}
                        />
                        {
                            sLoader && <View className="absolute bottom-20">
                                <ActivityIndicator size="large" color="#ffffff" />
                            </View>
                        }
                    </View>
                </AppWraper>
            </MotiView>
        </View>
    );
};

export default SplashScreen;