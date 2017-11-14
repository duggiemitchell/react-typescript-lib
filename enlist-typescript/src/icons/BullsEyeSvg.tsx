import * as React from 'react'
import { Svg, G } from 'glamorous'
import Colors from '../styles/colors'

export default ({ color = Colors.RED }: { color?: Colors }) => (
    <Svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <G id="Web-App" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <G transform="translate(-83.000000, -404.000000)">
                            <G transform="translate(18.000000, 161.000000)">
                                <G id="View" transform="translate(41.000000, 42.000000)">
                                    <G transform="translate(24.000000, 201.000000)">
                                        <circle stroke={color} stroke-width="2" cx="5" cy="5" r="4"></circle>
                                        <circle fill={color} cx="5" cy="5" r="2"></circle>
                                    </G>
                                </G>
                            </G>
                        </G>
                    </G>
                </SvG>
)