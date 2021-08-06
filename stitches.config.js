// stitches.config.ts
import { createCss } from '@stitches/react'

export const { styled, getCssString, theme, global } = createCss({
  theme: {
    colors: {
      blue: {
        pale: 'hsl(243, 100%, 93%)',
        grayish: 'hsl(229, 7%, 55%)',
        dark: 'hsl(228, 56%, 26%)',
        veryDark: 'hsl(229, 57%, 11%)',
      },
      gradient: {
        primary: 'hsl(6, 100%, 80%)',
        secondary: 'hsl(335, 100%, 65%)',
      },
    },
  },
  media: {
    sm: '(min-width: 480px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
  utils: {
    mt: config => value => ({
      marginTop: value,
    }),
    mr: config => value => ({
      marginRight: value,
    }),
    mb: config => value => ({
      marginBottom: value,
    }),
    ml: config => value => ({
      marginLeft: value,
    }),
    mx: config => value => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: config => value => ({
      marginTop: value,
      marginBottom: value,
    }),
    size: config => value => ({
      width: value,
      height: value,
    }),
    linearGradient: config => value => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
})
