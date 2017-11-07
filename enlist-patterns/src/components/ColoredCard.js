import React from 'react'
import glamorous, {Div, Img} from 'glamorous'
import menu from '../images/icon-menu-dots-white.svg'


const ColoredCard = ({backgroundImage, children}) => {
    return (
        <Div
            width='310px'
            height='164px'
            borderRadius='4px'
            padding="15px"
            color="#fff"
            lineHeight="1em"
            marginBottom="1.6em"
            backgroundImage={backgroundImage}
        >
            <Img 
                src={menu}
                float="right" />
            
            {children}
        </Div>
    )
}

export default ColoredCard