import * as Types from './../constants/ActionTypes';
import callApi from "./../utils/apiCaller";
// import * as Types from './../constants/ActionTypes';


export const actFetchArticlesRequest = () => {
    return (dispatch) => {
        return callApi('', 'GET', null).then(res => {
            dispatch(actFetchArticles(res.data.articles));
        })
    };
}
export const actFetchArticles = (articles) => {
    return {
        type: Types.FETCH_ARTICLES,
        articles
    }
}

const findArticle = (articles, id) => {
    var data = null;
    if (articles.length > 0) {
        articles.forEach((item) => {
            if (item.index === parseInt(id)) {
                data = item;
            }
        });
    }
    return data
}

export const actGetArticleRequest = (articles, id) => {
    return (dispatch) => {  
        var data = findArticle(articles, id);
        if(data != null) {
            return dispatch(actGetArticle(data));
        }
    };
}

export const actGetArticle = (article) => {
    return {
        type: Types.GET_ARTICLE,
        article
    };
}

export const actAddToHistory = (article) => {
    return {
        type: Types.FETCH_HISTORY,
        article
    };
}

export const actSearchByKey = (keyword) => { 
    return {
        type: Types.SEARCH_BY_KEY,
        keyword
    }
}


// PRODUCT

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}

