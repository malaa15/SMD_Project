import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavOptions from '../components/NavOptions';


const AboutScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Image
              style={styles.header}
              source={require('../assets/headerf.jpeg')}
            />
          <ScrollView style={styles.scrollView}>
            <Text style={styles.Textawy}>
              Who Are We
            </Text> 
            <Text style={styles.Textawy}>
                ________________
            </Text>
            <Text style={styles.paragraph}>
              Amry Gym is a well established fitness entity since 2018. 
              We serve a wide variety Of Athletic programs, 
              for different levels, different ages,  and different goals.
              We offer you 2 highly equipped venues around Cairo.
              We believe that a healthy Lifestyle is not, and should 
              not be a phase, instead, a Journey that everyone should 
              go through and have it facilitated for them to embrace.
            </Text>
            <Text style={styles.Textawy}>
                ________________
            </Text>
            <Text style={styles.Textawy}>
              What We Offer
            </Text> 
            <Text style={styles.Textawy}>
                ________________
            </Text>
            <Text style={styles.paragraph}>
                - Personal Training
            </Text>
            <Text style={styles.paragraph}>
                - Customized Nutrition programs
            </Text>
            <Text style={styles.paragraph}>
                - Yoga
            </Text>
            <Text style={styles.paragraph}>
                - MMA
            </Text>
            <Text style={styles.paragraph}> 
                - Open Gym 
            </Text>
            <Text style={styles.paragraph}>
                - and many more! 
            </Text>
            <Text style={styles.Textawy}>
                ________________
            </Text>
            <Text style={styles.Textawy}>
              Why Us
            </Text>
            <Text style={styles.Textawy}>
                ________________
            </Text>
            <Text style={styles.paragraph}>
                We are dedicated to helping our athletes reach their full potential
                No matter what their goals are, we are Committed to their Success, 
                making sure they learn, apply and stay motivated throughout their Journey.
            </Text>
            <Text style={styles.paragraph}>
                Our Team is Very precious to us, As it was chosen carefully 
                and for a reason.
                All of our coaches are Certified, Experienced, 
                And come from a solid Fitness Background. 
                With motivational, inspiring and supportive personalities.
            </Text>
            <Text style={styles.paragraph}>
                Adding to that, Our well established community, 
                where everyone can fit in, and feel like home.
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
        fontSize: 30,
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


export default AboutScreen