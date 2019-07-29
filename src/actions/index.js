import * as Types from './../constants/ActionTypes';
import callApi from "./../utils/apiCaller";

export const actFetchNewsListRequest = () => {
    return (dispatch) => {
        return callApi('newsList', 'GET', null).then(res => {
            dispatch(actFetchNewsList(res.data));
        })
    };

}

export const actFetchNewsList = (newsList) => {
    return {
        type: Types.FETCH_NEWS_LIST,
        newsList
    }
}

export const actGetNewsRequest = (id) => { 
    return (dispatch) => {
        return callApi(`newsList/${id}`, 'GET', null).then(res => {
             dispatch(actGetNews(res.data));
        });
    };
}

export const actGetNews = (news) => {
    return {
        type: Types.GET_NEWS_BY_ID,
        news
    };
} 

export const actAddToHistory = (news) => {
    return {
        type: Types.FETCH_HISTORY,
        news
    };
} 

export const actSearchByKey = (key) => {
    return {
        type: Types.SEARCH_BY_KEY,
        key
    }
}

