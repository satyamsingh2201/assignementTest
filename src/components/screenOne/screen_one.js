import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { requestGetCoinList } from '../../api/Api'
import { coinList, DOLLAR } from '../../common/constants'
import EmptyView from '../../common/EmptyView'
import HeaderView from '../../common/header'
import ProgressDialog from '../../common/ProgressDialog'
import Colors from '../../styles/Colors'
import Styles from '../../styles/Styles'
import ScreenOneItem from './screen_one_item'

const data = ['', '', '', '']

const ScreenOne = (props) => {

    const [localData, setLocalData] = useState({ loading: false, error: false })

    // useEffect(() => {
    //     setLocalData({ ...localData, coinList: null })
    //     serverRequestForCoinList();
    // }, [])

    // const serverRequestForCoinList = () => {

    //     setLocalData({ ...localData, loading: true })

    //     requestGetCoinList()
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

    const renderData = ({ item, index }) => {
        return <ScreenOneItem
            item={item}
            index={index}
            navigateToDetails={navigateToDetails}
        />
    }

    const navigateToBack = () => {
    }
    const navigateToDetails = (data) => {
        props.navigation.navigate('screenTwo', {data:data})
    }

    const _header_view = () => {
        return (
            <View style={{ alignItems: 'center', marginVertical: 16 }}>
                <Text style={[Styles.textHeading, { fontSize: 20 }]}>{DOLLAR}6,532.00</Text>
                <Text style={[Styles.textDesc, { color: Colors.darkGray, paddingVertical: 5 }]}>Updated 10.05.2022 | 11:31</Text>
            </View>
        )
    }

    return (
        <View style={Styles.root}>
            <HeaderView title='My balance' navigateToBack={navigateToBack} type='root' />
            <ProgressDialog loading={localData.loading} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={coinList}
                renderItem={renderData}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingVertical: 10 }}
                ListHeaderComponent={_header_view}
                ListEmptyComponent={<EmptyView message={localData.errorMessage} />}
            />
        </View>
    )


}

export default ScreenOne