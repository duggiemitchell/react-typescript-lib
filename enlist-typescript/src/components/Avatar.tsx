import * as React from 'react'
import { Div, Img } from 'glamorous'
import { Text } from '../styles/typography/Text'
import Colors from '../styles/colors'
type AvatarProps = {
    background
    user
    zIndex?
    width?
    height?
}
const Avatar = ({ background, user, zIndex, width, height }: AvatarProps) => (
    <Div
        alignItems="center"
        borderRadius="100%"
        background={background}
        color={Colors.WHITE}
        display="inline-flex"
        fontWeight="bold"
        height="20px"
        justifyContent="center"
        marginLeft="-1.3rem"
        padding="0.4rem"
        position="relative"
        width="20px"
        zIndex={zIndex}>
        <Text>{user}</Text>
    </Div>
)

export default Avatar
