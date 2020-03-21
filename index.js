import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#6200ee',
    },
}

export default function Main() {
    return (
        <PaperProvider theme={ theme }>
            <App />
        </PaperProvider>
    )
}
  

AppRegistry.registerComponent(appName, () => App)
