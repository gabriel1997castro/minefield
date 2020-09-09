import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Flag(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.flagPole, props.bigger && styles.flagPoleBigger]} />
      <View style={[styles.flag, props.bigger && styles.flagBigger]} />
      <View style={[styles.base1, props.bigger && styles.base1Bigger]} />
      <View style={[styles.base2, props.bigger && styles.base2Bigger]} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 5,
      marginLeft: 3,
    },
    flagPole: {
      position: 'absolute',
      height: 19,
      width: 3,
      backgroundColor: '#222',
      marginLeft: 9,
    },
    flag: {
      position: 'absolute',
      height: 7,
      width: 8,
      backgroundColor: '#F22',
      marginLeft: 3,
    },
    base1: {
      position: 'absolute',
      height: 3,
      width: 8,
      backgroundColor: '#222',
      marginLeft: 7,
      marginTop: 13,
    },
    base2: {
      position: 'absolute',
      height: 3,
      width: 13,
      backgroundColor: '#222',
      marginLeft: 4,
      marginTop: 16,
    },
    flagPoleBigger: {
      height: 28,
      width: 4,
      marginLeft: 16,
    },
    flagBigger: {
      height: 10,
      width: 14,
      marginLeft: 3,
    },
    base1Bigger: {
      height: 4,
      width: 12,
      marginTop: 20,
      marginLeft: 12,
    },
    base2Bigger: {
      height: 4,
      width: 20,
      marginTop: 24,
      marginLeft: 8,
    }
})
