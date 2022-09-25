import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardAnnouncement from './src/components/CardAnnouncement';
import CardHeader from './src/components/CardHeader';
import CardJobOffer from './src/components/CardJobOffer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CardHeader></CardHeader>
      <CardAnnouncement></CardAnnouncement>
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
