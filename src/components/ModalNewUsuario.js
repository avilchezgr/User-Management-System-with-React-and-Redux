import React,{Component} from 'react';
import Modal from '@material-ui/core/Modal';
import NewUserForm from '../redux/NewUserForm'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class ModalNewUsuario extends Component{
	
	constructor(props){
		super(props);
		this.state = {isModalOpen: false};
	}
	openModal(){
		this.setState({...this.state,isModalOpen:true});
	}
	closeModal(){
		this.setState({...this.state,isModalOpen:false});
	}
	handleSubmit = (values) => {
		
		this.props.postUser(values.name, values.lastName, values.age, values.email);	
		this.props.resetForm('NewUserForm');
		this.closeModal();
		
		
	}
	render(){
		return(
			
			<div>
				<Button variant="fab" color="primary" disabled={this.props.usersFailed} aria-label="Add" style={{ width: 35, height: 30}} onClick={() =>this.openModal()}> 
					<AddIcon />
				</Button>
				<Modal
				  aria-labelledby="simple-modal-title"
				  aria-describedby="simple-modal-description"
				  open={this.state.isModalOpen}
				  onClose={() => this.closeModal()}>
								
					<Paper className="modal">	
						<div>
							<Typography variant="h6" id="modal-title">
							Add new User
							</Typography>
							<br/>
							<Typography variant="subtitle1" id="simple-modal-description">
							Data of the new User
							</Typography>
							<NewUserForm onSubmit={this.handleSubmit}/>
						</div>
					</Paper>
							
							
				</Modal>
			</div>
	);
	}
	



}
export default ModalNewUsuario;