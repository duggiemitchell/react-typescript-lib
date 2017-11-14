import * as React from 'react'
import { Svg, G, Path } from 'glamorous'
import Colors from '../styles/colors'

export default ({ color = Colors.CERULEAN }: { color?: Colors }) => (
    <Svg
        width="4px"
        height="12px"
        viewBox="0 0 4 12"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <defs />
        <G
            id="Style-Guide-&amp;-Interactions"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd">
            <G id="Global" transform="translate(-105.000000, -1394.000000)">
                <G
                    id="Alert-Styles"
                    transform="translate(79.000000, 1293.000000)">
                    <G id="Infos" transform="translate(1.000000, 82.000000)">
                        <G
                            id="Alert"
                            transform="translate(17.000000, 15.000000)">
                            <G
                                id="icon-info"
                                transform="translate(10.000000, 9.500000) scale(1, -1) translate(-10.000000, -9.500000) translate(8.000000, 4.000000)">
                                <Path
                                    d="M2,4.9934811 L2,0.710560626"
                                    id="Stroke-302"
                                    stroke={color}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    stroke-linejoin="round"
                                />
                                <Path
                                    d="M3.42857143,9.27640156 C3.42857143,10.0658866 2.79,10.7040417 2,10.7040417 C1.21,10.7040417 0.571428571,10.0658866 0.571428571,9.27640156 C0.571428571,8.48691656 1.21,7.84876141 2,7.84876141 C2.79,7.84876141 3.42857143,8.48691656 3.42857143,9.27640156"
                                    id="Fill-303"
                                    fill={color}
                                />
                            </G>
                        </G>
                    </G>
                </G>
            </G>
        </G>
    </Svg>
)
