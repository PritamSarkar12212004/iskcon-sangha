import LottieView from "lottie-react-native";
const LootiAnimation = ({
    onAnimationFinish,
    path,
    height,
    width
}: {
    onAnimationFinish: () => void,
    path: any,
    height: number,
    width: number
}) => {
    return (
        <LottieView
            source={path}
            autoPlay
            loop={false}
            onAnimationFinish={onAnimationFinish}
            style={{
                height: height,
                width: width
            }}
        />
    )
}

export default LootiAnimation