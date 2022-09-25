import { View, StyleSheet, Text,ImageBackground } from "react-native";
import { secondaryColor, primaryColor } from '../constants/styles';

export default function CardAnnouncement() {
    return (
        <View style= { styles.container }>
            <View style= {{ flex: 2 }}>
                <Text style={ styles.title }>
                    See how you can find a job quickly!
                </Text>
                <View style= { styles.button }>
                    <Text style= { styles.buttonText }>
                        Read more
                    </Text>
                </View>
            </View>
            <View style= {{ flex: 1 }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: secondaryColor,
        flexDirection: 'row',
        padding: 20,
        margin: 12,
        borderRadius: 25,
        width: 350,
        alignItems: 'flex-start'
    },
    title: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        margin: 10
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 25,
        height: 50,
        width: 125,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: primaryColor,
        fontSize: 18,
        fontWeight: '600',
    }
})