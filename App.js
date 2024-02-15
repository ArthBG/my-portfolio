import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View>
      <Image source={require('./assets/icon.png')} />
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
