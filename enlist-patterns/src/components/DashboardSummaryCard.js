import { position } from 'glamor/utils';
import DashboardActivityCard from './DashboardActivityCard'
import React from 'react'
import glamorous, { Div, Span } from 'glamorous'
import ColoredCard from './ColoredCard'

const CardContent = ({ candidateCount }) => (
    <Div 
        >
        <Span 
            border="2px solid #fff" 
            borderRadius="50%" 
            padding="25px"
            position="relative"
            top="33px"
            fontSize="36px"
            color="#fff">
            {candidateCount}
        </Span>
        <Span color="#fff">Active Candidates</Span>
    </Div>
)
const DashboardSummaryCard = ({ candidateCount }) => (
    <ColoredCard backgroundImage="linear-gradient(298deg, #0088ce, #0073ae), linear-gradient(#0088ce, #0088ce)">
        <CardContent candidateCount={candidateCount} />
    </ColoredCard>
)
export default DashboardSummaryCard
