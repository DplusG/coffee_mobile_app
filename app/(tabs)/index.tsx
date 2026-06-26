import { ThemedText } from '@/components/themed-text';
import { Button } from '@/shared/ui/Button';
import { colors, sizes } from '@/shared/ui/tokens';
import { ImageBackground, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('@/assets/images/main-bg.png')}
        resizeMode="contain"
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.titleContainer}>
          <ThemedText style={styles.title} type="title">
            Одно из самых вкусных кофе в городе!
          </ThemedText>
        </View>
        <View style={styles.subcationContainer}>
          <ThemedText style={styles.subcaption} type="subtitle">
            Свежие зёрна, настоящая арабика и бережная обжарка
          </ThemedText>
        </View>
        <Button style={styles.button} title="Начать"></Button>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    flexGrow: 1,
  },
  imageContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  image: {
    top: 0,
    alignSelf: 'center',
  },
  titleContainer: {
    marginBottom: 8,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
  },
  subcationContainer: {
    marginBottom: 24,
  },
  subcaption: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: sizes.textFontSize,
    paddingHorizontal: 30,
  },
  button: {
    padding: 30,
    paddingBottom: 43,
  },
});
