import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { getSizeFont } from '../../utils/getSizeFont'
import { useAppContext } from '../../store/AppContext'

const useStyles = makeStyles({
	root: {
		fontSize: (theme) => theme.fontSize,
		color: (theme) => theme.color,
		fontWeight: (theme) => theme.fontWeight,
		textAlign: (theme) => theme.align,
		textTransform: (theme) => theme.capitalize,
		fontFamily: 'Press Start 2P',
		padding: '5px 0'
	}
})

const Title = ({
	size,
	align,
	capitalize,
	type = 'regular',
	variant,
	color = '#282828',
	fontWeight,
	children,
	...props
}) => {
	const { colorSchema } = useAppContext()
	const weight = { bold: '600', regular: '400' }
	fontWeight = fontWeight ? fontWeight : weight[type]
	color = variant ? colorSchema[variant] : color
	capitalize = capitalize ? 'capitalize' : null
	const classes = useStyles({ fontSize: getSizeFont(size), fontWeight, align, capitalize, color })

	return (
		<Typography className={classes.root}>
			<p style={{ margin: 0 }} {...props}>
				{children}
			</p>
		</Typography>
	)
}

export default Title
