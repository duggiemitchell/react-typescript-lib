import * as React from 'react'
import glamorous from 'glamorous'
import Sizes from '../sizes'
import fonts from '../fonts'

export const Text = glamorous('div', { propsAreCssOverrides: true })<{
    color?
}>({ fontSize: Sizes.XSMALL, ...fonts })
