import * as React from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native';
import zoneSelection from '../components/zoneSelection'
// const socketIOClient  = require('socket.io-client')
// import config from '../../config.json'
// const ENDPOINT = "http://127.0.0.1:4001";
import { createStackNavigator } from '@react-navigation/stack';

export default function zoneSelectionNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator >
        <Stack.Screen name="Zone Selection" component={zoneSelection} />
    </Stack.Navigator>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,

    },
    checkbox: {
        alignSelf: 'center'
    },
    label: {
        margin: 8
    }
})