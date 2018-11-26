import React, { Component } from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ListaUsuarios from './ListaUsuarios.js';
import {connect} from 'react-redux';
import {postUser, fetchUsers, modifyUser, deleteUser, resetForm} from '../redux/ActionCreators';
import ModalNewUsuario from './ModalNewUsuario';

  const mapStateToProps = state =>{
		return {
			users: state.users
		}
	}
  
const mapDispatchToProps = (dispatch) => ({
	deleteUser:(id) => dispatch(deleteUser(id)),
	modifyUser:(id,name, lastName, age, email) => dispatch(modifyUser(id,name, lastName, age, email)),
	postUser:(name, lastName, age, email) => dispatch(postUser(name, lastName, age, email)),
	fetchUsers: () => {dispatch(fetchUsers())},
	resetForm: (formName) => dispatch(resetForm(formName))
});



class Main extends Component {
		
	componentDidMount(){
		this.props.fetchUsers();
	}
	
	constructor(props){
		super(props);
		this.state = {isModalOpen: false};
	}


  render() {
	 

    return (
      <div >
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Test React
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{
            width: '60%',
            margin: '0 auto',
            marginTop: 50,
          }}>
          <Paper>
            <div style={{
              minHeight: 200,
              padding: 25
            }}>
            <Typography variant="title" color="inherit" style={{display: 'inline'}}>Listado de usuarios</Typography>
   
				<div >
					
					<ListaUsuarios
						users = {this.props.users.users}
						usersLoading = {this.props.users.isLoading}
						usersFailed =  {this.props.users.errMess}
						modifyUser={this.props.modifyUser}
						deleteUser={this.props.deleteUser}
					/>
					
					<ModalNewUsuario 
					usersFailed={this.props.users.errMess}
					resetForm={this.props.resetForm}
					postUser={this.props.postUser}/>
				</div>
			
			</div>
          </Paper>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);