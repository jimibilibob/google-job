import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardAnnouncement from './src/components/CardAnnouncement';
import CardHeader from './src/components/CardHeader';
import CardJobOffer from './src/components/CardJobOffer';
import Search from './src/components/Search';
import SectionHeader from './src/components/SectionHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CardHeader></CardHeader>
      <Search></Search>
      <CardAnnouncement></CardAnnouncement>
      <SectionHeader></SectionHeader>
      <CardJobOffer></CardJobOffer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
