import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavOptions from '../components/NavOptions';


const CoachScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Image
              style={styles.header}
              source={require('../assets/headerf.jpeg')}
            />
          <ScrollView style={styles.scrollView}>
            <Text>


                       
            </Text>
            <Image
              style={styles.image}
              source={require('../assets/CoachNadia.jpeg')}
            />
            <Text>
                    
            </Text>
            <Text style={styles.paragraph}>
              I'm Nadia
              I love working out, it keeps my head clear.
              So I decided to take a big step and become a coach! :)
            </Text>
            <Text>
                    
            </Text>
            <Image
              style={styles.image}
              source={require('../assets/CoachAshry.jpeg')}
            />
            <Text>
                    
            </Text>
            <Text style={styles.paragraph}>
              I'm Ahmed
              If you want to get the summer body in 2 months hit me up  ;)
            </Text>
            <Text>
                    
            </Text>
            <Image
              style={styles.image}
              source={require('../assets/CoachCaren.jpeg')}
            />
            <Text>
                    
            </Text>
            <Text style={styles.paragraph}>
              I'm Caren 
              Since I have been working out everyday for almost 2 years,
              I thought it's time to become a coach :D 
            </Text>
            <Text>


                       
            </Text>
            <Image
              style={styles.image}
              source={require('../assets/Too7a.jpeg')}
            />
            <Text>
                    
            </Text>
            <Text style={styles.paragraph}>
              HEY ENTA!
            </Text>
            <Text style={styles.paragraph}>
              AYWA ENTA!
            </Text>
            <Text style={styles.paragraph}>
              Hatetmaran ma3aya enaharda!
            </Text>
            <Text>


                       
            </Text>
            <Image
              style={styles.image}
              source={require('../assets/Touny.jpeg')}
            />
            <Text>
                    
            </Text>
            <Text style={styles.paragraph}>
              I'm Touny
            </Text>
            <Text style={styles.paragraph}>
              Are you ready for ta7seen?
            </Text>
            <Text>


                       
            </Text>
            <Image
              style={styles.image}
              source={require('../assets/Rash.jpeg')}
            />
            <Text>
                    
            </Text>
            <Text style={styles.paragraph}>
              I'm Rashidy
            </Text>
            <Text style={styles.paragraph}>
              Ana aslan nutritionist ma3rafsh eh el gabny hena
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


export default CoachScreen