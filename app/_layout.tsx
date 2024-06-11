import React, {useState, useEffect} from 'react'
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { store } from '@/store'
import { Provider } from 'react-redux'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import {Link} from 'expo-router'
import Splash from '@/components/SplashScreen'

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(false);
      }
    }

    prepare();
  }, []);

  if (appIsReady) {
    return <Splash />
  }

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ 
          title: 'Movie App',
          headerRight: () => <Link href="/favorite"><AntDesign name='heart' size={20} style={{ marginRight: 20}} /></Link>
        }} />
      </Stack>
      </Provider>
  );
}