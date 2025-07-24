import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';
import React from 'react';

const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean) => {

        if (canGoBack) {
            // navigation.dispatch( StackActions.pop() ) --> Código sugerido
            router.back(); //código que funciona
            return;
        };
        //funciona pero pareciera que es un proceso lento, a veces hay que Pressear varias veces
        navigation.dispatch(DrawerActions.toggleDrawer);
    }

    return (
        <Stack
            screenOptions={{
                // headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerLeft: ({ tintColor, canGoBack }) =>
                    <Ionicons
                        name={canGoBack ? 'arrow-back' : 'menu-outline'}
                        size={20}
                        className='mr-5'
                        onPress={() => onHeaderLeftClick(canGoBack!)} //Ojo! Afirmé la recepción del argumento que podría llegar como undefined
                    />
            }}
        >
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Inicio'
                }}
            />

            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Pantalla de Productos',
                    animation: 'fade_from_bottom'
                }}
            />

            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Pantalla de Ajustes',
                    animation: 'fade'
                }}
            />

            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Pantalla de Perfil'
                }}
            />
        </Stack>
    )
}

export default StackLayout;