import { position } from 'glamor/utils'
import DashboardActivityCard from './DashboardActivityCard'
import * as React from 'react'
import glamorous, { Div, Span } from 'glamorous'
import ColoredCard from './ColoredCard'
import Colors from '../styles/colors'

// TODO: MISSING STYLES/SVG FOR COMPONENT.  SHOULD I USE FLEXBOX OR SOMETHING FOR POSITIONING ELEMENTS? //
const CardContent = ({ candidateCount }) => (
    <Div>
        <Span
            border={`2px solid ${Colors.WHITE}`}
            borderRadius="50%"
            padding="25px"
            position="relative"
            top="33px"
            fontSize="36px"
            color={Colors.WHITE}>
            {candidateCount}
        </Span>
        <Span color={Colors.WHITE}>Active Candidates</Span>
    </Div>
)
const DashboardSummaryCard = ({ candidateCount }) => (
    <ColoredCard backgroundImage="linear-gradient(298deg, #0088ce, #0073ae), linear-gradient(#0088ce, #0088ce)">
        <CardContent candidateCount={candidateCount} />
    </ColoredCard>
)
export default DashboardSummaryCard
