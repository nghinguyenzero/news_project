import * as Types from './../constants/ActionTypes';
var initialState = {key:''};
const key = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_BY_KEY:
            return action.key;
        default: return state;
    }
};

export default key;