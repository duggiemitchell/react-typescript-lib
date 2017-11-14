import * as React from 'react'
import glamorous, { Div } from 'glamorous'
import { Text } from '../styles/typography/Text'
import Colors from '../styles/colors'
// TODO: FIX UI ISSUE WHEN IN CARD AND PERCENTAGE ALIGNMENT
type Props = {
    steps
}
export const ProgressBar = ({ steps }: Props) => {
    const completedSteps = steps.filter(step => step.completed).length
    const allSteps = steps.length
    const getPercentCompleted = Number(allSteps / completedSteps)
    const completedPercent = getPercentCompleted / allSteps * 100

    return (
        <Div
            fontSize="13px"
            fontweight="bold"
            maxWidth="100%"
            marginLeft="-1.3rem"
            display="flex"
            alignItems="center"
            padding="0">
            <Div
                background={Colors.SILVER}
                borderRadius="10rem"
                marginRight="0.5rem"
                width="70%">
                <Div
                    transitionDuration="300ms"
                    width={completedPercent}
                    background={Colors.CERULEAN}
                    borderRadius="10rem"
                    height="0.6rem"
                    minWidth="2rem"
                    transition="width .1s ease,background-color .1s ease"
                />
            </Div>
            <Text> {`${completedSteps}/${allSteps}`}</Text>
        </Div>
    )
}
