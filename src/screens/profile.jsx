import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export default function Profile() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
<TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Text style={styles.textbutton}>Go Back to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  textbutton: {
    color: 'white'
  }
});