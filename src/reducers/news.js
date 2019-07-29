import * as Types from './../constants/ActionTypes';
var initialState = {};
const news = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_NEWS_BY_ID:
            return action.news;
        default: return state;
    }
};

export default news;