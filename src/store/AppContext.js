import React from 'react'

const AppContext = React.createContext({
	user: null,

	setAppState() {}
})

export const useAppContext = () => React.useContext(AppContext)

export default AppContext
