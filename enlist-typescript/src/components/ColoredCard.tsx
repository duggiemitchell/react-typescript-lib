import * as React from 'react'
import glamorous, { Div, Img } from 'glamorous'
import MenuSvg from '../icons/MenuSvg'
import Colors from '../styles/colors'

const ColoredCard = ({ backgroundImage, children }) => {
    return (
        <Div
            width="310px"
            height="164px"
            borderRadius="4px"
            padding="15px"
            color={Colors.WHITE}
            lineHeight="1em"
            marginBottom="1.6em"
            backgroundImage={backgroundImage}>
            <Div float="right">
                <MenuSvg />
            </Div>

            {children}
        </Div>
    )
}

export default ColoredCard
