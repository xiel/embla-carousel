import React from 'react'
import styled from 'styled-components'
import { breakpoints, LAYERS } from 'consts'
import { useRoutes } from 'hooks'
import { FRAME_SPACING } from 'components/SiteLayout'
import { hiddenAtBreakpointStyles } from 'utils'
import { Logo, HEADER_HEIGHT } from 'components/Header'
import { Links } from 'components/Footer'
import { ThemeToggle } from 'components/Theme'
import { NavigationClose } from './NavigationClose'
import { SubMenu } from './SubMenu'

const MAX_WIDTH = '37.5rem'
const MAX_HEIGHT_COMPACT = `calc(100vh - ${HEADER_HEIGHT})`

const Wrapper = styled.div`
  background-color: var(--background-site);
  position: relative;
  height: 100%;

  ${breakpoints.compact} {
    z-index: ${LAYERS.STEP};
    padding-right: ${FRAME_SPACING};
    padding-left: ${FRAME_SPACING};
    max-width: ${MAX_WIDTH};
    box-shadow: 0.1rem 0 0 0 var(--detail-low-contrast);
  }
`

const ScrollArea = styled.ul`
  overflow: auto;
  position: relative;
  padding-bottom: 2.4rem;
  max-height: 100%;

  ${breakpoints.compact} {
    max-height: ${MAX_HEIGHT_COMPACT};
  }
`

const Header = styled.div`
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${hiddenAtBreakpointStyles};
`

const Buttons = styled.div`
  display: flex;
  align-items: center;

  > button:first-child {
    margin-right: 0.8rem;
  }
`

const MiscMenu = styled(Links)`
  flex-direction: column;
  padding-top: 1.4rem;
`

export const Menu = () => {
  const { hierarchical: routes } = useRoutes()

  return (
    <Wrapper>
      <Header $hidden="desktop">
        <Logo />
        <Buttons>
          <ThemeToggle />
          <NavigationClose />
        </Buttons>
      </Header>
      <ScrollArea>
        {routes.map((route) => (
          <li key={route.id}>
            <SubMenu route={route} />
          </li>
        ))}
        <li>
          <MiscMenu />
        </li>
      </ScrollArea>
    </Wrapper>
  )
}
