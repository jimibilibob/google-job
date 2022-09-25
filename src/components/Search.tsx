import { StyleSheet, TextInput, View  } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { greyColor, greySecondaryColor, primaryColor } from '../constants/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

export default function Search({ searchPhrase = '', setSearchPhrase = 's', setCLicked = true}) {
    return (
        <View style={styles.container}>
            <View style={ styles.searchBar } >
                <Feather
                    name='search'
                    size={20}
                    color= { greySecondaryColor }
                />
                <TextInput
                    style={ styles.input }
                    placeholder='Search for a job or company'
                />
                <FontAwesomeIcon icon={ faSliders } size={20} style= {{ color: primaryColor }}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      margin: 15,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      width: '95%'
    },
    searchBar: {
      padding: 10,
      flexDirection: 'row',
      width: '100%',
      backgroundColor: greyColor,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    input: {
      fontSize: 16,
      marginLeft: 10,
      width: '75%'
    },
  });