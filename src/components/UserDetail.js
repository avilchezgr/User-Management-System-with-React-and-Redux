import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import './UserDetail.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import UsersError from './UsersError';
import Loading from './LoadingComponent';
import {Link} from 'react-router-dom';
const UserDetail = (props) => {
	
	let content;
	if(props.usersLoading){
		content = 	(
			<div>
				<Loading />
			</div>
			);
	}else if(props.usersFailed){
		content = (
			<UsersError/>
		);
	}else if(props.user != null){

		const MyLink = props => <Link to="/usuarios" {...props} />
		
		content = (
			<React.Fragment>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell>			
								<span><strong>Name</strong></span>
							</TableCell>
							<TableCell>
								<span>{props.user.name}</span>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>						
								<span><strong>Last Name</strong></span>
							</TableCell>
							<TableCell>
								<span>{props.user.lastName}</span>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>		
								<span><strong>Age</strong></span>
							</TableCell>
							<TableCell>
								<span>{props.user.age}</span>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<span><strong>Email</strong></span>
							</TableCell>
							<TableCell>
								<span>{props.user.email}</span>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
				<Button style={{marginTop: 20}} component={MyLink}>
					<span>
						
						
					<SvgIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/><path fill="none" d="M0 0h24v24H0z"/></SvgIcon>
						
						
					</span>
					<span>   User List</span>
				</Button>
				
			</React.Fragment>
		);
	}else{ //if user is null
		content = <UsersError/>;
	}
	
	return (
		<div className="userDetail" >	
			<Typography style={{
								color:"grey",
								fontWeight:'500'
							}} component="h3" variant="h4" gutterBottom>
					User Detail
					</Typography>
			{content}
		</div>
	
	);
}

export default UserDetail;