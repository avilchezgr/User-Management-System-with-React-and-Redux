import React,{Component} from 'react';
import Modal from '@material-ui/core/Modal';
import EditUserForm from '../redux/EditUserForm'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


class ModalModifyUser extends Component{
	
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
		
		this.props.modifyUser(this.props.user.id, values.name, values.lastName, values.age, values.email);
		this.closeModal();
	}
	render(){
		return(
			
			<div>
				<IconButton aria-label="Comments" onClick= {() => this.openModal()}>
					<EditIcon/>
				</IconButton>
				<Modal
				  aria-labelledby="simple-modal-title"
				  aria-describedby="simple-modal-description"
				  open={this.state.isModalOpen}
				  onClose={() => this.closeModal()}>
								
					<Paper className="modal">	
						<div>
							<Typography variant="h6" id="modal-title">
							Edit Existing User
							</Typography>
							<br/>
							<Typography variant="subtitle1" id="simple-modal-description">
							Modify the desired fields
							</Typography>
							<EditUserForm initialValues={this.props.user} onSubmit={this.handleSubmit}/>
						</div>
					</Paper>
							
							
				</Modal>
			</div>
	);
	}
	



}
export default ModalModifyUser;