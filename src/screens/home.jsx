import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Homer</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.button}>
        <Text style={styles.textbutton}>Go to Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
        <Text style={styles.textbutton}>Go to Profile</Text>
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
