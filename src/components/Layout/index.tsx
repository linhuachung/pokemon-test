import React, { FC, ReactNode, Ref } from 'react'
import styled from 'styled-components'

const LayoutStyled = styled.div`
    max-width: 1600px;
    margin: auto;
`

interface ILayoutProps {
   children: ReactNode;
   innerRef?: Ref<HTMLDivElement>;
}

const Layout: FC<ILayoutProps> = ({ children, innerRef }) => {
   return (
      <LayoutStyled ref={innerRef}>
         {/* <div>
        <Navbar />
      </div> */}
         {children}
      </LayoutStyled>
   )
}

export default Layout
