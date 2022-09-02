import React from 'react'
import validation from '../../validationBusiness';
import { useState, useContext, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { GlobalContext } from 'context/GlobalState';

import { createSubscriber } from 'context/actions/subscriberAction/addSubscriber';
import { Grid, TextField } from '@mui/material';

const init = {
    subscriber_email: ''
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


export default function NewsLetter() {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };


    const handleClick = e => {
        e.preventDefault()
        setErrors(validation(state));

        if (
            state.subscriber_email !== '' &&
            validateEmail(state.subscriber_email)
        ) {
            const postData = {
                email: state.subscriber_email,
            };
            setTimeout(() => {
                console.log('Create Subscriber Detail', postData)
                createSubscriber(postData)(subscriberDispatch)
                setOpen(true);
            }, 500);
        }


    }



    useEffect(() => {
        console.log('subscriberState', subscriberState)
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
        <>
            <Snackbar open={open} onClose={handleClose} autoHideDuration={2000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="success" sx={{ width: '300px' }}>
                    Form Successfully Submitted!
                </Alert>
            </Snackbar>
            <div class="fancy-short-banner-three mt-100 md-mt-80" >
                <div class="container">
                    <img class="shapes-newsletter" src="assets/home/newsletter.png" alt="" />
                    <div class="bg-wrapper howitworks" style={{ background: '#001A4B', color: '#fff' }}>

                        <div class="col-lg-2" style={{ margin: 'auto' }}>
                            {/* <img style={{ width: '200px' }} src="assets/home/newsletter.png" alt="" /> */}
                        </div>
                        <div class="col-lg-7" style={{ margin: 'auto' }}>
                            <div class="row align-items-center">
                                <div class="form-wrapper" style={{ textAlign: 'center', padding: '10px', marginBottom: '30px' }}>
                                    <h2 class="font-montserrat" style={{ color: '#fff', fontSize: '40px' }}>
                                        We are here to help you grow your business
                                    </h2>
                                </div>
                            </div>
                            <div class="form-wrapper fw-700" style={{ padding: '0px' }}>
                                <form action="#">
                                    <input class="font-montserrat fw-500" type="email" name="subscriber_email" value={state.subscriber_email} onChange={handleChange} placeholder="Email address" />
                                    <button onClick={handleClick} class="font-montserrat fw-700">Subscribe</button>
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-2" style={{ margin: 'auto', marginTop: '30px' }}>
                            <img style={{ width: '200px', margin: 'auto' }} src="assets/home/message.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



