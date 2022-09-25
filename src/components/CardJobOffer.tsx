import { Text, View, StyleSheet, Image, ScrollView} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { primaryColor, greyColor, greyTextColor, greySecondaryColor } from '../constants/styles';
import JobOffer from '../models/JobOffer';

export default function CardJobOffer(properties: JobOffer) {
    const { title, subtitle, location, payment, hasHorizontalMargin } = properties;
    return (
        <View style={[hasHorizontalMargin ? styles.containerHorizontalMargin : styles.container, { flexDirection: "column" }]}>
            <View style= { styles.header }>
                <View style= {{ flex: 0.7, borderColor: greyColor, borderRadius: 25, borderWidth: 2, marginBottom: 5, padding: 5, alignItems: 'center'}}>
                    <Image source={require('../../assets/google-icon.png')} resizeMode="cover" style={ {height: 50, width: 50} }></Image>
                </View>
                <View style= {{ flex: 3, flexDirection: 'row' }}>
                    <View style= {{ marginLeft: 15, flexDirection: 'column', justifyContent: 'space-around' }}>
                        <Text style= {{ fontSize: 20, fontWeight: 'bold' }}>
                            { title }
                        </Text>
                        <Text style= {{ fontSize: 16, color: greyTextColor }}>
                            { subtitle }
                        </Text>
                    </View>
                </View>
                <FontAwesomeIcon icon={ faBookmark } size={20} style={{ color: primaryColor, flex: 1 }}/>
            </View>
            <View style= { styles.body } >
                <View style= {{ flex: 1 }}/>
                <View style= {{ flex: 3 }}>
                    <View style= {{ flexDirection: 'column' }}>
                        <Text style= {{ fontSize: 16, color: greyTextColor }}>
                        { location }
                        </Text>
                        <Text style= {{ fontSize: 18, color: primaryColor }}>
                            { payment }
                        </Text>
                        <ScrollView horizontal={true}>
                            <Text style={[styles.modality]}>
                                Full time
                            </Text>
                            <Text style={[styles.modality]}>
                                Onsite
                            </Text>
                        </ScrollView>
                        
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
        marginVertical: 10
    },
    containerHorizontalMargin: {
        padding: 20,
        borderColor: greyColor,
        borderRadius: 25,
        borderWidth: 2,
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        borderBottomColor: greyColor,
        borderBottomWidth: 2,
        paddingBottom: 12,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        alignItems: 'center',
        height:50
    },
    modality: {
        borderColor: greySecondaryColor,
        color: greySecondaryColor,
        borderRadius: 8,
        borderWidth: 1,
        padding: 5,
        margin: 5
      },
  });