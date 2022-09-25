import { View, Image, Text, StyleSheet } from 'react-native';
import { greyColor, greySecondaryColor } from '../constants/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

export default function CardHeader() {
    return (
        <View style= { styles.container }>
            <View style= {{ flex: 1, ...styles.avatarContainer }}>
                <Image source={require('../../assets/profile.png')} resizeMode="center" style={ styles.avatar }></Image>
            </View>
            <View style= {{ flex: 5, paddingLeft: 15, paddingBottom: 10, justifyContent: 'space-between' }}>
                <Text style={ styles.message }>
                    Good Morning 👋
                </Text>
                <Text style={ styles.name }>
                    Andrew Ainsley
                </Text>
            </View>
            <View style= {styles.rightButton}>
                <FontAwesomeIcon icon={ faBell } size={25}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5
    },
    avatarContainer: {
        borderRadius: 25,
        borderWidth: 0,
        marginBottom: 5,
        alignItems: 'center'
    },
    avatar: {
        height: 50,
        width: 50
    },
    rightButton: {
        borderColor: greyColor,
        borderRadius: 35,
        borderWidth: 2,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height:50
    },
    message: {
        color: greySecondaryColor,
        fontSize: 16
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18
    }
});