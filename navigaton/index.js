import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeNavigator from './HomeNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpense from '../screens/ManageExpense';
const Stack = createNativeStackNavigator();
const AppNavigationContainer = () => {
  return (
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen 
    name='Home'
    component={HomeNavigator}
    options={{
        headerShown:false
    }}
  />
    <Stack.Screen 
    name='Manage'
    component={ManageExpense}

  />
  </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigationContainer
