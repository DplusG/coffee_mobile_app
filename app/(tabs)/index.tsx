import { useRef, useEffect } from 'react';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/shared/ui/Button';
import { colors, sizes } from '@/shared/ui/tokens';
import { ImageBackground, StyleSheet, View, Animated } from 'react-native';

export default function HomeScreen() {
  const animationOpacity = useRef(new Animated.Value(0));
  const animationPosition = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationOpacity.current, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    Animated.timing(animationPosition.current, {
      toValue: 60,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [animationOpacity, animationPosition]);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('@/assets/images/main-bg.png')}
        resizeMode="contain"
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.titleContainer}>
          <Animated.View
            style={{
              opacity: animationOpacity.current,
              transform: [{ translateY: animationPosition.current }],
            }}
          >
            <ThemedText style={styles.title} type="title">
              Одно из самых вкусных кофе в городе!
            </ThemedText>
          </Animated.View>
        </View>
        <View style={styles.subcationContainer}>
          <ThemedText style={styles.subcaption} type="subtitle">
            Свежие зёрна, настоящая арабика и бережная обжарка
          </ThemedText>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Начать"></Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.black,
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
    marginBottom: 82,
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
  buttonContainer: {
    paddingHorizontal: 30,
    paddingBottom: 43,
  },
});
