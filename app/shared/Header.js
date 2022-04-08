import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image 
        source={require('../../assets/profile.jpg')}
        resizeMode='contain'
        style={{height: 50}}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 80,//Todo Delete
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
    }
})

export default Header;