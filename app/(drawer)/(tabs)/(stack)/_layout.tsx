import { Stack } from 'expo-router';
import React from 'react';

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                // headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                }
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