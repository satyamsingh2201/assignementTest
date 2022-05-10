import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from '../styles/Styles'

const EmptyView = ({ message }) => {
    return (
        <View style={[Styles.rootCenter]}>
            <Text>
                {(message != null || message != undefined) ? message : ''}
            </Text>

        </View>
    )
}

export default EmptyView