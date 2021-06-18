import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import zoneSelectionNavigation from './zoneSelectionNavigation';
const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
      <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Setting" component={zoneSelectionNavigation}/>
      <Tab.Screen name="Map" component={Map} />    
      </Tab.Navigator>
      </NavigationContainer>
    );
  }

const Stack = createStackNavigator();

