import { View, StyleSheet, Text } from 'react-native';
import { primaryColor } from '../constants/styles';
import Header from '../models/Header';

export default function SectionHeader(properties: Header) {
    const { leftText, rightText } = properties;
    return (
        <View style= { styles.container }>
            <Text style= { styles.leftText }>
                { leftText }
            </Text>
            <Text style= { styles.rightText }>
                { rightText }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '96%',
        marginVertical: 10
    },
    leftText: {
        fontSize: 20,
        fontWeight: '900'
    },
    rightText: {
        color: primaryColor,
        fontSize: 16
    }
});