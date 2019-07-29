import * as Types from "./../constants/ActionTypes";
var initialState = [];
const newsList = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_NEWS_LIST: 
            state = action.newsList;
        return [...state];
        default: return [...state];
    }
};

export default newsList;