import { View, Text } from 'react-native';
import { Link } from '@/shared/ui/Link';

export default function SuccessPage() {
  return (
    <View>
      <Text>Заказ оформлен!</Text>
      <Link href={'/'} text={'На главную'} />
    </View>
  );
}
