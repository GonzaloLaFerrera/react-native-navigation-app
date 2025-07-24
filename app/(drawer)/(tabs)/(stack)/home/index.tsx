import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../../../components/shared/CustomButton';

const HomeScreen = () => {

    const navigation = useNavigation();

    //Método para abrir el Menú
    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer);
    }


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

                <CustomButton
                    color='alternative'
                    className='mb-2'
                    onPress={onToggleDrawer}
                >Abrir Menú</CustomButton>
                {/* <Link className='mb-5' href={'/products'}>Productos</Link>
                <Link className='mb-5' href={'/profile'}>Perfil</Link>
                <Link className='mb-5' href={'/settings'}>Ajustes</Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;