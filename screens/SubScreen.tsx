import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavOptions from '../components/NavOptions';
import { useNavigation } from '@react-navigation/native';



const SubScreen = () => {
    
    const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
        <Image
            style={styles.header}
            source={require('../assets/headerf.jpeg')}
        />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.Textawy}>
                 
                    
                SUBSCRIPTION PLANS
                   
                      
        </Text>
        <Image
          style={styles.image}
          source={require('../assets/1month.jpg')}
        />
        <Text style={styles.paragraph}>
            - 24/7 Access to our branches
        </Text>
        <Text style={styles.paragraph}>
            - 1 free PT session
        </Text>
        <Text style={styles.paragraph}>
            - 1 nutrition plan 
        </Text>
        <Text style={styles.paragraph}>
            - ONLY FOR 800 EGP
        </Text>
        <Text style={styles.Textawy}>
            ________________
        </Text>
        
        <Image
            style={styles.image}
            source={require('../assets/3month.jpg')}
        />
        <Text style={styles.paragraph}>
            - 24/7 Access to our branches
        </Text>
        <Text style={styles.paragraph}>
            - 6 free PT sessions
        </Text>
        <Text style={styles.paragraph}>
            - 2 nutrition plans
        </Text>
        <Text style={styles.paragraph}>
            - ONLY FOR 2000 EGP 
        </Text>
        <Text style={styles.Textawy}>
            ________________
        </Text>
        
        <Image
            style={styles.image}
            source={require('../assets/6months.jpg')}
        />
        <Text style={styles.paragraph}>
            - 24/7 Access to our branches
        </Text>
        <Text style={styles.paragraph}>
            - 15 free PT sessions
        </Text>
        <Text style={styles.paragraph}>
            - 5 nutrition plans
        </Text>
        <Text style={styles.paragraph}>
            - ONLY FOR 3500 EGP 
        </Text>
        <Text style={styles.Textawy}>
            ________________
        </Text>
        
        <Image
            style={styles.image}
            source={require('../assets/12month.jpg')}
        />
        <Text style={styles.paragraph}>
            - 24/7 Access to our branches
        </Text>
        <Text style={styles.paragraph}>
            - 30 free PT sessions
        </Text>
        <Text style={styles.paragraph}>
            - 12 nutrition plans
        </Text>
        <Text style={styles.paragraph}>
            - ONLY FOR 6000 EGP 
        </Text>
        <NavOptions />
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
  paragraph: {
    alignItems: 'baseline',
    fontSize: 20,
    fontStyle:'italic',
  },
  Textawy: {
    alignItems: 'flex-end',
    fontSize: 50,
  },
  image: {
    alignItems: 'center',
    width: 350,
    height: 300,
    resizeMode: 'contain'
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 40
  },
});

export default SubScreen