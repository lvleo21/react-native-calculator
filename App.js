import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Calculator from './src/components/Calculator';

export default function App() {

  return (
    <View style={styles.container}>
      <Calculator />
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
