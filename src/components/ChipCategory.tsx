import { View, Text, StyleSheet } from 'react-native';
import { primaryColor } from '../constants/styles';

export default function ChipCategory() {
    return (
        <View style={ styles.container }>
            <Text style={{ color: primaryColor }}>
                All
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: primaryColor,
        borderRadius: 25,
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 10
    }
});
