import { useRef } from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  Animated,
  GestureResponderEvent,
} from 'react-native';
import { colors, sizes } from './tokens';

export function Button({ title, onPress, ...props }: PressableProps & { title: string }) {
  const backgroundColor = useRef(new Animated.Value(0)).current;

  const start = (event: GestureResponderEvent) => {
    Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(backgroundColor, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        onPress?.(event);
      });
    });
  };

  const animationColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.primary, colors.primaryDark],
  });

  return (
    <Pressable {...props} onPress={start}>
      <Animated.View style={[styles.button, { backgroundColor: animationColor }]}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.buttonBorderRadius,
    height: sizes.buttonHeight,
  },
  title: {
    color: colors.white,
    fontSize: sizes.buttonFontSize,
    fontWeight: sizes.buttonFontWeight,
  },
});
