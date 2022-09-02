import {
  CREATE_SUBSCRIBER,
  CREATE_SUBSCRIBER_ERR,
} from "../../actionTypes/subscriberType";

export default (state, action) => {
  switch (action.type) {
    case CREATE_SUBSCRIBER:
      return {
        ...state,
        createSubscriber: action.payload,
        ...state.data,
      };

    case CREATE_SUBSCRIBER_ERR:
      return {
        ...state,
        createSubscriber: { getdata: action.payload },
      };

    default:
      return state;
  }
};
