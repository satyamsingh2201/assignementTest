import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from './Colors'

const Styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.white
    },
    cardView: {
        backgroundColor: Colors.white,
        marginBottom: 8,
        shadowColor: Colors.black,
        shadowOpacity: 0.5,
        shadowOffset: { height: 5 },
        elevation: 4,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 12,
        padding: 10
    },
    textHeading: {
        fontSize: 16,
        fontWeight:'bold'

    },
    textDesc: {
        fontSize: 12,
        fontWeight:'bold'
    },
    progressStyle: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        alignItems: "center"
    },
  
})

export default Styles