import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CharacterDetails from './components/CharacterDetails'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/character/:characterId'>
                    <CharacterDetails />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
