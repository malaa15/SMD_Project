import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavOptions from '../components/NavOptions';


const ClassesScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Image
              style={styles.header}
              source={require('../assets/headerf.jpeg')}
            />
          <ScrollView style={styles.scrollView}>
          <Text style={styles.paragraph}>
              feel free to approach any of our branches to join these classes!
            </Text> 
            <Text>
                
            </Text>
            <Image
              style={styles.image}
              source={require('../assets/mma.jpg')}
            />
            <Text style={styles.Textawy}>
              MMA Classes
            </Text>
            <Image
              style={styles.image}
              source={require('../assets/yoga.jpg')}
            />
            
            <Text style={styles.Textawy}>
              Yoga Classes 
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
        width: 400,
        height: 500,
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
      Textawy: {
        alignItems: 'flex-end',
        fontSize: 50,
      },
      paragraph: {
        alignItems: 'baseline',
        fontSize: 20,
        fontStyle:'italic',
      },
      header:{
        alignItems: 'baseline',
        width: 400,
        height: 30,
        marginTop: 10
      },
    });


export default ClassesScreen