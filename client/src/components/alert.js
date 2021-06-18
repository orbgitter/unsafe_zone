import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import GetLocation from 'react-native-get-location'


var alarmHisroty = [
    { city: 'tel-aviv',  coordinate: [32.078465804086, 34.78669979607648]},
    { city: 'tel-aviv',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'tel-aviv',  coordinate: [32.07967941438362, 34.78676953351047]},
    { city: 'tel-aviv',  coordinate: [32.079960597844675, 34.78651472814306]},
    { city: 'tel-aviv',  coordinate: [32.077927198232786, 34.786117767194845]},
    { city: 'Beer-Sheva',  coordinate: [31.257550238095376, 34.76103957093475]},
    { city: 'Beer-Sheva',  coordinate: [31.257742782254745, 34.762359243847655]},
    { city: 'Beer-Sheva',  coordinate: [31.257898696893143, 34.76388273855962]},
    { city: 'Beer-Sheva',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'Beer-Sheva',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'Beer-Sheva',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'tel-aviv',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'tel-aviv',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'tel-aviv',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'tel-aviv',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'tel-aviv',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'tel-aviv',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'tel-aviv',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'tel-aviv',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'tel-aviv',  coordinate: [32.078811372544244, 34.786696525418236]},
    { city: 'tel-aviv',  coordinate: [32.078811372544244, 34.786696525418236]},
  ];
  

export const createThreeButtonAlert = () => {
    Alert.alert(
    "Alert Title",
    "Did you catch a cover on time ?",
    [
        {
        text: "irrelevant",
        onPress: () => console.log("irrelevant pressed")
        },
        {
        text: "NO",
        onPress: () => console.log("NO Pressed"),
        style: "cancel"
        // alarmHisroty.push();
        },
        { text: "YES", onPress: () => console.log("YES Pressed") }
    ],
    { cancelable: false }
    );
}

GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
})
.then(location => {
    console.log(location);
})
.catch(error => {
    const { code, message } = error;
    console.warn(code, message);
})
