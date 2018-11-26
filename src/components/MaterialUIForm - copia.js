import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField'
import Button from '@material-ui/core/Button';
import validate from './validate';


class MaterialUIForm extends Component{
	
	render(){
		return (
			<form onSubmit={(values) => this.props.handleSubmit(values)}>
				<div>
					<Field
					  name="name"					
					  component={renderTextField}
					  label="First Name"
					/>
				</div>
				<div>
					<Field
					  name="lastName"				
					  component={renderTextField}
					  label="Last Name"
					/>
				</div>
				<div>
					<Field
					  name="age"
					
					  component={renderTextField}
					  label="Age"
					/>
				</div>
				<div>
					<Field
					  name="email"
					
					  component={renderTextField}
					  label="Email"
					/>
				</div>	
				<div style={{marginTop:'15px'}}>
					<Button type="submit" >Submit</Button>
				</div>
			</form>
	
	);
	}
	
	
}

	
const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
	<TextField
		hintText={label}
		floatingLabelText={label}
		errorText={touched && error}
		{...input}
		{...custom}/>
)


export default reduxForm({
  form: 'MaterialUIForm', // a unique identifier for this form
  validate
})(MaterialUIForm);