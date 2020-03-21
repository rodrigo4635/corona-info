import { StyleSheet } from "react-native"

export default StyleSheet.create({
    backgroundLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    surface: {
        marginVertical: 10,
        borderRightColor: '#eee',
        borderBottomColor: '#eee',
        borderTopColor: '#eee',
        borderWidth: 1,
        borderLeftWidth: 4,
        borderRadius: 8,
        padding: 15,
        paddingLeft: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    cardValue: {
        fontSize: 37,
        color: '#444'
    },
    image: {
        width: 50,
        height: 50
    }
})