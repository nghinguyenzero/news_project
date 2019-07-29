import * as Types from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('HISTORY'));
var initialState = data ? data : [];
const history = (state = initialState, action) => {
    var { news } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_HISTORY: console.log(action);
            index = findNewsInHistory(state, news);
            var today = new Date();
            var timeView = today.getTime()
            if (index !== -1) {
                state[index].timeView = timeView;
            } else {
                state.push({
                    news,
                    timeView
                });
            }
            localStorage.setItem('HISTORY', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
};

const findNewsInHistory = (history, news) => {
    var index = -1;
    var n = history.length;
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            if (history[i].news.id === news.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default history;