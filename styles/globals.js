import { global } from '../stitches.config'

export const globalStyles = global({
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
