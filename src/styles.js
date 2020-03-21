import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff'
    },
    appbar: {
        height: 26,
        width: '100%',
    },
    title: {
        fontSize: 35,
        color: '#444',
        marginLeft: 30,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    tabIndicator: {
        backgroundColor: '#6200ee',
        height: 3,
        borderRadius: 100,
        borderLeftColor: '#fff',
        borderLeftWidth: 40,
        borderRightColor: '#fff',
        borderRightWidth: 40
    },
    tab: {
        backgroundColor: '#fff',
        elevation: 0
    }
})