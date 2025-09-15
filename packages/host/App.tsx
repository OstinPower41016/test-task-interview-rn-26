/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { SomeUiComponent } from 'ui-kit';

// @ts-ignore
const MicroFront = React.lazy(() => import('microFront/App'));

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{ marginTop: 100 }}>
      <React.Suspense
        fallback={
          <View>
            <Text>loading</Text>
          </View>
        }
      >
        <MicroFront />
      </React.Suspense>
      <SomeUiComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
