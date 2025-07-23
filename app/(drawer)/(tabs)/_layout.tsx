import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
// import { Text, View } from 'react-native';

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'indigo',
                headerShown: false,
                // tabBarActiveBackgroundColor: 'grey'
            }}
        >
            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Stack Screen',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="menu-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home Screen',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Favorites Screen',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
                }}
            />
        </Tabs>
    );
}

export default TabsLayout;