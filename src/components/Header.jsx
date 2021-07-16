import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h2`
    background-color: white;
    display: flex;
    align-items: center;
    height: 50px;
    width: 80%;
    padding: 0 20px;
    gap: 30px;
    margin: 0 auto;
    margin-bottom: 30px;
    border-radius: 5px;
`

const StyledAppName = styled.h3`
    font-weight: 500;
    font-size: 18px;
`

const StyledSearchbar = styled.input`
    flex: 1;
    height: 25px;
`

const Header = ({ searchInput, setSearchInput }) => {
    return (
        <StyledHeader>
            <StyledAppName>Marvellous</StyledAppName>
            <StyledSearchbar
                type='search'
                placeholder='Search a character'
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
            />
        </StyledHeader>
    )
}

export default Header
