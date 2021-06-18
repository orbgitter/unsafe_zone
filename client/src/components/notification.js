import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Alert } from "react-native";
import * as Notificatinos from 'expo-notifications';


const registerForPushNotfication = async() => {
    const { status } = await Notificatinos.getPermissionsAsync();
    let finalStatus;
    if (status !== 'granted') {
        const { status: askStatus } = await Notificatinos.requestPermissionsAsync();
        finalStatus = askStatus;
       }
    else {
      finalStatus = status;
    }
    if (finalStatus === 'granted') {
       const token = await Notificatinos.getExpoPushTokenAsync()
       const token = data.data;
       console.log({token});
    } else {
        console.error('No permissions for push notifications'); 
    }
};

// class App1 extends React.Component {
//     componentDidMount() {
//         this.notificationListener = this.Notifications.addNotificationReceivedListener();
//     }

//     componentWillUnmount() {
//         Notificatinos.removeNotificationSubscription(this.notificationListener);
//     }
// }


export default function App() {
    const [notification, setNotification] = useState()
    const notificationListener = useRef()
    const responseListener = useRef()
    useEffect(() => {
        registerForPushNotfication()
        
        notificationListener.current = Notificatinos.addNotificationReceivedListener(notification => {
            setNotification(notification)
        })
        responseListener.current = Notificatinos.addNotificationResponseReceivedListener(Response => {
            console.log( { response } );
        })
        return () => {
            Notificatinos.removeNotificationSubscription(notificationListener.current);
            Notificatinos.removeNotificationSubscription(responseListener.current);
        }
    }, []) //leaving empty so it work only at the first time
    //}, [input]) //the input is something we're depended on for this Effect to work, can be left empty if nothing

    return(
    <View style={syles.container}>
        {notification ? (
            <View>
                <Text>{notification.request.conent.title}</Text>
                <Text>{notification.request.conent.body}</Text>
                <Text>{JSON.stringify(notification.request.conent.data)}</Text>
            </View>
        ) : (
            <Text> No notificatino at the moment </Text>
        )}
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});