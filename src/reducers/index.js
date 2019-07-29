import {combineReducers} from 'redux';
import articles from "./articles";
import article from "./article";
import history from "./history";
import key from "./key";

const appReducers = combineReducers({
    articles, article, history, key
});
export default appReducers;