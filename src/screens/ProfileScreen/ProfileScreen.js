import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ProfileScreen = ({navigation}) => {
    const goToHome = () => navigation.navigate("Home", {name: "React-Native"})
  return (
    <View>
      <Text>ProfileScreen</Text>
      <View style={styles.button}>
        <Button title='Перейти на Главную' onPress={goToHome}/>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})