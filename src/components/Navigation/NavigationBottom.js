import React from 'react'
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core'
import { RiHomeSmileLine } from 'react-icons/ri'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
	root: {
		background: '#eee',
		position: 'fixed',
		bottom: 0,
		width: '100%',
		borderTop: 'solid 1px #0000001a'
	}
})

const NavigationBottom = () => {
	const history = useHistory()
	const url = history.location.pathname
	const classes = useStyles()

	const handleNavigation = (screen) => {
		history.push(screen)
	}

	const menus = [
		{ screen: '/home', label: 'Início', icon: <RiHomeSmileLine size={25} color="#3366FF" /> }
		// { screen: 'transactions', label: 'Transações', icon: <RiExchangeDollarLine size={25} color="#3366FF" /> },
		// {
		// 	screen: 'income',
		// 	label: 'Despesas',
		// 	icon: <BsFillPlusCircleFill size={25} color="#3366FF" />
		// },
		// { screen: 'budget', label: 'Carteira', icon: <MdTimeline size={25} color="#3366FF" /> }
		// { screen: 'settings', label: 'Objetivos', icon: <GiTriangleTarget size={25} color="#3366FF" /> }
	]

	return (
		<BottomNavigation className={classes.root}>
			{menus.map(({ label, screen, icon }) => (
				<BottomNavigationAction
					key={label}
					onClick={(e) => handleNavigation(screen)}
					showLabel={url === screen}
					label={label}
					color="#282828"
					icon={icon}
				/>
			))}
		</BottomNavigation>
	)
}

export default NavigationBottom
