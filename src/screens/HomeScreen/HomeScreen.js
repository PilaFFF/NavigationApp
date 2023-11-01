import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const HomeScreen = ({navigation, route}) => {
    console.log(route)
    const goToProfile = () => navigation.navigate("Profile")
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>HomeScreen</Text>
      <View style={styles.button}>
        <Button title='Перейти на профиль' onPress={goToProfile}/>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'green',
    },
    button: {
        width: 200,
        marginTop: 50,
    }
})