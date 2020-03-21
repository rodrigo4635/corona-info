import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import styles from './styles'
import { LoadingData, TableRow } from '../components'
import loadData from '../utils/loadData'
import { getComparator, stableSort } from '../utils/sortFunctions'
import { DataTable } from 'react-native-paper'

const header = [
    { label: 'País', key: 'country'},
    { label: 'Casos', key: 'cases', numeric: true },
    { label: 'Mortes', key: 'deaths', numeric: true},
    { label: 'Recuper.', key: 'recovered', numeric: true},
]

const ByCountryTab = () => {
    const [data, setData] = useState(null)
    const [order, setOrder] = useState('ascending')
    const [orderBy, setOrderBy] = useState('country')
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        loadData('https://corona.lmao.ninja/countries', setData)
    }, [])

    function handleRequestSort (key) {
        if (key === orderBy) setOrder(order === 'ascending' ? 'descending' : 'ascending')
        setOrderBy(key)
    }
    return data ? (
        <DataTable style={{ flex: 1, padding: 20 }}>
            <DataTable.Header>
                {
                    header.map( item => (
                        <DataTable.Title key={ item.key } numeric={ item.numeric }
                            sortDirection={ orderBy === item.key ? order : false }
                            onPress={ () => { handleRequestSort(item.key) }}
                        >
                            { item.label }
                        </DataTable.Title>)
                    )
                }
            </DataTable.Header>
            <FlatList style={ styles.background }
                onRefresh={ () => { loadData('https://corona.lmao.ninja/countries', setData, setRefreshing) }}
                refreshing={ refreshing } data={ stableSort(data, getComparator(order, orderBy)) }
                renderItem={({ item }) => <TableRow { ...item } />}
                keyExtractor={ item => item.country } initialNumToRender={ 40 }
            />
        </DataTable>
    ) : <LoadingData/>
}
export default ByCountryTab