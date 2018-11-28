 import React from 'react';
 import Typography from '@material-ui/core/Typography';
 
 
 const UsersError = () =>{
	
	return(
		<div style={{
				margin:'20px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
		}}>
			<Typography style={{
					color:"grey",
					fontWeight:'500'
				}} component="h2" variant="h2" gutterBottom>
			Oops!
			</Typography>
			<Typography style={{
					color:"grey",
					fontWeight: '500'
				}} component="h3" variant="h5" >
			Something went wrong :-(
			</Typography>
		</div>
	
	);
 
 
 
 }

		
		
export default UsersError;