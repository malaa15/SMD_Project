import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'



const NavOptions = () => {
  return (
    <FlatList
      //data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
  button: {
    backgroundColor: "#000000",
    padding: 17,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
export default NavOptions