import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import styles from './styles'

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

