import { Redirect } from 'expo-router';
import "../global.css";


const App = () => {
    // return <Redirect href={'/home'} />
    // return <Redirect href={'/tabs'} />
    // return <Redirect href={'/drawer'} />
    return <Redirect href={'/home'} />
    /* return (
        <SafeAreaView>
            <View className='mt-6 mx-5'>
                <Text className='text-3xl font-work-black '>Hello World! 😀</Text>
                <Text className='text-3xl text-primary font-work-black '>Hello World! 😀</Text>
                <Text className='text-3xl text-secondary-200 font-work-medium'>Hello World! 😀</Text>
                <Text className='text-3xl text-secondary-100'>Hello World! 😀</Text>
                <Text className='text-3xl font-work-light text-alternative'>Hello World! 😀</Text>

                <Link href={'/products'}>
                    Productos
                </Link>
            </View>
        </SafeAreaView>
    ) */
}

export default App;