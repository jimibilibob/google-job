import { Text, View, StyleSheet, Image} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { primaryColor, greyColor, greyTextColor } from './constants/styles';

export default function CardJobOffer() {
    return (
        <View style={[styles.container, { flexDirection: "column" }]}>
            <View style= { styles.header }>
                <View style= {{ flex: 0.7, borderColor: greyColor, borderRadius: 25, borderWidth: 2, marginBottom: 5, padding: 5, alignItems: 'center'}}>
                    <Image source={require('../assets/google-icon.png')} resizeMode="cover" style={ {height: 50, width: 50} }></Image>
                </View>
                <View style= {{ flex: 3, flexDirection: 'row' }}>
                    <View style= {{ marginLeft: 15, flexDirection: 'column', justifyContent: 'space-around' }}>
                        <Text style= {{ fontSize: 20, fontWeight: 'bold' }}>
                            UI/UX Designer
                        </Text>
                        <Text style= {{ fontSize: 16, color: greyTextColor }}>
                            Google LLC
                        </Text>
                    </View>
                </View>
                <FontAwesomeIcon icon={ faBookmark } size={20} style={{ color: primaryColor, flex: 1 }}/>
            </View>
            <View style= { styles.body } >
                <View style= {{ flex: 1 }}/>
                <View style= {{ flex: 3 }}>
                    <View style= {{ flexDirection: 'column' }}>
                        <Text>
                        California, United States
                        </Text>
                        <Text>
                            $10,000 - $25,000 / Month
                        </Text>
                        <Text>
                            Full time Onsite
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderColor: greyColor,
      borderRadius: 25,
      borderWidth: 2,
      width: 350,
      justifyContent: 'flex-end'
    },
    header: {
        flexDirection: 'row',
        borderBottomColor: greyColor,
        borderBottomWidth: 2,
        marginBottom: 30,
        backgroundColor: primaryColor
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: primaryColor,
        alignItems: 'center',
        height:50
    }
  });