import * as React from 'react'
import glamorous from 'glamorous'
import Sizes from '../sizes'
import fonts from '../fonts'
import Colors from '../colors'

export const SubHeading = glamorous('div', { propsAreCssOverrides: true })<{
    fontWeight?
    icon?
}>({
    color: `${Colors.STEEL_GREY}`,
    fontSize: Sizes.XSMALL,
    ...fonts
})
