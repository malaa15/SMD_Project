import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavOptions from '../components/NavOptions';
import { useNavigation } from '@react-navigation/native';


const WorkoutScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
          <Image
              style={styles.header}
              source={require('../assets/headerf.jpeg')}
            />
          <ScrollView style={styles.scrollView}>
            <Text
              style={styles.Textawy}>
                Standard Workout Plan
            </Text>
            <Image
              style={styles.image}
              source={require('../assets/Workoutplan.jpg')}
            />
            <Text>
                    
            </Text>
                            
            <Button  
              title="Join us if you want personalized workout plans!"
              color={'red'}
              onPress= {() => navigation.navigate('Subs')}
            /> 
            
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
        fontFamily: 'Times New Roman'
      },
      header:{
        alignItems: 'baseline',
        width: 400,
        height: 30,
        marginTop: 10
      },
    });


export default WorkoutScreen