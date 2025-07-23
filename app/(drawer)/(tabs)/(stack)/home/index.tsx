import { Link, router } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../../../components/shared/CustomButton';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>
                <Link href={'/products'} asChild>
                    <CustomButton
                        color='primary'
                        className='mb-2 '
                    >Productos</CustomButton>
                </Link>

                <CustomButton
                    color='secondary'
                    className='mb-2'
                    onPress={() => router.push('/settings')}
                >Ajustes</CustomButton>

                <CustomButton
                    color='alternative'
                    className='mb-2'
                    onPress={() => router.push('/profile')}
                >Perfil</CustomButton>


                <Link href={'/products'} asChild>
                    <CustomButton
                        color='secondary'
                        className='mb-10'
                        variant='text-only'
                    >Productos</CustomButton>
                </Link>
                {/* <Link className='mb-5' href={'/products'}>Productos</Link>
                <Link className='mb-5' href={'/profile'}>Perfil</Link>
                <Link className='mb-5' href={'/settings'}>Ajustes</Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;