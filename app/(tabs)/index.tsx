import { Button, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <ThemedText 
        style={styles.title} 
        type="title">Одно из самых вкусных кофе в городе!</ThemedText>
      </View>
      <View style={styles.subcationContainer}>
        <ThemedText 
        style={styles.subcaption} 
        type="subtitle">Свежие зёрна, настоящая арабика и бережная обжарка</ThemedText>
      </View>
      <Button title="Начать"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'flex-end',
    flexGrow: 1,
    padding: 30,
    paddingBottom: 43,
  },
  titleContainer: {
    marginBottom: 82
  },
  title: {
    textAlign: 'center'
  },
  subcationContainer: {
    marginBottom: 24,
  },
  subcaption: {
    textAlign: 'center'
  },
});
