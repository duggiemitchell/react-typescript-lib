import { position } from 'glamor/utils'
import * as React from 'react'
import glamorous, { Div } from 'glamorous'
import Colors from '../styles/colors'
import Avatar from './Avatar'
import { ProgressBar } from './ProgressBar'

import Card from './Card'

type Props = {
    title
    subtitle
    cardStatus
    type
    steps?
    users?
    level?
    statusColor?
    background?
}

const Footer = glamorous.div({
    paddingLeft: '20px',
    display: 'inline-flex'
})
// TODO: NEED TO CHANGE BACKGROUND COLOR ON AVATAR
export const CandidateCard = ({
    title,
    subtitle,
    cardStatus,
    type,
    users,
    level,
    statusColor,
    background,
    steps
}: Props) => (
    <Card
        type={type}
        title={title}
        subtitle={subtitle}
        cardStatus={cardStatus}
        level={level && level}
        statusColor={statusColor && statusColor}>
        <Div marginLeft="20px">
            <Avatar background={Colors.SEAFOAM_BLUE} user={`BP`} zIndex={1} />
            <Avatar background={Colors.STEEL_GREY} user={`EM`} zIndex={0} />
            <Div position="relative" top="-21px" right="-61px">
                <ProgressBar steps={steps} />
            </Div>
        </Div>
    </Card>
)
