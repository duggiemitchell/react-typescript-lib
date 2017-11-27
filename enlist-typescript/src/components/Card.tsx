import * as React from 'react'
import glamorous, { Div, Span, A, Img } from 'glamorous'

import ClockSvg from '../icons/ClockSvg'
import MenuSvg from '../icons/MenuSvg'
import Colors from '../styles/colors'
import { Header } from '../styles/typography/Header'
import { SubHeading } from '../styles/typography/SubHeading'
import { Text } from '../styles/typography/Text'

type CardProps = {
    title
    subtitle
    cardStatus
    type
    level?
    statusColor?
    footnote?
    children?
}

const alerts = {
    severe: Colors.RED,
    guarded: Colors.GREEN
}

const Card = ({
    statusColor,
    title,
    subtitle,
    cardStatus,
    type,
    level,
    footnote,
    children
}: CardProps) => {
    const CardStatus = glamorous(Text, { propsAreCssOverrides: true })({
        color: `${statusColor}`,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    })
    return (
        <Div
            background={Colors.WHITE}
            border={`1px solid ${Colors.SILVER_TWO}`}
            boxShadow="0 2px 1px 0 rgba(0,0,0,0.08)"
            borderRadius="4px"
            borderLeft={`2px solid ${statusColor}`}
            cursor="pointer"
            marginBottom="1.6rem"
            padding="1.2rem 2rem"
            position="relative"
            transition="all 0.2s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0s"
            width="310px"
            maxHeight="81px"
            lineHeight="1em">
            <Div float="right">
                <MenuSvg />
            </Div>
            <Header fontWeight="bold">{title}</Header>
            <SubHeading>{subtitle}</SubHeading>
            <Div display="flex" marginTop="2%" justifyContent="space-between">
                <CardStatus statusColor={statusColor}>{cardStatus}</CardStatus>
                {level ? (
                    <Div
                        style={
                            type === 'candidate'
                                ? { position: 'relative', top: '27px' }
                                : null
                        }>
                        <ClockSvg color={alerts[level]} />
                    </Div>
                ) : (
                    <Text color={Colors.STEEL_GREY}>{footnote}</Text>
                )}
            </Div>
            {children && children}
        </Div>
    )
}

export default Card
