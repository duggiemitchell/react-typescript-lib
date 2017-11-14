import * as React from 'react'
import { Svg, G, Path } from 'glamorous'
import Colors from '../styles/colors'

export default ({ color = Colors.GREEN }: { color?: Colors }) => (
    <Svg
        width="16px"
        height="12px"
        viewBox="0 0 16 12"
        version="1.1"
        xmlns="http://www.w3.org/2000/Svg">
        <G
            id="Web-App"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round">
            <G
                id="Candidates---Filter-View"
                transform="translate(-58.000000, -210.000000)"
                stroke={color}
                strokeWidth="2">
                <G
                    id="Filter-Popover---Filter-View"
                    transform="translate(18.000000, 161.000000)">
                    <G id="View" transform="translate(41.000000, 42.000000)">
                        <G id="Header">
                            <G
                                id="icon-eye-blue"
                                transform="translate(0.000000, 8.000000)">
                                <Path
                                    d="M7,9.9934811 C2,9.9934811 0,5.13165254 0,5.13165254 C0,5.13165254 2,0 7,0 C12,0 14,5.13165254 14,5.13165254 C14,5.13165254 12,9.9934811 7,9.9934811 Z"
                                    id="Stroke-69"
                                />
                                <Path
                                    d="M7,6.99543677 C8.104,6.99543677 9,6.10002086 9,4.99674055 C9,3.89346023 8.104,2.99804433 7,2.99804433 C5.896,2.99804433 5,3.89346023 5,4.99674055 C5,6.10002086 5.896,6.99543677 7,6.99543677 Z"
                                    id="Stroke-70"
                                />
                            </G>
                        </G>
                    </G>
                </G>
            </G>
        </G>
    </Svg>
)
