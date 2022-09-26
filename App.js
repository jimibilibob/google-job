import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { greyColor, greySecondaryColor, primaryColor } from './src/constants/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={ navTheme } >
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: greySecondaryColor,
          headerShown: false
        })}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Saved Jobs" component={HomeScreen} />
        <Tab.Screen name="Applications" component={HomeScreen} />
        <Tab.Screen name="Message" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const navTheme = {
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    primary: primaryColor,
  },
};