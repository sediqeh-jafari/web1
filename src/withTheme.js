export default function withTheme(className, theme) {
    return [className, `${className}--${theme}`].join(' ')
}