import React from 'react'
import { View, Text } from 'react-native'
import ProfileInfoViewModel from './ViewModel'
import { Button } from '@react-native-material/core';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';

interface Props extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'>{};

export const ProfileInfoScreen = ({navigation, route}:Props) => {
const { removeSesion } = ProfileInfoViewModel();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <Text>ProfileInfoScreen</Text>
        <Button
        title='cerrar sesión'
        onPress={()=>{
          removeSesion();
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  )
}
