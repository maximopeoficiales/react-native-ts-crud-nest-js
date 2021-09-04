// reat Navigation
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './src/screens/RootStackParams';
import Home from './src/screens/Home/Home';
import CreateProduct from './src/screens/CreateProduct/CreateProduct';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faDrumstickBite, faPlus} from '@fortawesome/free-solid-svg-icons';
import EditProduct from './src/screens/EditProduct/EditProduct';
import {DefaultTheme} from 'react-native-paper';
import {Theme} from 'react-native-paper/lib/typescript/types';
import Bar from './src/components/ui/Bar/Bar';
import {name as appName} from './app.json';
import Toast from 'react-native-toast-message';

// es muy buena practica hacer esto ayuda en el autocompletado
const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2',
  },
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTitleAlign: 'center',
        headerTintColor: theme.colors.surface,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={() => ({
          headerLeft: () => <Bar />,
          title: 'Home',
          tabBarIcon: () => <FontAwesomeIcon icon={faDrumstickBite} />,
        })}
      />
      <Tab.Screen
        name="CreateProductTab"
        component={CreateProduct}
        options={{
          title: 'Create Product',
          tabBarIcon: () => <FontAwesomeIcon icon={faPlus} />,
        }}
      />
    </Tab.Navigator>
  );
};
export const App = () => {
  return (
    // Oculto el header principal
    // PaperProvider Segun la documentacion oficial
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="HomeStack" component={HomeTabs} />
            <Stack.Screen name="EditProductStack" component={EditProduct} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

const styles = StyleSheet.create({});

AppRegistry.registerComponent(appName, () => App);

export default App;
