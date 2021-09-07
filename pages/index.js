import Head from 'next/head'

import { Icon } from 'components'
import { controlPanelButtons } from 'constants/home'

import { styled } from 'stitches.config'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fylo Data Storage</title>
      </Head>
      <Container>
        <InnerContainer>
          <ControlPanel>
            <Icon.Logo />
            <ControlPanelButtons>
              {controlPanelButtons.map(({ icon }, idx) => (
                <ControlPanelButton key={idx}>{icon}</ControlPanelButton>
              ))}
            </ControlPanelButtons>
          </ControlPanel>
          <QuotaSection>
            <QuotaAlert>
              You&apos;ve used <strong>815 GB</strong> of your storage
            </QuotaAlert>
            <QuotaUsedContainer>
              <QuotaUsedBarBg>
                <QuotaUsedBar />
              </QuotaUsedBarBg>
              <QuotaMinMax>
                <QuotaNumber>0 GB</QuotaNumber>
                <QuotaNumber>1000 GB</QuotaNumber>
              </QuotaMinMax>
            </QuotaUsedContainer>
            <QuotaLeft>
              <QuotaLeftNumber>185</QuotaLeftNumber>
              <QuotaLeftText>GB LEFT</QuotaLeftText>
            </QuotaLeft>
          </QuotaSection>
        </InnerContainer>
      </Container>
    </>
  )
}

const Container = styled('div', {
  display: 'flex',
  height: '100vh',
  background:
    '$veryDarkBlue url("/images/bg-mobile.png") no-repeat bottom/cover',

  '@md': {
    background:
      '$veryDarkBlue url("/images/bg-desktop.png") no-repeat bottom/contain',
  },
})

const InnerContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 900,
  width: '100%',
  height: 'fit-content',
  margin: 'auto',

  '@lgMax': {
    px: 24,
  },

  '@md': {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
})

const ControlPanel = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: 40,
  pr: 130,
  backgroundColor: '$darkBlue',
  borderRadius: 10,
  borderTopRightRadius: 100,
  mr: 32,

  '@mdMax': {
    mb: 16,
    mr: 0,
  },
})

const ControlPanelButtons = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, max-content)',
  gridTemplateRows: 'auto',
  columnGap: 16,
  mt: 40,
})

const ControlPanelButton = styled('button', {
  size: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$veryDarkBlue',
  borderRadius: 10,
})

const QuotaSection = styled('div', {
  padding: 40,
  backgroundColor: '$darkBlue',
  color: 'white',
  borderRadius: 10,
  position: 'relative',
  flex: 1,

  '@mdMax': {
    pb: 70,
  },
})

const QuotaAlert = styled('div', {
  color: '$paleBlue',
  textAlign: 'center',

  '@md': {
    textAlign: 'left',
  },
})

const QuotaUsedContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const QuotaUsedBarBg = styled('div', {
  height: 20,
  padding: 3,
  mt: 16,
  mb: 8,
  backgroundColor: '$veryDarkBlue',
  borderRadius: 20,
})

const QuotaUsedBar = styled('div', {
  width: '81.5%',
  height: '100%',
  linearGradient: 'to right, $gradientPrimary, $gradientSecondary',
  borderRadius: 20,
  position: 'relative',

  '&::after': {
    content: '',
    size: 10,
    borderRadius: '50%',
    backgroundColor: 'white',
    position: 'absolute',
    right: 2,
    top: 2,
  },
})

const QuotaMinMax = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

const QuotaNumber = styled('span', {
  color: '$paleBlue',
})

const QuotaLeft = styled('div', {
  width: 190,
  height: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: 10,
  position: 'absolute',

  '@lgMax': {
    bottom: -45,
    left: '50%',
    transform: 'translateX(-50%)',
  },

  '@lg': {
    top: -50,
    right: 40,
  },
})

const QuotaLeftNumber = styled('span', {
  fontSize: 40,
  fontWeight: 700,
  color: '$veryDarkBlue',
})

const QuotaLeftText = styled('span', {
  color: '$grayishBlue',
  fontWeight: 700,
  ml: 12,
})
