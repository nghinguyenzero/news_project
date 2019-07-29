import {combineReducers} from 'redux';
import newsList from "./newsList";
import news from "./news";
import history from "./history";
import key from "./key";

const appReducers = combineReducers({
    newsList, news, history, key
});
export default appReducers;