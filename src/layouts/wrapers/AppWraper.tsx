import { SafeAreaView } from "react-native-safe-area-context";

const AppWraper = ({ children }: { children: React.ReactNode }) => {
    return (
        <SafeAreaView style={{ flex: 1, padding: 10 }}>
            {children}
        </SafeAreaView>
    );
};
export default AppWraper;