import { View, Text } from 'react-native';
import { Link } from '@/shared/ui/Link';

export default () => {
  return (
    <View>
      <Text>Не найдено</Text>
      <Link href={'/'} text={'На главную'} />
    </View>
  );
};
