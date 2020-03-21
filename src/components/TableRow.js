import React from 'react'
import { DataTable } from 'react-native-paper'
import countriesList from '../utils/countriesList'
import countries from 'i18n-iso-countries'
countries.registerLocale(require("i18n-iso-countries/langs/pt.json"))

const TableRow = ({ country, cases, deaths, recovered }) => {
    const name = countriesList.find(i => i.name === country) 

    return (
        <DataTable.Row>
            <DataTable.Cell>{ name ? countries.getName(name.code, 'pt') : country }</DataTable.Cell>
            <DataTable.Cell numeric>{ cases }</DataTable.Cell>
            <DataTable.Cell numeric>{ deaths }</DataTable.Cell>
            <DataTable.Cell numeric>{ recovered }</DataTable.Cell>
        </DataTable.Row>
    )
}
export default TableRow