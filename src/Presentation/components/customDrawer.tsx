import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from '@react-native-material/core';
import { useUserLocal } from '../hooks/useUserLocal';
import Config from 'react-native-config';

const customDrawer = React.memo((props: any) => {

  const { navigation, usaAvatarUser } = props;
  const { user } = useUserLocal(); 

  return (
    <View style={styles.contain}>
      <DrawerContentScrollView {...props}>
        {
          usaAvatarUser &&         
          <View style={{ paddingTop: 70, paddingLeft: 16 }}>
            <Text variant='h6'>{user?.Nombres} {user?.PrimerApellido} {user?.SegundoApellido}</Text>
            <Text variant='subtitle2'>{user?.Email}</Text>

          </View>
        }

        
      </DrawerContentScrollView>

    </View>
  )
});


const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: Config.MENU_LATERAL_BACKGROUND
        /* backgroundColor: getBackItem() */
    },
    drawerList: {
        flex: 1,
        paddingTop: 10,
    },


});


export default customDrawer;