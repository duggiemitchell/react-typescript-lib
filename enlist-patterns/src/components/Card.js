import React from 'react'
import glamorous, { Div, Span, A, Img } from 'glamorous'

import redClock from '../images/icon-clock-red.svg'
import greenClock from '../images/icon-clock-green.svg'
import menu from '../images/icon-menu-dots-grey.svg'

const alerts = {
    severe: redClock,
    guarded: greenClock
}

const CardSubtitle = glamorous.span({
  color: "808285",
  fontSize: "12px"
})
const CardFootNote = glamorous.small({
  float:'right',
  color: '#808285',
  fontSize: '10px',
  position: "relative",
  top: "-24px"
})

const CardTitle = glamorous.h6({
    margin: '0'
})

const CardStatus = glamorous.h6(
    {
        textTransform: 'uppercase',
        fontSize: '10px',
        fontWeight: 'bold',
        margin: '7px 0px'
    },
    ({ theme }) => ({
        color: theme
    })
)

const Card = ({ theme, title, subtitle, cardStatus, level, footnote }) => {
    return (
        <Div
            background="#FFFFFF"
            border="1px solid #E6E7E8"
            boxShadow="0 2px 1px 0 rgba(0,0,0,0.08)"
            borderRadius="4px"
            borderLeft={`2px solid ${theme}`}
            cursor="pointer"
            marginBottom="1.6rem"
            padding="1.2rem 2rem"
            position="relative"
            transition="all 0.2s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0s"
            width="310px"
            lineHeight="1em"
            /* HOW TO ADD HOVER STYLES? */
        >
            <Img src={menu} float="right" />
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>
                {subtitle}
            </CardSubtitle>
            <CardStatus 
              theme={theme}>
              {cardStatus}
            </CardStatus>
            
            {level ? (
                <Img
                  float="right"
                  position="relative"
                  top="-24px"
                  src={alerts[level]}
            /> 
            ) : (
                <CardFootNote>{footnote}</CardFootNote>
            )}
        </Div>
    )
}

export default Card
