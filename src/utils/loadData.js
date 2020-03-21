export default function loadData(url, setData, setRefreshing) {
    if (setRefreshing) setRefreshing(true)
    fetch(url)
    .then(res => res.json() )
    .then(json => {
        if (setRefreshing) setRefreshing(false)
        setData(json)
    })
}