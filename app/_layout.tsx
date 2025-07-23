// import { Stack } from "expo-router";
import { Slot, SplashScreen } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useFonts } from 'expo-font';
import { useEffect } from "react";
import "../global.css";


SplashScreen.preventAutoHideAsync(); //evita que se quite el Splash antes de que carguen las fonts


const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf')
  })

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync()

    // if(!fontsLoaded && !error) return null;
  }, [fontsLoaded, error])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  )
  // return <Slot />
  // return <Stack />
};

export default RootLayout;