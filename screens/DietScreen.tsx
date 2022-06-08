import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavOptions from '../components/NavOptions';
import { useNavigation } from '@react-navigation/native';


const DietScreen = () => {
    
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
          <Image
              style={styles.header}
              source={require('../assets/headerf.jpeg')}
            />
          <ScrollView style={styles.scrollView}>
            <Image
              style={styles.image}
              source={require('../assets/bulk.jpg')}
            />
            <Text>
                    
            </Text>
            <Button  
               title="Bulking"
               color={'black'}
               onPress= {() => navigation.navigate('Bulking')}
            /> 
            <Text>
                    
            </Text>
            <Image
              style={styles.image}
              source={require('../assets/loss.png')}
            />
            <Text>
                    
            </Text>
            <Button  
               title="Weight Loss"
               color={'black'}
               onPress= {() => navigation.navigate('WeightLoss')}
            /> 
            <Text>
                    
            </Text>
          </ScrollView>
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
      image: {
        alignItems: 'center',
        width: 350,
        height: 300,
        resizeMode: 'contain'
      },
      name: {
        alignItems: 'center',
        width: 200,
        height: 200,
        resizeMode: 'contain'
      },
      scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 25
      },
      header:{
        alignItems: 'baseline',
        width: 400,
        height: 30,
        marginTop: 10
      },
    });


export default DietScreen