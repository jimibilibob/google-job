import { View, StyleSheet, Text } from 'react-native';
import { primaryColor } from '../constants/styles';

export default function SectionHeader() {
    return (
        <View style= { styles.container }>
            <Text style= { styles.leftText }>
                Recommendation
            </Text>
            <Text style= { styles.rightText }>
                See All
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