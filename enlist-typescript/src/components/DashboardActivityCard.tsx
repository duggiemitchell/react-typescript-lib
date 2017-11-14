import * as React from 'react'
import glamorous, { Div, Img, Span, Svg, G } from 'glamorous'
import ColoredCard from './ColoredCard'
import Colors from '../styles/colors'

const CaretSvg = ({}) => (
    <Svg
        width="10px"
        height="6px"
        viewBox="0 0 10 6"
        version="1.1"
        transform="rotate(180deg)">
        <title>icon-caret-grey</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <G
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd">
            <G
                id="Filter"
                transform="translate(-1170.000000, -54.000000)"
                fill={Colors.STEEL_GREY}>
                <G id="Focus-Mode">
                    <G transform="translate(959.000000, 46.000000)">
                        <polygon
                            id="icon-caret-grey"
                            points="216 14 211 8 221 8"
                        />
                    </G>
                </G>
            </G>
        </G>
    </Svg>
)

const Header = glamorous.h6({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '12px',
    color: `${Colors.WHITE}`,
    margin: '0px 0px 10px'
})

const SubHeader = glamorous.span({
    color: `${Colors.WHITE}`,
    lineHeight: '1.47'
})
const Footer = ({ footerText }) => (
    <Div marginTop="15px">
        <Div>
            <Div>
                <CaretSvg />
            </Div>
        </Div>
        <Span color={Colors.WHITE}>{footerText}</Span>
    </Div>
)

const DashboardActivityCard = ({
    backgroundImage,
    header,
    subHeader,
    footerText
}) => (
    <ColoredCard backgroundImage={backgroundImage}>
        <Header>{header}</Header>
        <SubHeader>{subHeader}</SubHeader>
        <Footer footerText={footerText} />
    </ColoredCard>
)

export default DashboardActivityCard
