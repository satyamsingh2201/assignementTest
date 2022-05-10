import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { requestGetCoinDetails } from '../../api/Api'
import { DOLLAR } from '../../common/constants'
import HeaderView from '../../common/header'
import ProgressDialog from '../../common/ProgressDialog'
import Colors from '../../styles/Colors'
import Styles from '../../styles/Styles'

const ScreenTwo = (props) => {

    const { data } = props.route.params;
    const [localData, setLocalData] = useState({ loading: false, error: false })

    // useEffect(() => {
    //     setLocalData({ ...localData, coinList: null })
    //     serverRequestForCoinList();
    // }, [])

    // const serverRequestForCoinList = () => {

    //     setLocalData({ ...localData, loading: true })

    //     requestGetCoinDetails()
    //         .then((response) => {
    //             if (response.status) {
    //                 setLocalData({
    //                     ...localData, loading: false, error: false, coinList: response.data
    //                 })
    //             } else {
    //                 setLocalData({
    //                     ...localData, loading: false, error: true, errorMessage: response.message, coinList: null
    //                 })
    //             }
    //         }).
    //         catch(error => {
    //             setLocalData({
    //                 ...localData, loading: false, error: true, errorMessage: error.message, coinList: null
    //             })
    //         });
    // }

    const navigateToBack = () => { props.navigation.goBack() }

    return (
        <View style={Styles.root}>
            <HeaderView title={data.name} navigateToBack={navigateToBack} />
            <ProgressDialog loading={localData.loading} />

            <ScrollView style={{ flexGrow: 1 }}>
                <View style={{ marginHorizontal: 12 }}>

                    <View style={{ alignItems: 'center', marginVertical: 16 }}>
                        <Image source={require('../../images/bitcoin.png')}
                            style={styles.icon} resizeMode='cover' />
                        <Text style={[Styles.textHeading, { fontSize: 20, paddingVertical: 5 }]}>{DOLLAR}{data.price}</Text>
                        <Text style={[Styles.textDesc, { color: Colors.darkGray }]}>+ {DOLLAR}525.50<Text style={{ color: data.incrVal ? Colors.green : Colors.pink }}>  {data.incrVal ? data.incrVal : data.decrVal}%</Text></Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.frequencyView}>
                            <Text style={styles.frequencyText}>Day</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.frequencyView}>
                            <Text style={styles.frequencyText}>Week</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.frequencyView}>
                            <Text style={styles.frequencyText}>Month</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.frequencyView}>
                            <Text style={styles.frequencyText}>Year</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.frequencyView}>
                            <Text style={styles.frequencyText}>All</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>

            <View style={{ justifyContent: 'flex-end', margin: 12 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 12 }}>
                    <View>
                        <Text style={Styles.textHeading}>+ 15.20%</Text>
                        <Text style={[Styles.textDesc, { color: Colors.darkGray }]}>24h change</Text>
                    </View>
                    <View>
                        <Text style={Styles.textHeading}>{DOLLAR}6,532.00</Text>
                        <Text style={[Styles.textDesc, { color: Colors.darkGray }]}>24h highest</Text>
                    </View>
                    <View>
                        <Text style={Styles.textHeading}>{DOLLAR}3,501.20</Text>
                        <Text style={[Styles.textDesc, { color: Colors.darkGray }]}>24h lowest</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.button_buy}>
                        <Text style={styles.buttonText}>BUY</Text>
                    </TouchableOpacity>
                    <View style={{ margin: 5 }} />
                    <TouchableOpacity style={styles.button_sell}>
                        <Text style={styles.buttonText}>SELL</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )


}

const styles = StyleSheet.create({
    frequencyView: {
        flex: 1,
        backgroundColor: Colors.lightGray,
        paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 5
    },
    frequencyText: {
        textAlign: 'center'
    },
    button_buy: {
        flex: 1,
        padding: 12,
        backgroundColor: Colors.green,
        borderRadius: 5
    },
    button_sell: {
        flex: 1,
        padding: 12,
        backgroundColor: Colors.pink,
        borderRadius: 5
    },
    buttonText: {
        ...Styles.title,
        color: Colors.white,
        textAlign: 'center'
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginEnd: 10
    }
})

export default ScreenTwo