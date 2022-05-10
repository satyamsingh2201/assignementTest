import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../styles/Colors'

const HeaderView = (props) => {

    return (
        <View style={{
            flexDirection: 'row', alignItems: 'center', padding: 10, paddingHorizontal: 12
        }} >
            {props.type !== 'root' &&
                <TouchableOpacity activeOpacity={.5} onPress={() => { props.navigateToBack() }}>
                    <Ionicons name='md-arrow-back' size={25} />
                </TouchableOpacity>
            }
            <Text style={{
                flex: 1,
                fontSize: 16, fontWeight: 'bold', textAlign: 'center',
            }}>{props.title}</Text>

            <TouchableOpacity activeOpacity={.5}
                style={{ alignItems: 'flex-end' }}>
                <Ionicons name='notifications' size={25} color={Colors.gray} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderView