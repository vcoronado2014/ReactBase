import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, KeyboardAvoidingView, Platform, ScrollView, ToastAndroid } from 'react-native';
import {TextInput} from 'react-native-paper'
import { Button, Icon, Text } from '@react-native-material/core';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
// view model
import useViewModel from './ViewModel';
import Config from 'react-native-config';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

export const HomeScreen = ({navigation, route}:Props) => {

    const { userName, userPassword, onChange, login, errorMessage, user, isLoading } = useViewModel();

    // const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        if (errorMessage !== ''){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])

    useEffect(() => {
        if (user?.Id !== null && user?.Id !== undefined){
            // navigation.replace('ProfileInfoScreen');
            navigation.navigate('ProfileInfoScreen');
        }
    }, [user])
    

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <Image
                        style={styles.imageBackGround}
                        source={require('../../../../assets/icon.png')}
                    />

                    <View style={styles.form}>
                        <Text variant='h5' style={{ paddingBottom: 16 }}>Login</Text>
                        <TextInput
                            style={styles.textfield}
                            id="user"
                            placeholder="Usuario"
                            label="Usuario"
                            mode='outlined'
                            value={userName}
                            onChangeText={text => onChange('userName', text)}
                        />


                        <TextInput
                            onChangeText={text => onChange('userPassword', text)}
                            secureTextEntry={true}
                            keyboardType='default'
                            style={styles.textfield}
                            id="password"
                            placeholder="Contraseña"
                            label="Password"
                            mode='outlined'
                            value={userPassword} />
                            <Button 
                                title='Ingresar'
                                /* leading={<Ionicons name="play-circle-outline" size={24} color="white" />} */
                                loading={isLoading}
                                onPress={()=>{
                                    login()
                                }}
                            />

                    </View>


                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Config.LOGIN_CONTAINER_BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textfield: {
        width: '100%'
    },
    form: {
        width: '100%',
        /* height: '40%', */
        backgroundColor: Config.LOGIN_FORM_BACKGROUND,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
        paddingBottom: 40,
    },
    imageBackGround: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '20%',
        resizeMode: 'center'
    }
});
