import React from 'react'
import 'nes.css/css/nes.min.css'
import {
	TableContainer,
	Paper,
	makeStyles,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	ButtonGroup
} from '@material-ui/core'
import Title from '../../Title'
import TableWordsButton from '../TableWordsButton'
import UIfx from 'uifx'
import beepWav from '../../../sounds/smb_stomp.wav'

const beep = new UIfx(beepWav)

const useStyles = makeStyles({
	table: {
		minWidth: 650
	},
	tableRow: { transform: 'rotate(-35deg)', width: 150, height: 5, textAlign: 'center', alignItems: 'center' },
	whiteSpace: { width: 1 },
	tbHeader: { width: 204 }
})

const onClickButton = () => {
	return beep.play()
}

const TableWordsWrapper = () => {
	const classes = useStyles()
	const createData = (name, calories, fat, carbs, protein) => {
		return { name, calories, fat, carbs, protein }
	}

	const rows = [
		createData('Pergunte', 159, 6.0, 24, 4.0),
		createData('Afirme', 237, 9.0, 37, 4.3),
		createData('Negue', 262, 16.0, 24, 6.0)
	]

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className={classes.whiteSpace}> &nbsp; </TableCell>
						<TableCell align="center" className={classes.tbHeader}>
							<Title size="medium" fontWeight="800">
								DO * DOES
							</Title>
						</TableCell>
						<TableCell align="center" className={classes.tbHeader}>
							<Title size="medium" fontWeight="800">
								DID
							</Title>
						</TableCell>
						<TableCell align="center" className={classes.tbHeader}>
							<Title size="medium" fontWeight="800">
								WILL
							</Title>
						</TableCell>
						<TableCell align="center" className={classes.tbHeader}>
							<Title size="medium" fontWeight="800">
								WOULD
							</Title>
						</TableCell>
						<TableCell align="center" className={classes.tbHeader}>
							<Title size="medium" fontWeight="800">
								HAVE * HAS
							</Title>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell component="th" scope="row">
							<Title className={classes.tableRow} size="medium" fontWeight="800">
								PERGUNTE
							</Title>
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component="th" scope="row">
							<Title className={classes.tableRow} size="medium" fontWeight="800">
								AFIRME
							</Title>
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component="th" scope="row">
							<Title className={classes.tableRow} size="medium" fontWeight="800">
								NEGUE
							</Title>
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
						<TableCell align="center" onClick={onClickButton}>
							<TableWordsButton />
						</TableCell>
					</TableRow>
					{/* {rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="center" onClick={onClickButton} >{row.calories}</TableCell>
							<TableCell align="center" onClick={onClickButton} >{row.fat}</TableCell>
							<TableCell align="center" onClick={onClickButton} >{row.carbs}</TableCell>
							<TableCell align="center" onClick={onClickButton} >{row.protein}</TableCell>
						</TableRow>
					))} */}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default TableWordsWrapper
