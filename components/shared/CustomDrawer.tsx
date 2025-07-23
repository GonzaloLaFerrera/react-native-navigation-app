import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props}>
            <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
                <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
                    <Text className='text-primary font-work-black text-3xl'>GLF</Text>
                </View>
            </View>

            {/* Drawer Items */}
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

//haciendo un spred de las props DrawerContentComponentProps podemos visibilizar y hacer uso de toda la data del Drawer y DrawerScreen's

export default CustomDrawer;