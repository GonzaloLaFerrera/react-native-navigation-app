import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const ProductsScreen = () => {

    const { id } = useLocalSearchParams();

    const product = products.find((prod) => prod.id === id);

    if (!product) {
        return <Redirect href={'/'} />
    }

    return (
        <View className='px-5 mt-10'>
            <Text className='font-work-black text-2xl'>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text className='font-work-black'>${product.price}-.</Text>
        </View>
    )
}

export default ProductsScreen;