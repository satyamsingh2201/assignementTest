import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { DOLLAR } from '../../common/constants';
import Colors from '../../styles/Colors';
import Styles from '../../styles/Styles';

const ScreenOneItem = (props) => {

    const { item, index, navigateToDetails } = props;
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigateToDetails(item)}
                style={Styles.cardView}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../images/bitcoin.png')}
                        style={styles.icon} resizeMode='cover' />
                    <View >
                        <Text style={Styles.textHeading}>{item.name}</Text>
                        <Text style={[Styles.textDesc, { color: Colors.darkGray }]}>{item.symbol}</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={Styles.textHeading}>{DOLLAR}{item.price}</Text>
                    {item && item.incrVal ?
                        <Text style={[Styles.textDesc, { color: Colors.green }]}>+ {item.incrVal} %</Text>
                        :
                        <Text style={[Styles.textDesc, { color: Colors.pink }]}>- {item.decrVal} %</Text>
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginEnd: 10
    }
})

export default ScreenOneItem