import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavOptions from '../components/NavOptions';
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {
    
    const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Image
          style={styles.name}
          source={require('../assets/amry.png')}
        />
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
        <Button  
               title="LET'S GO!"
               color={'black'}
               onPress= {() => navigation.navigate('Home')}
        />
        <NavOptions />
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'flex-end',
    width: 200,
    height: 400,
    resizeMode: 'contain'    
  },
  name: {
    alignItems: 'center',
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  header:{
    alignItems: 'baseline',
    width: 400,
    height: 30,
    marginTop: 40
  },
});

export default LoginScreen
