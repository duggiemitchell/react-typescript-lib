import React from 'react'
import glamorous, {Div, Img, Span} from 'glamorous'
import ColoredCard from './ColoredCard'
import caret from '../images/icon-caret-grey.svg'

const Header = glamorous.h6({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '12px',
    color: "#fff",
    margin: "0px 0px 10px"
})

const SubHeader = glamorous.span({
    color: "#fff",
    lineHeight: "1.47"
})
const Footer = ({footerText}) => (
    <Div marginTop="15px">
        <Img 
            transform="rotate(180deg)"
            marginRight="10px"
            src={caret}
        />
        <Span
            color="#fff">
            {footerText}
        </Span>
    </Div>
)

const DashboardActivityCard = ({backgroundImage, header, subHeader, footerText}) => (
    <ColoredCard
        backgroundImage={backgroundImage}>
        <Header>{header}</Header>
        <SubHeader>{subHeader}</SubHeader>
        <Footer footerText={footerText}/>
    </ColoredCard>
)

export default DashboardActivityCard