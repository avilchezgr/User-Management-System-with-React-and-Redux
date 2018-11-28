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
import UsersError from './UsersError';
import ModalNewUsuario from './ModalNewUsuario';
import {Link} from 'react-router-dom';
 const ListaUsuarios = (props) =>{
		
		let content;
		
		if(props.usersLoading){ //if the users list is loading
			content = (
				<div>
					<Loading />
				</div>
			);
		}else if(props.usersFailed){ // if the user list has failed
			content = (
					<UsersError/>
				);
			
		}else if(props.users != null){ //if the user list has loaded and is not null
		
			content = (
			  <div className="listaUsuarios">
				<List>
				  {props.users.map(user => (
					<ListItem key={user.id} role={undefined} dense button component={Link} to={`/usuarios/${user.id}`}>
					  
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
				<ModalNewUsuario 
					usersFailed={props.users.usersFailed}
					resetForm={props.resetForm}
					postUser={props.postUser}/>
			  </div>
			);
		}
		
		
		
		
		
		return (
			<div>
			
				<Typography style={{
										color:"grey",
										fontWeight:'500'
									}} component="h3" variant="h4" gutterBottom>
							User List
							</Typography>
					
				{content}
			
			</div>
		);
		
		
}

export default ListaUsuarios;