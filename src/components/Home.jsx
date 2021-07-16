import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CharacterList from './CharacterList'
import './Home.css'

const Home = () => {
    const [searchInput, setSearchInput] = React.useState('')
    return (
        <div className='container'>
            <Header searchInput={searchInput} setSearchInput={setSearchInput} />
            <CharacterList searchInput={searchInput}/>
            <Footer />
        </div>
    )
}

export default Home
