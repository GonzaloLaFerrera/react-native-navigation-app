import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
    children: string;
    color?: 'primary' | 'secondary' | 'alternative';
    variant?: 'contained' | 'text-only';
    className?: string;
}

const CustomButton = ({ children, color = 'primary', variant, className, onPress, onLongPress }: Props) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        alternative: 'bg-alternative'
    }[color];

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        alternative: 'text-alternative'
    }[color];

    if (variant === 'text-only') {
        return (
            <Pressable
                className={`p-3 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
            </Pressable>
        )
    }

    return (
        <Pressable
            className={`p-3 rounded-md ${btnColor} active:opacity-80 ${className}`}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text className='text-white text-center font-work-medium'>{children}</Text>
        </Pressable>
    )
}

export default CustomButton;