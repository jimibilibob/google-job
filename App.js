import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardJobOffer from './src/CardJobOffer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CardJobOffer></CardJobOffer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
