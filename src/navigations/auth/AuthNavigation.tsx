import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../../screens/Auth/AuthScreen';
const Stack = createStackNavigator();


const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Auth_Screen'>
            <Stack.Screen name="Auth_Screen" component={AuthScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigation