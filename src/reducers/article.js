import * as Types from '../constants/ActionTypes';

var initialState = {};
const article = (state = initialState, action) => {  console.log('action.article',action);
    switch (action.type) {
        case Types.GET_ARTICLE:
            return action.article;
        default: return state;
    }
};

export default article;