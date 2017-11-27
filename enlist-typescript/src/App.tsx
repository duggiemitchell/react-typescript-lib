import * as React from 'react'
import { Header } from './styles/typography/Header'
import { SubHeading } from './styles/typography/SubHeading'
import { Text } from './styles/typography/Text'
import FilterSvg from './icons/FilterSvg'
class App extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <h1>Candidates - Hover</h1>
                <Header fontWeight="bold">
                    <FilterSvg />
                    {`Erica`.toUpperCase()}
                </Header>
                <Header />
                <Text>Erica</Text>
            </div>
        )
    }
}

export default App
