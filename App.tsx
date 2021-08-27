// reat Navigation
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './src/screens/RootStackParams';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CreateProductScreen from './src/screens/CreateProductScreen/CreateProductScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCoffee,
  faDrumstickBite,
  faHome,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import EditProductScreen from './src/screens/EditProductScreen/EditProductScreen';

// es muy buena practica hacer esto ayuda en el autocompletado
const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title:"Home",
          tabBarIcon: () => <FontAwesomeIcon icon={faDrumstickBite} />,
        }}
      />
      <Tab.Screen
        name="CreateProductTab"
        component={CreateProductScreen}
        options={{
          title:"Create Product",
          tabBarIcon: () => <FontAwesomeIcon icon={faPlus} />,
        }}
      />
    </Tab.Navigator>
  );
};
export const App = () => {
  return (
    // Oculto el header principal
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeStack" component={HomeTabs} />
        <Stack.Screen name="EditProductStack" component={EditProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
