import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import LoginScreen from './screens/LoginScreen';
import BulkingScreen from './screens/BulkingScreen';
import DietScreen from './screens/DietScreen';
import CoachScreen from './screens/CoachScreen';
import WeightLossScreen from './screens/WeightLossScreen';
import MapScreen from './screens/MapScreen'
import SubScreen from './screens/SubScreen';
import ClassesScreen from './screens/ClassesScreen';
import FAQScreen from './screens/FAQScreen';
import AboutScreen from './screens/AboutScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{
          headerShown: false,  
        }} 
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
      <Stack.Screen 
        name="Bulking" 
        component={BulkingScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
      <Stack.Screen 
        name="Coach" 
        component={CoachScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
      <Stack.Screen 
        name="Diet" 
        component={DietScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
      
      <Stack.Screen 
        name="WeightLoss" 
        component={WeightLossScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
      <Stack.Screen 
        name="Workout" 
        component={WorkoutScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
      <Stack.Screen 
        name="Loc" 
        component={MapScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
      <Stack.Screen 
        name="Subs" 
        component={SubScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
      <Stack.Screen 
        name="class" 
        component={ClassesScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
      <Stack.Screen 
        name="faq" 
        component={FAQScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
      <Stack.Screen 
        name="about" 
        component={AboutScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;