import { View, Text } from 'react-native';
import { Link } from '@/shared/ui/Link';
import { useAtom } from 'jotai';
import { profileAtom } from '../../entities/user/model/user.model';

interface Product {
  id: number;
  title: string;
  alias: string;
}

export default function Catalog() {
  const [profile] = useAtom(profileAtom);

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

  function getHref(product: Product) {
    return {
      pathname: '/catalog/[id]',
      params: {
        id: product.alias,
      },
    } as const;
  }

  return (
    <View>
      <Text>Каталог</Text>
      <Link text="Адрес" href={'/address'} />

      {products.map((product) => {
        return (
          <View key={product.id}>
            <Link text={product.title} href={getHref(product)} />
          </View>
        );
      })}
    </View>
  );
}
