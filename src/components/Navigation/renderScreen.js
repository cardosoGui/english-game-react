import React from './node_modules/react'
import HomePage from '../pages/home'
import TransactionsPage from '../pages/TransactionsPage'

const renderScreen = (screen) => {
	switch (screen) {
		case 'home':
			return <HomePage />
		case 'transactions':
			return <TransactionsPage />
		case 'expenses':
			return <HomePage />

		default:
			return 'appsd'
	}
}

export default renderScreen
