import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "-apple-system",
    "SF Pro Text",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [
    "-apple-system", 
    "SF Pro Text", 
    "Helvetica Neue", 
    "Helvetica", 
    "serif"
  ],
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      'p': {
        fontSize: '16px'
      }
    }
  }
})

export default typography