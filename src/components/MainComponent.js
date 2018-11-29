import React, { Component } from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ListaUsuarios from './ListaUsuarios.js';
import {connect} from 'react-redux';
import {postUser, fetchUsers, modifyUser, deleteUser, resetForm} from '../redux/ActionCreators';
import UserDetail from './UserDetail';
import  {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import ErrorSnackbar from './Snackbars';


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
	 
	 
	 
	const ListaUsuariosComponent = () => {
		return(
			<ListaUsuarios 
					formSubmitting = {this.props.users.formSubmitting}
					users = {this.props.users.users}
					usersLoading = {this.props.users.isLoading}
					usersFailed =  {this.props.users.errMess}
					modifyUser={this.props.modifyUser}
					deleteUser={this.props.deleteUser}
					resetForm={this.props.resetForm}
					postUser={this.props.postUser}
				/>
		);
	}
	const UserDetailComponent = ({match}) => {
		
		return(
			<UserDetail 
				user={this.props.users.users.filter( (user) => user.id === parseInt(match.params.userId,10))[0]}
				usersLoading = {this.props.users.isLoading}
				usersFailed = {this.props.users.errMess}
				/>
		);
	} 	
	
	let error = this.props.users.errorSubmitting && (<ErrorSnackbar message={this.props.users.errorSubmitting}/>);
	

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
		
			<Switch>
				<Route exact path="/usuarios" component={ListaUsuariosComponent}/> 
				<Route path="/usuarios/:userId" component={UserDetailComponent} />
				<Redirect to="/usuarios" />
			</Switch>
   
   
			
			</div>
          </Paper>
        </div>
			{error}
      </div>
    );
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));