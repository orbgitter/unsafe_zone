import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/navigator';
import { Provider } from 'react-redux';
import {ZoneContext} from './src/lib/context'
import {createThreeButtonAlert} from './src/components/alert'
export default function App() {
  const [zones, setZones] = useState([
    {id: '1', zone: "Ashdod", checked: false},
    {id: '2', zone: "Tel-Aviv", checked: false},
    {id: '3', zone: "Herzelia", checked: false},
    {id: '4', zone: "Beer-Sheva", checked: false},
    {id: '5', zone: "Rishon", checked: false},
])






const [alarmZone, setAlarmZone] = useState([])    //alarm zone now 
  useEffect(() => { 
    for(const zone of zones) {
      if(zone.checked && alarmZone.includes(zone.zone))
         console.log(zone.zone)
         //to save the gps location temporary, so incase later the user will report he didn't make it on time, then pushing the coordinate to the alarmHistory array and presenting it on google maps
         setTimeout(() => createThreeButtonAlert(), 3000)
        //setTimeout(() => console.log('Hello, World!'), 3000)
    }
    const interval = setInterval(() => {
      const cities = [
        "Ashdod",
        "Tel-Aviv",
        "Herzelia",
        "Beer-Sheva",
        "Rishon"
    ]
    setAlarmZone(cities[(Math.floor(Math.random() * 10)) % cities.length])
    }, 10000);
    return () => clearInterval(interval);
  }, [zones, alarmZone]);

  return (
    <SafeAreaProvider>
    <ZoneContext.Provider value={{zones: zones, setZones: setZones}}>
        <View style={styles.container}>
          <Navigation />
        </View>
    </ZoneContext.Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
