import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.h4`
    background-color: black;
    color: white;
    font-style: bold;
    text-align: center;
    margin: 0;
    margin-top: 30px;
    height: 50px;
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
