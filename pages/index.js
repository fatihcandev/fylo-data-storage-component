import Head from 'next/head'

import { Icon } from 'components'
import { controlPanelButtons } from 'constants/home'

import * as Styles from 'styles/pages/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fylo Data Storage</title>
      </Head>
      <Styles.Container>
        <Styles.InnerContainer>
          <Styles.ControlPanel>
            <Icon.Logo />
            <Styles.ControlPanelButtons>
              {controlPanelButtons.map(({ icon }, idx) => (
                <Styles.ControlPanelButton key={idx}>
                  {icon}
                </Styles.ControlPanelButton>
              ))}
            </Styles.ControlPanelButtons>
          </Styles.ControlPanel>
          <Styles.QuotaSection>
            <Styles.QuotaAlert>
              You&apos;ve used <strong>815 GB</strong> of your storage
            </Styles.QuotaAlert>
            <Styles.QuotaUsedContainer>
              <Styles.QuotaUsedBarBg>
                <Styles.QuotaUsedBar />
              </Styles.QuotaUsedBarBg>
              <Styles.QuotaMinMax>
                <Styles.QuotaNumber>0 GB</Styles.QuotaNumber>
                <Styles.QuotaNumber>1000 GB</Styles.QuotaNumber>
              </Styles.QuotaMinMax>
            </Styles.QuotaUsedContainer>
            <Styles.QuotaLeft>
              <Styles.QuotaLeftNumber>185</Styles.QuotaLeftNumber>
              <Styles.QuotaLeftText>GB LEFT</Styles.QuotaLeftText>
            </Styles.QuotaLeft>
          </Styles.QuotaSection>
        </Styles.InnerContainer>
      </Styles.Container>
    </>
  )
}
