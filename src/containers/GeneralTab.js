import React, { useEffect, useState } from 'react'
import { ScrollView, RefreshControl, Linking, View } from 'react-native'
import styles from './styles'
import { LoadingData, InfoCard } from '../components'
import  images from '../res/images'
import { Text } from 'react-native-paper'
import dayjs from 'dayjs'
import loadData from '../utils/loadData'

const GeneralTab = () => {
    const [data, setData] = useState(null)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        loadData('https://corona.lmao.ninja/all', setData)
    }, [])

    return data ? (
        <>
            <ScrollView contentContainerStyle={ styles.scroll } style={ styles.background } refreshControl={
                <RefreshControl refreshing={ refreshing }
                    onRefresh={ () => { loadData('https://corona.lmao.ninja/all', setData, setRefreshing) }}
                />
            }>
                <InfoCard title='Casos confirmados' value={ data.cases } icon={ images.users } color='#6200ee'/>
                <InfoCard title='Mortes' value={ data.deaths } icon={ images.skull } color='#e74c3c'/>
                <InfoCard title='Recuperados' value={ data.recovered } icon={ images.group } color='#2ecc71'/>
                <Text style={{ textAlign: 'right' }}>Atualizado: { dayjs(data.updated).subtract(3, 'hour').locale('pt-br').format('DD MMM YY - HH:mm:ss') }</Text>
            </ScrollView>
            <View>
                <Text style={{ textAlign: 'center'}}>Criado por</Text>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 14, textDecorationLine: 'underline'}}onPress={ () => { Linking.openURL('https://www.youtube.com/user/De4thAw4it')}}>Death Awaits</Text>
            </View>
        </>
    ) : <LoadingData/>
}
export default GeneralTab