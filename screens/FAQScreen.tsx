import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavOptions from '../components/NavOptions';


const FAQScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Image
              style={styles.header}
              source={require('../assets/headerf.jpeg')}
            />
          <ScrollView style={styles.scrollView}>
          <Text style={styles.Textawy}>
              Frequently Asked Questions
            </Text> 
            <Text style={styles.Textawy}>
                ________________
            </Text>
            <Text style={styles.paragraph}>
              - How do i register?
            </Text>
            <Text style={styles.paragraph}>
                To register, All you need to do is
                visit the venue you will be training 
                at and our team at the front-desk 
                will take on from there.    
            </Text>  
            <Text style={styles.Textawy}>
                ________________
            </Text>
            <Text style={styles.paragraph}>
                - Can I try first before i register?
            </Text>
            <Text style={styles.paragraph}>
                Sure you can! Everyone's always welcome for 
                a free trial. Come in and bring a friend.
            </Text>
            <Text style={styles.Textawy}>
                ________________
            </Text>
            <Text style={styles.paragraph}>
                - Is your team first aid trained?
            </Text>
            <Text style={styles.paragraph}>
                Most of our coaches are first and 
                CPR trained and are there to help 
                in the unlikely case of an injury. 
                You can also find first aid kits in each facility
            </Text>
            <Text style={styles.Textawy}>
                ________________
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


export default FAQScreen