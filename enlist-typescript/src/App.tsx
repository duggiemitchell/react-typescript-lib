import * as React from 'react'
import Colors from './styles/colors'
import Card from './components/Card'
import DashboardActivityCard from './components/DashboardActivityCard'
import DashboardSummaryCard from './components/DashboardSummaryCard'
import { CandidateCard } from './components/CandidateCard'
import Avatar from './components/Avatar'
import { ProgressBar } from './components/ProgressBar'
import { Switch } from './components/Switch'
import EyeSvg from './icons/EyeSvg'
import BulletSvg from './icons/BulletSvg'
import BullsEyeSvg from './icons/BullsEyeSvg'
import AlertSvg from './icons/AlertSvg'
import FilterSvg from './icons/FilterSvg'
import { Progress } from 'glamorous'

class App extends React.Component {
    state = {
        theme: {
            cerulean: Colors.CERULEAN,
            seafoamBlue: Colors.SEAFOAM_BLUE,
            lipstick: Colors.RED,
            none: null
        },
        type: {
            dashboard: 'dashboard',
            candidate: 'candidate',
            other: 'other'
        },
        users: ['EM', 'BP'],
        steps: [
            { step: 'Go to the gym', completed: false },
            { step: 'Do yoga', completed: false },
            { step: 'Buy groceries', completed: true },
            { step: 'Get tire fixed', completed: true }
        ]
    }

    render() {
        return (
            <div>
                {/* <h1>Dashboard Cards</h1>
                <Card
                    statusColor={this.state.theme.cerulean}
                    type={this.state.type.dashboard}
                    title="Erica Mitchell"
                    subtitle="Application Developer"
                    cardStatus="hire her now"
                    level="guarded"
                />
                <Card
                    statusColor={this.state.theme.seafoamBlue}
                    type={this.state.type.dashboard}
                    title="Frontend Developer"
                    subtitle="Charlotte"
                    cardStatus="0 Candidiates"
                    footnote="Posted 2 weeks ago"
                /> */}
                <Card
                    statusColor={this.state.theme.lipstick}
                    type={this.state.type.dashboard}
                    title="Bob Grantt"
                    subtitle="Business Dev"
                    cardStatus="30 days on Enlist"
                    level="severe"
                />

                <h1>Candidate Cards</h1>

                <CandidateCard
                    statusColor={this.state.theme.seafoamBlue}
                    type={this.state.type.candidate}
                    title="Kenneth Pendley"
                    subtitle="App Dev, DEV"
                    cardStatus="Charlotte"
                    level="severe"
                    users={this.state.users}
                    steps={this.state.steps}
                />
                {/* <Switch label="Hello" />
                <h1>Icons</h1>
                <div
                    style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        display: 'flex',
                        flex: '1'
                    }}>
                    <EyeSvg />
                    <BulletSvg />
                    <BullsEyeSvg />
                    <AlertSvg />
                    <FilterSvg />
                </div> */}
                <ProgressBar steps={this.state.steps} />
            </div>
        )
    }
}

export default App
