import { View, Text } from 'react-native';
import { Link } from '@/shared/ui/Link';

export default function Cart() {
  return (
    <View>
      <Text>Корзина</Text>
      <Link text="Заказать" href={'/success'} />
    </View>
  );
}
