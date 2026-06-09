import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './auth/AuthNavigation';
import SplashScreen from '../screens/splash/SplashScreen';
import SplashAuthCheker from '../functions/auth/SplashAuthCheker';

const Stack = createStackNavigator();
const RootNavigation = () => {
    const [authChecked, setAuthChecked] = useState<boolean | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        SplashAuthCheker().then((auth: any) => {
            setAuthChecked(auth)
        })
    }, [])
    return isLoading ? <SplashScreen setIsLoading={setIsLoading} /> : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                authChecked ? null : <Stack.Screen name="Auth_Navigation" component={AuthNavigation} />
            }
        </Stack.Navigator>
    )
}
export default RootNavigation