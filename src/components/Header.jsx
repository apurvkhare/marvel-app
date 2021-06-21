import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h2`
    background-color: #660000;
    color: white;
    font-style: bold;
    text-align: center;
`

const Header = () => {
    return (
        <div>
            <StyledHeader>
                My MARVEL App
            </StyledHeader>
        </div>
    )
}

export default Header
