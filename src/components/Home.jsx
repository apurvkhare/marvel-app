import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CharacterList from './CharacterList'
import './Home.css'

const Home = () => {
    return (
        <div className="container">
         
                <Header />
                <CharacterList />
                <Footer />
             {/*  <CharacterList />
                <Footer /> 
             */}
        </div>
    )
}

export default Home
