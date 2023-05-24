import { StatusBar, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import * as SplashScreen from 'expo-splash-screen';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada){
    return <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}

