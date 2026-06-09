import './global.css';
import React from 'react'
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux';
import { store } from './src/store/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import RootNavigation from './src/navigations/RootNavigation';
import { ErrorBoundary } from 'react-error-boundary';
import AppCrashError from './src/components/Common/Errors/AppCrashError';
import { DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <ErrorBoundary fallback={<AppCrashError />}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <SafeAreaProvider>
          <Provider store={store}>
            <PaperProvider>
              <NavigationContainer
                theme={{
                  ...DefaultTheme,
                  colors: {
                    ...DefaultTheme.colors,
                    background: '#000000',
                  },
                }}
              >
                <RootNavigation />
              </NavigationContainer>
            </PaperProvider>
          </Provider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  )
}

export default App