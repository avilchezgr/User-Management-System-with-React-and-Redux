import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField'
import Button from '@material-ui/core/Button';
import validate from '../components/validate';


let EditUserForm = (props) =>{
	
		return (
			<form onSubmit={(values) => props.handleSubmit(values)}>
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
					<Button type="submit" disabled={props.submitting || props.pristine}>Submit</Button>
				</div>
			</form>
	
	);
	
	
}

	
const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
	<TextField
		hintText={label}
		floatingLabelText={label}
		errorText={touched && error}
		{...input}
		{...custom}/>
)


EditUserForm = reduxForm({
  form: 'EditUserForm', // a unique identifier for this form
  validate
})(EditUserForm);
export default EditUserForm;


