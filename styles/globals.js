import { globalCss } from '../stitches.config'

export const globalStyles = globalCss({
  body: {
    padding: 0,
    margin: 0,
    fontFamily: 'Raleway, sans-serif',
    fontSize: 14,
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  button: {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },

  '*': {
    boxSizing: 'border-box',
  },
})
