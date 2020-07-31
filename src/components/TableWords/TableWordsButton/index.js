import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		height: 125,
		width: '100%',
		borderRadius: '0%',
		border: '1px solid rgba(224, 224, 224, 1)',
		cursor:
			'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFklEQVRYR9WXURLDIAhE6/0PbSdOtUpcd1Gnpv1KGpTHBpCE1/cXq+vrMph7dGvXZTtpfW10DCA5jrH1H0Jhs5E0hnZdCR+vb5S8Nn8mQCeS9BdSalYJqMBjAGzq59xAESN7VFVUgV8AZB/dZBR7QTFDCqGquvUBVVoEtgIwpQRzmANSFHgWQKExHdIrPeuMvQNDarXe6nC/AutgV3JW+6bgqQLeV8FekRtgV+ToDKEKnACYKsfZjjkam7a0ZpYTytwmgainpC3HvwBocgKOxqRjehoR9DFKNFYtOwCGYCszobeCbl26N6yyQ6g8X/Wex/rBPsNEV6qAMaJPMynIHQCoSqS9JSMmwef51LflTgCRszU7DvAGiV6mHWfsaVUAAAAASUVORK5CYII=),auto'
	}
})

const TableWordsButton = ({ children, ...props }) => {
	const classes = useStyles()
	return (
		<Button variant="outlined" className={classes.root} {...props}>
			{children}
		</Button>
	)
}

export default TableWordsButton
