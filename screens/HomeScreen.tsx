import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavOptions from '../components/NavOptions';
import { useNavigation } from '@react-navigation/native';
import WorkoutScreen from './WorkoutScreen';

const HomeScreen = () => {

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
              source={require('../assets/tamrin.png')}
            />
            <Text>
                    
            </Text>
            <Button  
               title="Workout Programs"
               color={'black'}
               onPress= {() => navigation.navigate('Workout')}
            />
            <Text>
                    
            </Text>
            <Image
                style={styles.image}
                source={require('../assets/diet.png')}
            />
            <Text>
                    
            </Text>
            <Button  
                title="Diet plans"
                color={'black'}
                onPress= {() => navigation.navigate('Diet')}
            /> 
            <Text>
            
                    
            </Text>
            <Image
                style={styles.image}
                source={require('../assets/classes.jpg')}
            /> 
            <Button  
                title="Classes"
                color={'black'}
                onPress= {() => navigation.navigate('class')}
            /> 
            <Text>
            
                    
            </Text>
            <Image
                style={styles.image}
                source={require('../assets/subs.jpg')}
            /> 
            <Button  
                title="Subscription plans"
                color={'black'}
                onPress= {() => navigation.navigate('Subs')}
            /> 
            <Text>
            
                    
            </Text>
            <Image
                style={styles.image}
                source={require('../assets/loc.png')}
            />
            <Text>
                    
            </Text>
            
            <Button  
                title="Our Location"
                color={'black'}
                onPress= {() => navigation.navigate('Loc')}
            /> 
            <Text>
                    
            </Text>
            <Image
                style={styles.image}
                source={require('../assets/coach.png')}
            /> 
            <Text>
                    
            </Text>
            <Button  
                title="Our Team"
                color={'black'}
                onPress= {() => navigation.navigate('Coach')}
            /> 
            <Text>
            
                    
            </Text>
            
            
            <Image
                style={styles.image}
                source={require('../assets/FAQ.jpg')}
            />
            <Text>
                    
            </Text>
            
            <Button  
                title="FAQs"
                color={'black'}
                onPress= {() => navigation.navigate('faq')}
            /> 
            <Text>
                    
            </Text>
            <Image
                style={styles.image}
                source={require('../assets/about.png')}
            />
            <Text>
                    
            </Text>
            
            <Button  
                title="About Amry Gym"
                color={'black'}
                onPress= {() => navigation.navigate('about')}
            />  
            
          </ScrollView>
        </SafeAreaView >
      )
    }
    
    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
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


export default HomeScreen