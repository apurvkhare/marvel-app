import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.h4`
    background-color: black;
    color: white;
    font-style: bold;
    text-align: center;
`

const Footer = () => {
    return (
        <div>
            <StyledFooter>
                &copy; Marvel App
            </StyledFooter>
        </div>
    )
}

export default Footer
