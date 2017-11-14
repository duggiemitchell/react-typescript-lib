import * as React from 'react'
import { Svg, G } from 'glamorous'
import Colors from '../styles/colors'

export default ({ color = Colors.GREEN }: { color?: Colors }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        height="18"
        viewBox="0 0 4 18">
        <G fill={Colors.SILVER_TWO} fillRule="evenodd">
            <circle cx="2" cy="2" r="2" />
            <circle cx="2" cy="9" r="2" />
            <circle cx="2" cy="16" r="2" />
        </G>
    </Svg>
)
