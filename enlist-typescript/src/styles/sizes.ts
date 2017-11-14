const baseSize = 16

const sizeToRem = (size: number) => {
    return `${size / baseSize}rem`
}

export default {
    XSMALL: sizeToRem(10),
    SMALL: sizeToRem(12),
    MEDIUM: sizeToRem(16),
    LARGE: sizeToRem(24),
    XLARGE: sizeToRem(32),
    XXLARGE: sizeToRem(48)
}
