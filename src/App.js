import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppContext from './store/AppContext'
import GameScreen from './screens/game'

const App = () => {
	const [ appState, setState ] = useState()

	const setAppState = (value) => setState({ ...appState, ...value })

	return (
		<AppContext.Provider value={{ ...appState, setAppState }}>
			<Router>
				<Switch>
					<Route path="/" exact component={GameScreen} />
				</Switch>
			</Router>
		</AppContext.Provider>
	)
}

export default App
