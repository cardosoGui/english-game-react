import React from 'react'
import SectionMain from '../../components/SectionMain'
import AppLayout from '../../components/AppLayout'
import TableWords from '../../components/TableWords'

const GameScreen = () => {
	return (
		<AppLayout>
			<SectionMain>
				<TableWords />
			</SectionMain>
		</AppLayout>
	)
}

export default GameScreen
