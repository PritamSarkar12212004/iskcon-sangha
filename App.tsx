import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './src/store/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PaperProvider>
            <NavigationContainer>
              <View>
                <Text>App</Text>
              </View>
            </NavigationContainer>
          </PaperProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App