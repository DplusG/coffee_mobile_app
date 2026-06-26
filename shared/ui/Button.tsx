import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from './tokens';

export function Button({ title, ...props }: PressableProps & { title: string }) {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
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
