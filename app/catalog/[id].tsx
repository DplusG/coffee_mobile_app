import { useLocalSearchParams, router } from 'expo-router';
import { View, Text } from 'react-native';
import { Link } from '@/shared/ui/Link';

interface Product {
  id: number;
  title: string;
  alias: string;
}

export default function Product() {
  const products: Product[] = [
    {
      id: 44,
      title: 'Каппучино',
      alias: 'cappuchino',
    },
    {
      id: 45,
      title: 'Американо',
      alias: 'americano',
    },
  ];

  const { id } = useLocalSearchParams();

  const product = products.find((el) => el.alias === id);

  if (!product) {
    router.push('/+not-found');
    return;
  }

  return (
    <View>
      <Text>{product.title}</Text>
      <Link text="В корзину" href={'/cart'} />
    </View>
  );
}
