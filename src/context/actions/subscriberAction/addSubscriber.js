import { CREATE_SUBSCRIBER,CREATE_SUBSCRIBER_ERR } from '../../actionTypes/subscriberType'
import { createSubscriberApi} from 'api/Api';
import axios from "axios";
export const createSubscriber = payload => async dispatch => {
    try {
        //console.log('payload',payload)
        let results = await axios.post(`${createSubscriberApi}`,payload)
        console.log("CREATE SUBSCRIBER", results)
        let data = results && results.data
        dispatch({
            type: CREATE_SUBSCRIBER,
            payload: data || [],
        });
    } catch (error) {
        dispatch({
            type: CREATE_SUBSCRIBER_ERR,
            payload: error && error.response
        });
    }
}

