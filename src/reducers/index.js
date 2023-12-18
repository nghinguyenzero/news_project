import { combineReducers } from 'redux';
import articles from "./articles";
import article from "./article";
import history from "./history";
import keyword from "./keyword";
import products from './products';
import cart from './cart';
import message from './message';

const appReducers = combineReducers({
    articles, article, history, keyword,
        products,
    cart,
    message
});
export default appReducers;
