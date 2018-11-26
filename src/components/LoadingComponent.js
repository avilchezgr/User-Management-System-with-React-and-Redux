import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loading = () => {
	return(
	<div style={{
		display:'flex',
		justifyContent:'center',
		marginTop:'40px',
		marginBottom: '30px'
	}}>
		<CircularProgress disableShrink/>
	</div>
	);
};
export default Loading;