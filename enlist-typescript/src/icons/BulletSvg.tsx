import * as React from 'react'
import { Div, Svg, G } from 'glamorous'
import Colors from '../styles/colors'

export default ({ color = Colors.GREEN }: { color?: Colors }) => (
    <Div>
        <Svg
            width="10px"
            height="10px"
            viewBox="0 0 10 10"
            version="1.1"
            xmlns="http://www.w3.org/2000/Svg">
            <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <G transform="translate(-83.000000, -296.000000)">
                    <G transform="translate(18.000000, 161.000000)">
                        <G transform="translate(41.000000, 42.000000)">
                            <G transform="translate(24.000000, 93.000000)">
                                <circle fill={color} cx="5" cy="5" r="5" />
                                <circle
                                    fill={Colors.WHITE}
                                    cx="5"
                                    cy="5"
                                    r="2"
                                />
                            </G>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    </Div>
)
