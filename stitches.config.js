// stitches.config.ts
import { createCss } from '@stitches/react'

export const { styled, getCssString, theme, global } = createCss({
  theme: {
    colors: {
      paleBlue: 'hsl(243, 100%, 93%)',
      grayishBlue: 'hsl(229, 7%, 55%)',
      darkBlue: 'hsl(228, 56%, 26%)',
      veryDarkBlue: 'hsl(229, 57%, 11%)',
      gradientPrimary: 'hsl(6, 100%, 80%)',
      gradientSecondary: 'hsl(335, 100%, 65%)',
    },
  },
  media: {
    sm: '(min-width: 480px)',
    md: '(min-width: 768px)',
    mdMax: '(max-width: 767px)',
    lg: '(min-width: 1024px)',
    lgMax: '(max-width: 1023px)',
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
    pt: config => value => ({
      paddingTop: value,
    }),
    pr: config => value => ({
      paddingRight: value,
    }),
    pb: config => value => ({
      paddingBottom: value,
    }),
    pl: config => value => ({
      paddingLeft: value,
    }),
    px: config => value => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: config => value => ({
      paddingTop: value,
      paddingBottom: value,
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
