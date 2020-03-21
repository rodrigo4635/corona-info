import React from 'react'
import { View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import styles from './styles'

const InfoCard = ({ title, value, icon, color }) => {
    return (
        <View style={[ styles.surface, { borderLeftColor: color }]}>
            <View style={{ flex: 1 }}>
                <Text style={[ styles.cardTitle, { color }]}>{ title }</Text>
                <Text style={ styles.cardValue }>{ value }</Text>
            </View>
            <View style={{ height: '100%'}}>
                <Image source={ icon } style={ styles.image }/>
            </View>
        </View>
    )
}
export default InfoCard