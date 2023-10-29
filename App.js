import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/splash';
import Onboarding from './screens/onboarding';
import Signin from './screens/signin';
import Number from './screens/number';
import Verify from './screens/verify';

const Stack = createStackNavigator();

export default function App() {
  return (
      // <Splash/>
      // <Onboarding/>
      // <Signin/>
      // <Number/>
      // <Verify/>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} 
        options={{ headerShown: false }} // Ẩn thanh tiêu đề
        />
        <Stack.Screen name="Onboarding" component={Onboarding} 
        options={{ headerShown: false }} // Ẩn thanh tiêu đề
        />
        <Stack.Screen name="Signin" component={Signin} 
        options={{ headerShown: false }} // Ẩn thanh tiêu đề
        />
        <Stack.Screen name="Number" component={Number} 
        options={{ 
          headerShown: true, // Hiện thanh tiêu đề
          headerTransparent: true, // Màu nền trong suốt
          headerTitle: '', // Không hiển thị tên tiêu đề
        }}/>
        <Stack.Screen name="Verify" component={Verify}
        options={{ 
          headerShown: true, // Hiện thanh tiêu đề
          headerTransparent: true, // Màu nền trong suốt
          headerTitle: '', // Không hiển thị tên tiêu đề
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

