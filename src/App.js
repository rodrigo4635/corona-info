import React, { useState } from 'react'
import { View, Dimensions, StatusBar } from 'react-native'
import { Text } from 'react-native-paper'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { GeneralTab, ByCountryTab } from './containers'
import styles from './styles'

const initialLayout = { width: Dimensions.get('window').width }

const renderTabBar = props => (
    <TabBar { ...props } indicatorStyle={ styles.tabIndicator }
        activeColor='#6200ee' inactiveColor='#333' pressColor='#eee'
        style={ styles.tab }
    />
)

const App = () => {
    const [index, setIndex] = useState(0)
    const [routes] = React.useState([
        { key: 'general', title: 'Geral' },
        { key: 'byCountry', title: 'Por país' },
    ])

    const renderScene = SceneMap({
        general: GeneralTab,
        byCountry: ByCountryTab,
    })
    
    return (
        <View style={ styles.background }>
            <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
            <View style={ styles.appbar }/>
            <Text style={ styles.title }>Corona Info</Text>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={ renderScene }
                onIndexChange={ setIndex }
                initialLayout={ initialLayout }
            />
        </View>
    )
}

export default App