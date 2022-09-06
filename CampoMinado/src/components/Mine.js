import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Mine() {
 return (
   <View style={styles.container}>
        <View style={styles.coreMine}/>
        <View style={styles.line}/>
        <View style={[styles.line, {transform: [ {rotate: "45deg"} ]} ]} />
        <View style={[styles.line, {transform: [ {rotate: "90deg"} ]} ]} />
        <View style={[styles.line, {transform: [ {rotate: "135deg"} ]} ]} />
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    coreMine: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    line: {
        position: "absolute",
        width: 3,
        height: 20,
        borderRadius: 3,
        backgroundColor: "black"
    }
})