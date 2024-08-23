import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeScreen} from './src/Presentation/views/home/Home';
import { ProfileInfoScreen } from './src/Presentation/views/profile/info/ProfileInfo';
import CustomDrawer from './src/Presentation/components/customDrawer';



export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  ProfileInfoScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        /* initialRouteName="HomeScreen" */
        drawerContent={props => (
          <CustomDrawer {...props} initialRouteName="HomeScreen" usaAvatarUser={true} />
        )}
      >
        <Drawer.Screen name="HomeScreen"  component={HomeScreen} options={{
          headerShown: false,
          title: '',
          drawerItemStyle: { display: 'none' }
          }}  />
        <Drawer.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} />
      </Drawer.Navigator>
{/*       <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        
        <Stack.Screen
          name="ProfileInfoScreen"
          component={ProfileInfoScreen}
        />

      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;

