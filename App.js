import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// React Navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/router/StackNavigator';

// Components
import HomeScreen from './src/components/screens/homeScreen/HomeScreen';
import TabNavigator from './src/router/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
