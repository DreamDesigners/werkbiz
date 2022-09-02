
const validation = (state) => {
  const errors = {};

  if (!state.subscriber_name) {
    errors.subscriber_name = 'Name is required';
  }

  if (!state.subscriber_email) {
    errors.subscriber_email = 'Email is required';
  } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(state.subscriber_email)) {
    errors.subscriber_email = 'Please enter valid email';
  }

  if (!state.subscriber_phone) {
    errors.subscriber_phone = 'Phone number is required';
  } else if (state.subscriber_phone.length < 10 || state.subscriber_phone.length > 10) {
    errors.subscriber_phone = 'Please enter valid phone number';
  }

  if (!state.subscriber_campany_name) {
    errors.subscriber_campany_name = 'Company name is required';
  }

  if (!state.subscriber_message) {
    errors.subscriber_message = 'Message is required';
  }

  if (!state.area_of_interest) {
    errors.area_of_interest = 'Area of interest is required';
  }

  if (!state.subscriber_city_name) {
    errors.subscriber_city_name = 'City is required';
  }

  if (!state.file_url) {
    errors.file_url = 'File is required';
  }

  if (!state.sign_url) {
    errors.sign_url = 'Sign is required';
  }

  if (!state.age) {
    errors.age = 'Age is required';
  }

  if (!state.qualification) {
    errors.qualification = 'Qualification is required';
  }

  if (!state.state) {
    errors.state = 'State is required';
  }

  if (!state.subscriber_worklocation) {
    errors.subscriber_worklocation = 'Location is required';
  }

  if (!state.subscriber_bloodgroup) {
    errors.subscriber_bloodgroup = 'Blood group is required';
  }

  if (!state.subscriber_dob) {
    errors.subscriber_dob = 'Date of birth is required';
  }

  if (!state.subscriber_doj) {
    errors.subscriber_doj = 'Date of joining is required';
  }

  return errors;
};

export default validation;


