import * as Types from './../constants/ActionTypes';
import * as Message from './../constants/Message';

var inittialState = Message.MSG_WELCOME;

const message = (state = inittialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE :
            return action.message;
        default: return state; 
    }
}

export default message;