import React, { Component } from 'react'
import { ThemeProvider } from 'glamorous'
import Card from './components/Card'
import DashboardActivityCard from './components/DashboardActivityCard'
import DashboardSummaryCard from './components/DashboardSummaryCard'

class App extends Component {
    state = {
        theme: {
            candidate: '#0088ce',
            jobPosting: '#61c3d7',
            warning: '#d3232a',
            none: null
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Dashboard Cards</h1>
                <Card
                    theme={this.state.theme.candidate}
                    title="Erica Mitchell"
                    subtitle="Application Developer"
                    cardStatus="hire her now"
                    level="guarded"
                />
                <Card
                    theme={this.state.theme.jobPosting}
                    title="Frontend Developer"
                    subtitle="Charlotte"
                    cardStatus="0 Candidiates"
                    footnote="Posted 2 weeks ago"
                />
                <Card
                    theme={this.state.theme.warning}
                    title="Bob Grantt"
                    subtitle="Business Dev"
                    cardStatus="30 days on Enlist"
                    level="severe"
                />
                <h1>Dashboard Activity Cards</h1>
                <DashboardActivityCard 
                    backgroundImage="linear-gradient(298deg, #61c3d7, #098ba6), linear-gradient(#61c3d7, #61c3d7)"
                    header="Candidate Activity"
                    subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    footerText="4:12">
                </DashboardActivityCard>
                <DashboardActivityCard 
                    backgroundImage="linear-gradient(118deg, #be8000, #e7aa2b), linear-gradient(#e7aa2b, #e7aa2b)"
                    header="Task Activity"
                    subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    footerText="4:12">
                </DashboardActivityCard>
                <DashboardActivityCard 
                    backgroundImage=" linear-gradient(118deg, #3f8b1d, #67b445), linear-gradient(#67b445, #67b445)"
                    header="Hires & Backurners"
                    subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    footerText="4:12">
                </DashboardActivityCard>
                <DashboardSummaryCard 
                    candidateCount="25"/>
            </div>
        )
    }
}

export default App
