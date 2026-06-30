import { LinkProps, Link as DefaultLink } from 'expo-router';
import { Text, StyleSheet } from 'react-native';

export function Link({ text, ...props }: LinkProps & { text: string }) {
  return (
    <DefaultLink style={styles.link} {...props}>
      <Text style={styles.link}>{text}</Text>
    </DefaultLink>
  );
}

const styles = StyleSheet.create({
  link: {
    fontFamily: 'Inter-Regular',
  },
});
