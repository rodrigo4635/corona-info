import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'
import styles from './styles'

const LoadingData = () => (
    <View style={ styles.backgroundLoading }>
        <ActivityIndicator animating/>
        <Text style={{ marginTop: 5 }}>Carregando dados...</Text>
    </View>
)
export default LoadingData