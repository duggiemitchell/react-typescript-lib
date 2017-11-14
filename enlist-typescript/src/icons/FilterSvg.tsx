import * as React from 'react'
import { Svg, G } from 'glamorous'
import Colors from '../styles/colors'

export default ({ color = Colors.CERULEAN }: { color?: Colors }) => (
    <Svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <G
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round">
            <G
                id="Filter-v2"
                transform="translate(-144.000000, -48.000000)"
                strokeWidth="2"
                stroke={color}>
                <G id="Filter">
                    <G
                        id="Focus-Mode"
                        transform="translate(41.000000, 46.000000)">
                        <G
                            id="Filter-View"
                            transform="translate(104.000000, 0.000000)">
                            <polygon
                                id="icon-filter-blue"
                                points="0 3 5 9.99543677 5 14.9921773 9 16.9908735 9 9.99543677 14 3"
                            />
                        </G>
                    </G>
                </G>
            </G>
        </G>
    </Svg>
)
