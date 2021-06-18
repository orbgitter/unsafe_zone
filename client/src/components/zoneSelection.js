import  React, {useContext, useEffect} from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native';
// const socketIOClient  = require('socket.io-client')
// import config from '../../config.json'
// const ENDPOINT = "http://127.0.0.1:4001";
import {ZoneContext} from '../lib/context'
export default function zoneSelection() {
    const zonesObject = useContext(ZoneContext)
    
   const setZoneChecked = (index) => {
    let copyZones = [...zonesObject.zones]
    copyZones[index].checked = !copyZones[index].checked
    zonesObject.setZones(copyZones)
}
   const renderZoneList = ({item, index}) => {
    return (<View style={styles.container}>
        <View style={styles.checkboxContainer}>
            <CheckBox
             value={item.checked}
             style={styles.checkbox}
             onValueChange={() => setZoneChecked(index)}
            />
            <Text style={styles.label}>{item.zone}</Text>
        </View>
    </View>)
}
    return (


    <View>
        <FlatList
        data={zonesObject.zones}
        renderItem={renderZoneList}    
        keyExtractor={(item, index) => index.toString()}
        />
    </View>    );
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