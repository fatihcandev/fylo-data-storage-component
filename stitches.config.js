import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
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
    mt: value => ({
      marginTop: value,
    }),
    mr: value => ({
      marginRight: value,
    }),
    mb: value => ({
      marginBottom: value,
    }),
    ml: value => ({
      marginLeft: value,
    }),
    mx: value => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: value => ({
      marginTop: value,
      marginBottom: value,
    }),
    pt: value => ({
      paddingTop: value,
    }),
    pr: value => ({
      paddingRight: value,
    }),
    pb: value => ({
      paddingBottom: value,
    }),
    pl: value => ({
      paddingLeft: value,
    }),
    px: value => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: value => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: value => ({
      width: value,
      height: value,
    }),
    linearGradient: value => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
})
