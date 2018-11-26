import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Loading from './LoadingComponent';
import ModalModifyUser from './ModalModifyUser';
import Typography from '@material-ui/core/Typography';

 const ListaUsuarios = (props) =>{

		
		if(props.usersLoading){ //if the users list is loading
			return (
				<div>
					<Loading />
				</div>
			);
		}else if(props.usersFailed){ // if the user list has failed
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
			
		}else if(props.users != null){ //if the user list has loaded and is not null
		
			return (
			  <div className="listaUsuarios">
				<List>
				  {props.users.map(user => (
					<ListItem key={user.id} role={undefined} dense button>
					  
					  <ListItemText primary={`${user.name}  ${user.lastName}`} />
					  <ListItemSecondaryAction>
						<div style={{display:'flex',flexDirection:'row'}}>
							<ModalModifyUser user={user} modifyUser={props.modifyUser}/>
							<IconButton aria-label="Comments" onClick={() => props.deleteUser(user.id)}>
							  <DeleteIcon />
							</IconButton>
						</div>
					  </ListItemSecondaryAction>
					</ListItem>
				  ))}
				</List>
				
			  </div>
			);
		}
		
}

export default ListaUsuarios;