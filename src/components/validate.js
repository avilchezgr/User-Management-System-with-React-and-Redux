export default function(values) {
  const errors = {};
  const requiredFields = [
    'name',
    'lastName',
    'age',
    'email',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if(values.age && isNaN(values.age)){
	  errors.age = 'Must be a Number';
  }
  return errors;
}