import * as React from 'react';
import validation from './validationBusiness';
import { useState, useContext, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { GlobalContext } from '../context/GlobalState';

import { createSubscriber } from '../context/actions/subscriberAction/addSubscriber';
import { Grid, TextField } from '@mui/material';
import Fab from '@mui/material/Fab';
import MessageIcon from '@mui/icons-material/Message';

const init = {
  subscriber_name: '',
  subscriber_email: '',
  subscriber_phone: '',
  subscriber_campany_name: '',
  subscriber_message: ''
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const validateEmail = (email) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );


// const validateGmail = (email) =>
// String(email)
//   .match(
//     'gmail'
//   );



const style = {
  position: 'absolute',
  top: '15%',
  left: '33%',
  border: '2px solid red',
};

export default function Find_Taskers_Common(props) {
  console.log('aaa', props)
  const { subscriberState, subscriberDispatch } = useContext(GlobalContext);

  const [state, setState] = useState(init);
  const [store, setStore] = useState([]);
  const [number, setNumber] = useState([])
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setErrors(false)
    setState(init);
    setOpen(false)
  }


  const handleChangeNumberLeadInput = (event) => {
    console.log('event', event.target.value)
    const onlyNums = event.target.value.replace(/[^0-9]/g, '');
    console.log('onlyNums', onlyNums)
    if (onlyNums.length <= 10) {
      setNumber(onlyNums)
      setState({
        ...state,
        [event.target.name]: onlyNums,
      });
    }
  }



  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };


  const handleClick = e => {
    e.preventDefault()
    setErrors(validation(state));

    if (
      state.subscriber_name !== '' &&
      state.subscriber_email !== '' &&
      // !state.subscriber_email.match("gmail") &&
      validateEmail(state.subscriber_email) &&
      // validateGmail(!state.subscriber_email) &&   
      state.subscriber_phone !== '' &&
      state.subscriber_phone.length === 10 &&
      state.subscriber_campany_name !== '' &&
      state.subscriber_message !== ''
    ) {
      const postData = {
        full_name: state.subscriber_name,
        email: state.subscriber_email,
        phone: state.subscriber_phone,
        company: state.subscriber_campany_name,
        description: state.subscriber_message
      };
      setTimeout(() => {
        console.log('Create Subscriber Detail', postData)
        createSubscriber(postData)(subscriberDispatch)
        setOpen(true);
      }, 500);
    }


  }



  useEffect(() => {
    console.log('subscriberState.createSubscriber', subscriberState.createSubscriber)
    let status = subscriberState.createSubscriber && subscriberState.createSubscriber.data && subscriberState.createSubscriber.status
    if (status == 201) {
      setState(init);
      setOpen(true);
      console.log("store", store);
      subscriberState.createSubscriber = {
        loading: false,
        error: null,
        data: null,
      }
    }
  }, [subscriberState])


  return (
    <div >
      <Snackbar open={open} onClose={handleClose} autoHideDuration={2000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" sx={{ width: '300px' }}>
          Form Successfully Submitted!
        </Alert>
      </Snackbar>
      <div class="consultation-form">
        {/* <h4 style={{ lineHeight: "1.3em" }} class="pb-20 font-montserrat fs-25 fw-600">Get in Touch With Our Experts!</h4> */}
        <form action="#">
          <div class="font-montserrat input-field">
            <Grid xs={12} >
              <TextField fullWidth label="Full Name*"
                inputProps={{
                  style: {
                    height: "20px",
                    background: '#fff'
                  },
                }} variant="outlined" type="text" name="subscriber_name" value={state.subscriber_name} onChange={handleChange} />
            </Grid>
            {errors.subscriber_name && <p style={{ color: 'red' }}>{errors.subscriber_name}</p>}
          </div>
          <div class="input-field">
            <Grid xs={12} >
              <TextField fullWidth label="Email*"

                inputProps={{
                  style: {
                    height: "20px",
                    background: '#fff'
                  },
                }} variant="outlined" type="email" name="subscriber_email" value={state.subscriber_email} onChange={handleChange} />
            </Grid>
            {errors.subscriber_email && <p style={{ color: 'red' }}>{errors.subscriber_email}</p>}
          </div>
          <div class="input-field">
            <Grid xs={12} >
              <TextField fullWidth label="Phone*"
                inputProps={{
                  style: {
                    height: "20px",
                    background: '#fff'
                  },
                }} variant="outlined" type="text" name="subscriber_phone" value={state.subscriber_phone} onChange={handleChangeNumberLeadInput} />
            </Grid>
            {errors.subscriber_phone && <p style={{ color: 'red' }}>{errors.subscriber_phone}</p>}

          </div>
          <div class="input-field">
            <Grid xs={12} >
              <TextField fullWidth label="Company Name*"
                inputProps={{
                  style: {
                    height: "20px",
                    background: '#fff'
                  },
                }} variant="outlined" type="text" name="subscriber_campany_name" value={state.subscriber_campany_name} onChange={handleChange} />
            </Grid>
            {errors.subscriber_campany_name && <p style={{ color: 'red' }}>{errors.subscriber_campany_name}</p>}
          </div>
          <div class="input-field">
            <Grid xs={12} >
              <TextField fullWidth label="Describe your requirement*"
                inputProps={{
                  style: {
                    background: '#fff'
                  },
                }}
                multiline
                rows={4}
                variant="outlined" type="text" name="subscriber_message" value={state.subscriber_message} onChange={handleChange} />
            </Grid>
            {errors.subscriber_message && <p style={{ color: 'red' }}>{errors.subscriber_message}</p>}
          </div>
          <div class="input-field">
            <button style={{ fontWeight: "500" }} type="submit" class=" template-btn" onClick={handleClick}>Submit </button>
          </div>
        </form>

      </div>
    </div>
  );
}
