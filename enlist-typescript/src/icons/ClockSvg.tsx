import * as React from 'react'
import { Svg, G, Path } from 'glamorous'
import Colors from '../styles/colors'

export default ({ color = Colors.GREEN }: { color?: Colors }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16">
        <G
            fill="none"
            fillRule="evenodd"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2">
            <Path d="M15 7.995a6.998 6.998 0 0 1-7 6.996c-3.866 0-7-3.132-7-6.996A6.998 6.998 0 0 1 8 1c3.866 0 7 3.132 7 6.995zM8 4.997v2.998M10 9.994L8 7.995" />
        </G>
    </Svg>
)
