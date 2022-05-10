import React, { useState } from 'react'
import { View, Text, Modal, ActivityIndicator } from 'react-native'
import Colors from '../styles/Colors';
import Styles from '../styles/Styles';

const ProgressDialog = (props) => {

    const { loading, ...attributes } = props;

    return (
        <Modal visible={loading} transparent={true} onRequestClose={() => { console.log('close modal') }}>
            <View style={[Styles.rootCenter, { backgroundColor: '#00000090' }]}>
                <View style={Styles.progressStyle}>
                    <ActivityIndicator size="large" color={Colors.primaryDark} animating={loading} />
                </View>
            </View>
        </Modal>
    )
}

export default ProgressDialog